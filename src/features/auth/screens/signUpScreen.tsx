import spacing from "@/theme/spacing"
import { StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "@/components"
import { useNavigation } from "@react-navigation/native"

const SignUpScreen = () => {
    const navigation = useNavigation();
    return <SafeAreaView style={styles.container}>
        <Text>SignUp Screen</Text>
        <Button text="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: spacing.medium,
    }
})

export default SignUpScreen