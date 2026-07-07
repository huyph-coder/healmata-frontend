import { Button } from "@/components";
import { StaticScreenProps } from "@react-navigation/native"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native"

type Props = StaticScreenProps<{
    resetToken: string;
}>

const ResetPasswordScreen = ({ route }: Props) => {
    const navigation = useNavigation();
    const { resetToken } = route.params;

    return <SafeAreaView style={styles.container}>
        <Text>ResetPassword ({resetToken}) Screen</Text>
        <Button text="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
}

export default ResetPasswordScreen
