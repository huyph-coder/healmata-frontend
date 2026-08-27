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
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 35,
    width: "100%",
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
    marginBottom: 20, 
  },
  mainTitle: {
    fontSize: 20,
    color: "#1A1A1A",
    marginBottom: 16,
  },
  listContainer: {
    width: "100%",
    marginBottom: 25,
  },
  listItem: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "400",
    lineHeight: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  buttonImage: {
    width: "100%",
    height: 54, 
    resizeMode: "contain",
  },
  skipButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  skipText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
  },
});