import { Button } from "@/components";
import { spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    button: {
        marginHorizontal: 25,
    },
    buttonContainer: {
        gap: 23,
        paddingVertical: 180,
    },
})

export default styles