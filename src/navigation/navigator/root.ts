import { createStackNavigator } from "@react-navigation/stack";
import { useIsLoggedIn } from "@/hooks";
import AuthNavigator from "./auth";
import AppNavigator from "./app";

const RootNavigator = createStackNavigator({
    initialRouteName: "Auth",
    screenOptions: {
        headerShown: false,
    },
    screens: {
        Auth: AuthNavigator,
        App: {
            if: useIsLoggedIn,
            screen: AppNavigator,
        },
    }
})

export default RootNavigator;