import { Button } from "@/components"
import { auth } from "@/features/auth/api/login"
import { StackActions } from "@react-navigation/native"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleLogin = async () => {
        const result = await auth.loginBasic("test", "123456");

        if (result?.success) {
            const meResult = await auth.me();
            if (meResult?.data?.firstSetupCompleted) {
                navigation.dispatch(StackActions.replace("App", { screen: "Home" }));
            } else {
                navigation.dispatch(StackActions.replace("App", { screen: "FirstSetup" }))
            }
        }
    }

    return <SafeAreaView style={styles.container}>
        <Text>Login Screen</Text>
        <Button text="Back" onPress={() => navigation.goBack()} />
        <Button text="Login OK" style={{ backgroundColor: "green" }} onPress={handleLogin} />
        <Button text="Forgot Password" style={{ backgroundColor: "orange" }} onPress={() => navigation.navigate("Auth", { screen: "ForgotPassword" })} />
    </SafeAreaView>
}

export default LoginScreen
