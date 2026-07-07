import { Button } from "@/components";
import { StaticScreenProps } from "@react-navigation/native";
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native"

type Props = StaticScreenProps<{
    resetRequestId?: string;
}>

const VerifyResetCodeScreen = ({ route }: Props) => {
    const navigation = useNavigation();
    const { resetRequestId } = route.params;

    return <SafeAreaView style={styles.container}>
        <Text>VerifyResetCode ({resetRequestId}) Screen</Text>
        <Button text="Back" onPress={() => navigation.goBack()} />
        <Button text="Reset" onPress={() => navigation.navigate("Auth", { screen: "ResetPassword", params: { resetToken: "123456" } })} />
    </SafeAreaView>
}

export default VerifyResetCodeScreen
