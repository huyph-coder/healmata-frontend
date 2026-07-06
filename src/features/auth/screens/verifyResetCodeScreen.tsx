import { Button } from "@/components";
import spacing from "@/theme/spacing";
import { StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScreenStackProps } from "react-native-screens"
import { useNavigation } from "@react-navigation/native";
type Props = {
    resetRequestId: string;
} & ScreenStackProps
const VerifyResetCodeScreen = ({ route }: Props) => {
    const navigation = useNavigation();
    return <SafeAreaView style={styles.container}>
        <Text>VerifyResetCode Screen</Text>
        <Button text="Back" onPress={() => navigation.goBack()} />
        <Button text="Reset" onPress={() => navigation?.navigate("Auth", { screen: "ResetPassword", params: { resetToken: "123456" } as any })} />
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

export default VerifyResetCodeScreen