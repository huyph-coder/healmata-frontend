import { Button } from "@/components";
import { spacing } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },
    button: {
        marginHorizontal: 30,
        marginVertical: 10,
    },
    buttonContainer: {
        paddingVertical: 180,
    }
})

export default styles