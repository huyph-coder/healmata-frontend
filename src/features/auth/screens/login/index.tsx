import { Divider, Text, TextInput } from "@/components"
import { auth } from "@/features/auth/api"
import { StackActions } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { Image, Pressable, ScrollView, View } from "react-native"
import { useTheme } from "@/hooks"
import { AppleLoginBtn, BasicLoginBtn, GoogleLoginBtn } from "@/features/auth/components"
import CloseButton from "../../components/screenDetail/closeButton"

const LoginScreen = () => {
    const navigation = useNavigation();
    const { theme } = useTheme();

    const handleLogin = async () => {
        const result = await auth.loginBasic("test", "123456");

        if (result?.success) {
            const meResult = await auth.me();
            if (meResult?.data?.firstSetupCompleted) {
                navigation.dispatch(StackActions.replace("App", { screen: "Home" }));
            } else {
                navigation.dispatch(StackActions.replace("App", { screen: "FirstSetup" }))
            }
        }
    }

    return (<ScrollView>
        <SafeAreaView style={styles.container}>
            <Pressable style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%" }} onPress={() => navigation.canGoBack() && navigation.goBack()}>
                <Image style={{ width: 31, height: 36.17 }} source={require("@/assets/icon/back.png")} />
            </Pressable>
            <Text variant="title" style={{ textAlign: "center" }}>Login</Text>

            <View style={{ gap: 23, justifyContent: "flex-end", width: "100%" }}>
                {/* <Banner>
                    <Text style={{ flex: 1, flexWrap: "wrap" }}>Lỗi: Email sai định dạng</Text>
                </Banner> */}
                <TextInput placeholder="Email/Phone" />
                <TextInput secureTextEntry placeholder="Mật khẩu" />
            </View>

            <Text onPress={() => navigation.navigate("Auth", { screen: "ForgotPassword" })} style={{ textAlign: "right", width: "100%" }} variant="link">Forgot password?</Text>

            <View style={{
                gap: 20, width: "100%", justifyContent: "flex-end", alignItems: "center"
            }}>
                <BasicLoginBtn onPress={handleLogin} />
                <Text>
                    Don't have an account yet? <Text variant="link" onPress={() => navigation.navigate("Auth", { screen: "SignUp" })}
                    >Register now!</Text>
                </Text>
                <Divider>
                    <Text>Or</Text>
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

export default LoginScreen
