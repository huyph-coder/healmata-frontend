import { Button } from "@/components";
import spacing from "@/theme/spacing";
import { StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScreenStackProps } from "react-native-screens";
import { useNavigation } from "@react-navigation/native";

type Props = {
    resetToken: string;
} & ScreenStackProps
const ResetPasswordScreen = ({ route }: Props) => {
    const navigation = useNavigation();
    const { resetToken } = route.params;
    return <SafeAreaView style={styles.container}>
        <Text>ResetPassword ({resetToken}) Screen</Text>
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

export default ResetPasswordScreen