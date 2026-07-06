import spacing from "@/theme/spacing"
import { StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"
import { Button } from "@/components"

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();

    return <SafeAreaView style={styles.container}>
        <Text>ForgotPassword Screen</Text>
        <Button text="Back" onPress={() => navigation.goBack()} />
        <Button text="Send OTP" onPress={() => navigation.navigate("Auth", { screen: "VerifyResetCode" })} />
    </SafeAreaView>
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: spacing.medium,
    }
})