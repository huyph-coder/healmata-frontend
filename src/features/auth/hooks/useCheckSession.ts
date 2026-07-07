import { TokenManager } from "@/utils"
import { StackActions, useFocusEffect, useNavigation } from "@react-navigation/native"
import { useCallback } from "react"

const useCheckSession = () => {
    const navigation = useNavigation();
    const checkSession = useCallback(() => {
        const token = TokenManager.getToken();
        if (!token) {
            navigation.dispatch(StackActions.replace("Auth", { screen: "Welcome" }));
            return;
        }

        if (!TokenManager.isValidToken(token)) {
            TokenManager.clearToken();
            navigation.dispatch(StackActions.replace("Auth", { screen: "Welcome" }));
            return;
        }

        TokenManager.setToken(token);
        navigation.dispatch(StackActions.replace("App", { screen: "Home" }));
    }, [])
    useFocusEffect(checkSession)
}

export default useCheckSession