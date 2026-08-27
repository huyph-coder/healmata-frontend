import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 16,
  },

  closeButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    marginLeft: 24,
  },

  close: {
    fontSize: 28,
    color: "#20B2AA",
    fontWeight: "600",
  },

  title: {
    marginTop: 30,
    fontSize: 34,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    lineHeight: 42,
  },

  optionContainer: {
    marginTop: 110,
    alignItems: "center",
  },

  option: {
    width: "88%",
    height: 68,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 18,
    backgroundColor: "#FFFFFF",
  },

  icon: {
    width: 38,
    height: 38,
    resizeMode: "contain",
    marginRight: 14,
  },

  textContainer: {
    flex: 1,
    justifyContent: "center",
  },

  optionSub: {
    fontSize: 13,
    color: "#777",
  },
});