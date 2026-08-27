import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF7F2", 
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
    marginTop: 15,
    fontSize: 32,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    lineHeight: 40,
  },

  iconContainer: {
    alignItems: "center",
    marginTop: 180,
    marginBottom: 25,
  },

  lockIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  otpBox: {
    width: 48,
    height: 58,
    borderWidth: 1.5,
    borderColor: "#A3B8B0", 
    borderRadius: 14,       
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "#1F2937",
    marginHorizontal: 4,    
  },

  resendRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  resendText: {
    fontSize: 16,
    color: "#4B5563",
  },

  resendLink: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
  },

  bottomContainer: {
    marginTop: 150,
    paddingHorizontal: 24,
    marginBottom: 30,
  },

  resetButton: {
    width: "100%",
    height: 56,
    backgroundColor: "#81C784",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  resetButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});