import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "@/components"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();

    return <SafeAreaView style={styles.container}>
        <Text>ForgotPassword Screen</Text>
        <Button text="Back" onPress={() => navigation.goBack()} />
        <Button text="Send OTP" onPress={() => navigation.navigate("Auth", { screen: "VerifyResetCode", params: {} })} />
    </SafeAreaView>
}

export default ForgotPasswordScreen
