import { Button } from "@/components";
import { spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    button: {
        marginHorizontal: 30,
    },
    buttonContainer: {
        gap: 23,
        paddingVertical: 150,
    },
    text: {
        fontSize: 30,
    }
})

export default styles