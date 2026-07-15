import { Button, Text } from "@/components"
import { Image, PressableProps } from "react-native"
import { useNavigation } from "@react-navigation/native";

const BasicLoginBtn = ({ onPress }: { onPress?: PressableProps["onPress"] }) => {
    const navigation = useNavigation();

    const handleLogin = async () => {
        navigation.navigate("Auth", { screen: "Login" });
    }

    return (<Button style={{ gap: 10 }} onPress={onPress || handleLogin}>
        <Image style={{ width: 23, height: 23 }} source={require("@/assets/icon/icon-account.png")} />
        <Text>Đăng nhập</Text>
    </Button>)
}

export default BasicLoginBtn