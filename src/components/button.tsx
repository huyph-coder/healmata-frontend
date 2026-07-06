import { radius, spacing } from "@/theme";
import { useTheme } from "@react-navigation/native";
import { ActivityIndicator, Pressable, Text, ViewStyle } from "react-native";

type ButtonProps = {
    text: string;
    isLoading?: boolean;
    onPress?: () => void;
}
const Button = (props: ButtonProps & { style?: ViewStyle }) => {
    const theme = useTheme();
    return (
        <Pressable
            onPress={props?.onPress}
            style={{
                backgroundColor: theme.colors.primary,
                padding: spacing.medium,
                borderRadius: radius.medium,
                minWidth: 120,
                flexDirection: "row",
                justifyContent: "center",
                ...props.style
            }}
        >
            {props.isLoading ? <ActivityIndicator /> : <Text style={{ color: theme.colors.text }}>{props?.text}</Text>}
        </Pressable>
    );
}

export default Button;
