import { Image, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import { useCheckSession } from "@/features/auth/hooks"
import { Spinner } from "@/components"

const SplashScreen = () => {
    useCheckSession()

    return <SafeAreaView style={styles.container}>
        <Image
            source={require("@/assets/splash/logo.png")}
        />
        <Spinner />
    </SafeAreaView>
}

export default SplashScreen
