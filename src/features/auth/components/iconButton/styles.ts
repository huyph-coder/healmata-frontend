import { radius, typography } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 16,
    width: "100%",
    height: 50,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    backgroundColor: "#bec1be",
  },
  text: {
    fontSize: typography.fontSize.medium,
  },
  iconContainer: {
    backgroundColor: "black",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginHorizontal: 15,
  },
  textContainer: {
    flexShrink: 1,
    width: "100%",
    marginRight: 10,
  },
});

export default styles;
