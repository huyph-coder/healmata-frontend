import { StaticParamList } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./authStack";
import AppStack from "./appStack";
import { useIsLoggedIn } from "@/hooks";
export type RootStackParamList = StaticParamList<typeof RootStack>;

const RootStack = createStackNavigator({
    initialRouteName: "Auth",
    screenOptions: {
        headerShown: false,
    },
    screens: {
        Auth: AuthStack,
        App: {
            if: useIsLoggedIn,
            screen: AppStack,
        },
    }
})

export default RootStack;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends StaticParamList<typeof RootStack> { }
    }
}