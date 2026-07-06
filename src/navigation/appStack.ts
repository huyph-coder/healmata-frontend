import { FirstSetupScreen, HomeScreen } from "@/screens";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator({
    screenOptions: {
        headerShown: false,
    },
    screens: {
        Home: HomeScreen,
        FirstSetup: FirstSetupScreen,
    }
})

export default AppStack;