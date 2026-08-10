import { SafeAreaView } from "react-native-safe-area-context"
import { Button, Text } from "@/components"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { Image, Pressable, View } from "react-native"

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();

    return <SafeAreaView style={styles.container}>
        <Pressable style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%" }} onPress={() => navigation.canGoBack() && navigation.goBack()}>
            <Image style={{ width: 31, height: 36.17 }} source={require("@/assets/icon/back.png")} />
        </Pressable>
        <Text variant="title" style={{ textAlign: "center", "width": 160, "height": 70, backgroundColor: "lightgray" }}>Bạn quên mật khẩu?</Text>
        <View>
            <Button>
                <Text>Gửi mã khôi phục qua email</Text>
            </Button>
        </View>
    </SafeAreaView>
}

export default ForgotPasswordScreen
