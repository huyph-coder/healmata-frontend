import { spacing } from "@/theme";
import safeArea from "@/theme/safeArea";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: spacing.md,
        paddingTop: safeArea.top,
        paddingRight: safeArea.right,
        paddingBottom: safeArea.bottom,
        paddingLeft: safeArea.left,
    }
})

export default styles;