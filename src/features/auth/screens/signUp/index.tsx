import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import styles from "./styles";

export default function SignUpScreen() {
  const navigation = useNavigation<any>();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    let valid = true;

    setFullNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!fullName.trim()) {
      setFullNameError("Vui lòng nhập họ tên");
      valid = false;
    }

    if (!email.trim()) {
      setEmailError("Vui lòng nhập Email hoặc Số điện thoại");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Vui lòng nhập mật khẩu");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự"); 
      valid = false;
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Vui lòng xác nhận mật khẩu");
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Mật khẩu xác nhận không khớp");
      valid = false;
    }

    if (!valid) return;

    try {
      setIsLoading(true);
      Alert.alert("Thành công", "Đăng ký tài khoản thành công!", [
        {
          text: "Đăng nhập ngay",
          onPress: () => navigation.navigate("Login"),
        },
      ]);
    } catch (error) {
      console.log("SIGNUP ERROR:", error);
      Alert.alert("Lỗi", "Có lỗi xảy ra khi đăng ký. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                } else {
                  navigation.navigate("Welcome");
                }
              }}
            >
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Sign up</Text>

          <View style={styles.formContainer}>
            <TextInput
              placeholder="Full name"
              placeholderTextColor="#9CA3AF"
              style={[styles.input, fullNameError ? styles.inputError : null]}
              value={fullName}
              onChangeText={(text) => {
                setFullName(text);
                if (fullNameError) setFullNameError("");
              }}
              autoCorrect={false}
            />
            {fullNameError ? <Text style={styles.errorText}>{fullNameError}</Text> : null}

            <TextInput
              placeholder="Email/Phone"
              placeholderTextColor="#9CA3AF"
              style={[styles.input, emailError ? styles.inputError : null]}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (emailError) setEmailError("");
              }}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

            <TextInput
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              style={[styles.input, passwordError ? styles.inputError : null]}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (passwordError) setPasswordError("");
              }}
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

            <TextInput
              placeholder="Confirm password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              style={[styles.input, confirmPasswordError ? styles.inputError : null]}
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                if (confirmPasswordError) setConfirmPasswordError("");
              }}
            />
            {confirmPasswordError ? (
              <Text style={styles.errorText}>{confirmPasswordError}</Text>
            ) : null}

            <TouchableOpacity
              style={[
                styles.signUpButton,
                isLoading ? styles.signUpButtonDisabled : null,
              ]}
              onPress={handleSignUp}
              activeOpacity={0.8}
              disabled={isLoading}
            >
              <Text style={styles.signUpButtonText}>
                {isLoading ? "Loading..." : "Sign up"}
              </Text>
            </TouchableOpacity>

            <View style={styles.loginRow}>
              <Text style={styles.loginText}>Do you already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginLink}>Login!</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.divider}>
              <View style={styles.line} />
              <Text style={styles.or}>Hoặc</Text>
              <View style={styles.line} />
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.socialButton}>
              <Image
                source={require("../../../../assets/images/apple.png")}
                style={styles.socialImage}
                resizeMode="stretch"
              />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={styles.socialButton}>
              <Image
                source={require("../../../../assets/images/google.png")}
                style={styles.socialImage}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}