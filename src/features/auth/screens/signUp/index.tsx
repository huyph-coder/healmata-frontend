import { Banner, Button, Divider, Text, TextInput } from "@/components"
import { Image, Pressable, ScrollView, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { AppleLoginBtn, GoogleLoginBtn } from "@/features/auth/components"

const SignUpScreen = () => {
    const navigation = useNavigation();

    const handleSignUp = () => { 
        console.log("SignUp");
    }

    return (<ScrollView>
        <SafeAreaView style={styles.container}>
            <Pressable style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%" }} onPress={() => navigation.canGoBack() && navigation.goBack()}>
                <Image style={{ width: 31, height: 36.17 }} source={require("@/assets/icon/back.png")} />
            </Pressable>

            <Text variant="title" style={{ textAlign: "center" }}>Tạo tài khoản</Text>

            <View style={{ gap: 23, justifyContent: "flex-end", width: "100%" }}>
                {/* <Banner>
                    <Text style={{ flex: 1, flexWrap: "wrap" }}>Lỗi: Email sai định dạng</Text>
                </Banner> */}
                <TextInput placeholder="Tên đầy đủ của bạn" />
                <TextInput placeholder="Email/Phone" />
                <TextInput placeholder="Mật khẩu" />
                <TextInput placeholder="Xác nhận mật khẩu" />
            </View>

            <View style={{
                gap: 20, width: "100%", justifyContent: "flex-end", alignItems: "center"
            }}>
                <Button onPress={handleSignUp}>
                    <Text>Tạo tài khoản</Text>
                </Button>
                <Text>
                    Bạn đã có tài khoản? <Text variant="link" onPress={() => navigation.navigate("Auth", { screen: "Login" })}>Đăng nhập</Text>
                </Text>
                <Divider>
                    <Text>Hoặc</Text>
                </Divider>
            </View>

            <View style={{
                gap: 23, width: "100%", alignItems: "center"
            }}>
                <View style={{ flexDirection: "row" }}>
                    <AppleLoginBtn />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <GoogleLoginBtn />
                </View>
            </View>

        </SafeAreaView>
    </ScrollView>)
}

export default SignUpScreen
