import { FirstSetupScreen, HomeScreen } from "@/features/app/screens";
import { createStackNavigator } from "@react-navigation/stack";

const AppNavigator = createStackNavigator({
    screenOptions: {
        headerShown: false,
    },
    screens: {
        Home: HomeScreen,
        FirstSetup: FirstSetupScreen,
    }
})

export default AppNavigator;