import { typography } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 25,
  },
  text: {
    fontSize: 30,
    fontFamily: typography.fontFamily.regular,
    fontWeight: "bold",
  },
});

export default styles;
