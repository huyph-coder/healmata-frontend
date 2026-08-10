import { useTheme } from "@/hooks"
import { radius, shadow, sizes, spacing, typography } from "@/theme";
import { useState } from "react";
import { BoxShadowValue, TextInput as TextInputBase, TextInputProps, View } from "react-native";

type InputVariant = keyof typeof typography;

const TextInput = ({ variant = "body", style, props, children, placeholder, secureTextEntry }: { secureTextEntry?: boolean; placeholder?: string; style?: TextInputProps["style"]; variant?: InputVariant; props?: TextInputProps; children?: React.ReactNode }) => {
    const [isFocused, setFocused] = useState(false);
    const [isActive, setActive] = useState(false);
    const [isError, setError] = useState(false);
    const { theme } = useTheme();

    return (<View style={{
        width: "100%",
        boxShadow: (isFocused || isActive) && !isError ? [shadow.input] : undefined,
        borderWidth: 0.95,
        borderTopLeftRadius: radius.input.md,
        borderTopRightRadius: radius.input.md,
        borderBottomLeftRadius: radius.input.md,
        borderBottomRightRadius: radius.input.md,
        borderColor: isError ? theme.colors.error : theme.colors.border,
        height: sizes.input.md,
    }}>
        <TextInputBase style={{
            flex: 1,
            paddingTop: spacing.md,
            paddingBottom: spacing.md,
            paddingLeft: 39,
            paddingRight: 39,
            color: theme.colors.text.primary,
            ...typography[variant],
            ...style,
        }} {...props}
            placeholder={(!isFocused && !isActive) ? placeholder : undefined}
            secureTextEntry={secureTextEntry}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onTouchStart={() => setActive(true)}
            onTouchEnd={() => setActive(false)}
        >
            {children}
        </TextInputBase>
    </View>)
}

export default TextInput;