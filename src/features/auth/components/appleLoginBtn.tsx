import { Button, Text } from "@/components"
import useTheme from "@/hooks/useTheme";
import { Image, PressableProps } from "react-native"

const AppleLoginBtn = ({ onPress }: { onPress?: PressableProps["onPress"] }) => {
    const { theme } = useTheme();

    const handleLogin = async () => {
        console.log("Apple Login");
    }

    return (<Button style={{ gap: 10, backgroundColor: theme.colors.apple }} onPress={onPress || handleLogin}>
        <Image style={{ width: 23, height: 23 }} source={require("@/assets/icon/apple.png")} />
        <Text style={{ color: theme.colors.text.apple }}> Sign in with Apple </Text>
    </Button>)
}

export default AppleLoginBtn