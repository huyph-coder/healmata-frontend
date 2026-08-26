import { useTheme } from "@/hooks"
import { radius, sizes, spacing } from "@/theme";
import { Pressable, PressableProps, View } from "react-native";

const Button = ({ onPress, props, children, style }: { onPress?: PressableProps["onPress"]; props?: PressableProps; children?: React.ReactNode; style?: PressableProps["style"] }) => {
    const { theme } = useTheme();

    return (
        <Pressable
            style={({ pressed }) => [
                {
                    flex: 1,
                    padding: spacing.md,
                    borderRadius: radius.button.lg,
                    opacity: pressed ? 0.8 : 1,
                    backgroundColor: props?.disabled ? theme.colors.disabled : theme.colors.primary,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: sizes.button.md,
                    borderTopLeftRadius: radius.button.md,
                    borderTopRightRadius: radius.button.md,
                    borderBottomLeftRadius: radius.button.md,
                    borderBottomRightRadius: radius.button.md,
                    paddingHorizontal: spacing.md,
                    ...style
                }
            ]}
            {...props}
            onPress={onPress}
        >
            {children}
        </Pressable >
    );
}

export default Button;