import { StaticScreenProps } from "@react-navigation/native";
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles";

type Props = StaticScreenProps<{
    resetRequestId?: string;
}>

const VerifyResetCodeScreen = ({ route }: Props) => {
    const { resetRequestId } = route.params;

    return <SafeAreaView style={styles.container}>
        <Text>VerifyResetCode ({resetRequestId}) Screen</Text>
    </SafeAreaView>
}

export default VerifyResetCodeScreen
