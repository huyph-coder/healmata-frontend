import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import { Button, Text } from "@/components"
import { Image, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { StackActions, useNavigation } from "@react-navigation/native"

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (<LinearGradient colors={['#CBECBD', '#EEF7F2']}
        start={{ x: 0.50, y: 1.00 }}
        end={{ x: 0.50, y: 0.00 }}
        style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
            <View style={{ gap: 30 }}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("@/assets/welcome/icon.png")} />
                </View>
                <Text style={{ textAlign: "center" }} variant="hero">Chăm sóc sức khoẻ chủ động</Text>
                <Text style={{ textAlign: "center" }} variant="caption">Theo dõi, nhắc nhở và chăm sóc sức khỏe mỗi ngày.</Text>
            </View>
            <View style={{ gap: 23, width: "100%", justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "row" }}>
                    <Button onPress={() => navigation.navigate("Auth", { screen: "Login" })} style={{ gap: 10 }}>
                        <Image style={{ width: 23, height: 23 }} source={require("@/assets/icon/icon-account.png")} />
                        <Text>Đăng nhập</Text>
                    </Button>
                </View>
                <Text variant="body">
                    Chưa có tài khoản? <Text variant="link" onPress={() => navigation.navigate("Auth", { screen: "SignUp" })}>Đăng ký</Text>
                </Text>
            </View>
        </SafeAreaView>
    </LinearGradient>)

}

export default WelcomeScreen
