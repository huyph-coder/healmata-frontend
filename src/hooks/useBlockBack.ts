import { BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect } from "react";

export const useBlockBack = (isFocused?: false) => {
    const handleBlock = useCallback(() => {
        const handleBackPress = () => true;
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            handleBackPress
        );
        return () => backHandler.remove();
    }, [])

    isFocused ? useFocusEffect(handleBlock) : useEffect(handleBlock, [])
}

export default useBlockBack;