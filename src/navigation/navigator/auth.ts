import { ForgotPasswordScreen, LoginScreen, SignUpScreen, VerifyResetCodeScreen, WelcomeScreen, ResetPasswordScreen, SplashScreen } from "@/features/auth/screens";
import { createStackNavigator } from "@react-navigation/stack";

const AuthNavigator = createStackNavigator({
    initialRouteName: "Splash",
    screenOptions: {
        headerShown: false,
    },
    screens: {
        Splash: SplashScreen,
        Login: LoginScreen,
        ResetPassword: ResetPasswordScreen,
        VerifyResetCode: VerifyResetCodeScreen,
        Welcome: WelcomeScreen,
        SignUp: SignUpScreen,
        ForgotPassword: ForgotPasswordScreen,
    }
})

export default AuthNavigator;