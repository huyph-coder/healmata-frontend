import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "@/components"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

const HomeScreen = () => {
    const navigation = useNavigation();

    return <SafeAreaView style={styles.container}>
        <Text>Home Screen</Text>
        <Button text="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
}

export default HomeScreen