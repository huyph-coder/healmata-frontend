import { Button } from "@/components"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return <SafeAreaView style={styles.container}>
        <Text>Welcome Screen</Text>
        <Button text="Back" onPress={() => navigation.goBack()} />
        <Button text="Home" style={{ backgroundColor: "orange" }} onPress={() => navigation.navigate("App", { screen: "Home" })} />
        <Button text="Login" style={{ backgroundColor: "red" }} onPress={() => navigation.navigate("Auth", { screen: "Login" })} />
        <Button text="Create Account" style={{ backgroundColor: "green" }} onPress={() => navigation.navigate("Auth", { screen: "SignUp" })} />
    </SafeAreaView>
}

export default WelcomeScreen
