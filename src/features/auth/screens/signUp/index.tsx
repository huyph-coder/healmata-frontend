import { Button } from "@/components"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"

const SignUpScreen = () => {
    const navigation = useNavigation();

    return <SafeAreaView style={styles.container}>
        <Text>SignUp Screen</Text>
        <Button text="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
}

export default SignUpScreen
