import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 150,
    paddingBottom: 100,
  },

  center: {
    alignItems: "center",
  },

  logo: {
    width: 350,
    height: 300,
  },

  title: {
    marginTop: 12,
    fontSize: 32,
    fontWeight: "700",
    color: "#5A6270", 
  },

  loading: {
    transform: [{ scale: 1.3 }],
  },
});