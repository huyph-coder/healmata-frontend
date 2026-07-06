import { TokenManager } from "@/features/auth/utils";
import { navigationRef } from "@/navigation/navRef";
import { StackActions } from "@react-navigation/native";

let unsubscribe: (() => void) | undefined;

const navigationProvider = {
    checkSession() {
        if (navigationRef.isReady()) {

            const token = TokenManager.getToken();
            if (!token) {
                navigationRef.dispatch(StackActions.replace("Auth", { screen: "Welcome" }));
                return;
            }

            if (!TokenManager.isValidToken(token)) {
                TokenManager.clearToken();
                navigationRef.dispatch(StackActions.replace("Auth", { screen: "Welcome" }));
                return;
            }

            TokenManager.setToken(token);
            navigationRef.dispatch(StackActions.replace("App", { screen: "Home" }));
        }

        if (unsubscribe) return;

        unsubscribe = navigationRef.addListener("ready", () => {
            unsubscribe?.();
            unsubscribe = undefined;
            navigationProvider.checkSession();
        });
    },
};

export default navigationProvider;