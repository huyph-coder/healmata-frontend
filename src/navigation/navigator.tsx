import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../features/auth/screens/splash";
import WelcomeSetupScreen from "../features/auth/screens/welcomeSetup"; 
import WelcomeSetupScreen1 from "../features/auth/screens/welcomeSetup1"; 
import WelcomeSetupScreen2 from "../features/auth/screens/welcomeSetup2";
import WelcomeSetupScreen3 from "../features/auth/screens/welcomeSetup3";
import WelcomeScreen from "../features/auth/screens/welcome";
import LoginScreen from "../features/auth/screens/login";
import SignUpScreen from "../features/auth/screens/signUp"; 
import ForgotPasswordScreen from "../features/auth/screens/forgotPassword";
import VerifyResetCodeScreen from "../features/auth/screens/verifyResetCode"; 
import ResetPasswordScreen from "../features/auth/screens/resetPassword"; 

const RootStack = createNativeStackNavigator({
  screens: {
    Splash: SplashScreen,
    welcomeSetup: WelcomeSetupScreen,
    welcomeSetup1: WelcomeSetupScreen1,
    welcomeSetup2: WelcomeSetupScreen2,
    welcomeSetup3: WelcomeSetupScreen3,
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    signUp: SignUpScreen, 
    forgotPassword: ForgotPasswordScreen,
    VerifyResetCode: VerifyResetCodeScreen, 
    ResetPassword: ResetPasswordScreen, 
  },
  screenOptions: {
    headerShown: false,
  },
});

export const RootNavigator = createStaticNavigation(RootStack);