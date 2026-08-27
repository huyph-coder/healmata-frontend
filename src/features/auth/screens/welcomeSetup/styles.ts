import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  contentContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 45,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  indicatorBar: {
    width: 36,
    height: 4,
    backgroundColor: "#4CAF50", 
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 35,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1A1A1A",
    lineHeight: 36,
    marginBottom: 40,
  },
  brandName: {
    color: "#1A1A1A",
    fontWeight: "800",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonImage: {
    width: "100%",
    height: 54, 
    resizeMode: "contain",
  },
});