import { spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#EEF7F2",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingTop: 100,
  },
  inputContainer: {
    gap: 15,
    marginTop: 180,
    marginBottom: 130,
    justifyContent: "center",
    alignItems: 'center',
  },
  icon: {
    width: 50.25,
    height: 55.83,
  },
  otpInput: {
    flexDirection: "row",
    gap: 6,
  },
  text: {
    fontSize: 16,
  },
});

export default styles;
