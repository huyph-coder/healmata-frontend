import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { useCheckSession } from "@/features/auth/hooks"

const SplashScreen = () => {
    useCheckSession()

    return <SafeAreaView style={styles.container}>
        <Text>Splash Screen</Text>
    </SafeAreaView>
}

export default SplashScreen
