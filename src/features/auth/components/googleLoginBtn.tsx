import { Button, Text } from "@/components"
import useTheme from "@/hooks/useTheme";
import { Image, PressableProps } from "react-native"

const GoogleLoginBtn = ({ onPress }: { onPress?: PressableProps["onPress"] }) => {
    const { theme } = useTheme();

    const handleLogin = async () => {
        console.log("Google Login");
    }

    return (<Button style={{ gap: 10, backgroundColor: theme.colors.google }} onPress={onPress || handleLogin}>
        <Image style={{ width: 23, height: 23 }} source={require("@/assets/icon/google.png")} />
        <Text style={{ color: theme.colors.text.google }}> Sign in with Google </Text>
    </Button>)
}

export default GoogleLoginBtn