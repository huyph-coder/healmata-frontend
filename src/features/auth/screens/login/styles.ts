import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    content: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 38,    
    },

    topBar: {
        width: "100%",
        alignItems: "flex-start",
        marginBottom: 20,
    },

    closeButton: {
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
    },

    backImage: {
        width: 30,
        height: 30,
    },

    title: {
        fontSize: 32,
        fontWeight: "700",
        textAlign: "center",
        color: "#2D2D2D",
        marginBottom: 40,    
    },

    formContainer: {
        width: "100%",
        maxWidth: 400,
        alignItems: "center",
    },

    input: {
        width: "100%",
        height: 56,
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderRadius: 14,
        paddingHorizontal: 18,
        fontSize: 15,
        marginBottom: 14,    
        color: "#222",
        backgroundColor: "#FFF",
    },

    inputError: {
        borderColor: "#E53935",
    },

    errorText: {
        width: "100%",
        color: "#E53935",
        fontSize: 13,
        marginBottom: 10,
        marginLeft: 4,
        textAlign: "left",
    },

    forgot: {
        alignSelf: "flex-end",
        marginBottom: 70, 
        marginTop: 4,
    },

    forgotText: {
        fontSize: 14,
        color: "#4B5563",
        fontWeight: "500",
    },

    loginButton: {
        width: "100%",
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,    
    },

    loginButtonDisabled: {
        opacity: 0.6,
    },

    loginImage: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch", 
    },

    registerRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,   
    },

    registerText: {
        color: "#4B5563",
        fontSize: 14,
    },

    registerLink: {
        color: "#111827",
        fontWeight: "700",
        fontSize: 14,
        textDecorationLine: "underline",
    },

    divider: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,    
        width: "100%",
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#E5E7EB",
    },

    or: {
        marginHorizontal: 16,
        color: "#6B7280",
        fontSize: 14,
    },

    socialButton: {
        width: "100%",
        height: 56, 
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 14,   
    },

    socialImage: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch", 
    },
});