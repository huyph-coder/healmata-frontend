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
    marginTop: 10,
    fontSize: 32,
    fontWeight: "700",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 200, 
  },

  formContainer: {
    paddingHorizontal: 24,
  },

  inputBox: {
    width: "100%",
    height: 60,        
    borderWidth: 1.5,
    borderColor: "#A3B8B0",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#1F2937",
    marginBottom: 16,  
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