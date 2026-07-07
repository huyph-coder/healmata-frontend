import RootNavigator from "./navigator/root";
import type { StaticParamList } from "@react-navigation/native";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends StaticParamList<typeof RootNavigator> { }
    }
}