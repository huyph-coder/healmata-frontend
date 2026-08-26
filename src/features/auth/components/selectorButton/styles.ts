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
    height: 60,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    backgroundColor: "#c5c8c5",
    opacity: 0.75,
  },
  text: {
    fontSize: 16,
  },
  iconContainer: {
    backgroundColor: "black",
    width: 40,
    height: 40,
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
