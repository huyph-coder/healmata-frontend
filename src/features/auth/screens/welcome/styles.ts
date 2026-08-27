import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  safe: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 50, 
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
  },

  logo: {
    width: 140,  
    height: 140, 
    marginBottom: 16,
    resizeMode: "contain",
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2D2D2D",
    textAlign: "center",
    lineHeight: 34,
  },

  subTitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },

  bottomContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 70, 
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12, 
    width: "100%",
  },

  loginImage: {
    width: "100%", 
    height: 50, 
    resizeMode: "contain",
  },

  register: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  registerText: {
    color: "#666",
    fontSize: 14,
  },

  registerLink: {
    color: "#000",
    fontWeight: "700",
    textDecorationLine: "underline",
    fontSize: 14,
  },
});