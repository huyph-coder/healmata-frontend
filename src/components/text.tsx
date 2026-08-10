import { useTheme } from "@/hooks"
import { typography } from "@/theme";
import { Text as TextBase, TextProps } from "react-native";

type TextVariant = keyof typeof typography;

const Text = ({ variant = "body", onPress, style, props, children }: { onPress?: TextProps["onPress"]; style?: TextProps["style"]; variant?: TextVariant; props?: TextProps; children?: React.ReactNode }) => {
    const { theme } = useTheme();

    return (<TextBase style={{
        color: theme.colors.text.primary,
        ...typography[variant],
        ...style
    }} {...props} onPress={onPress}>
        {children}
    </TextBase>)
}

export default Text;