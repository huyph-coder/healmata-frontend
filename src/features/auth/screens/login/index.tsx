import React, { useState } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import { auth } from "@/features/auth/api/login";
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

export default function LoginScreen() {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    let valid = true;

    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Vui lòng nhập Email hoặc Số điện thoại");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Vui lòng nhập mật khẩu");
      valid = false;
    }

    if (!valid) return;

    try {
      setIsLoading(true);

      const result = await auth.loginBasic(email.trim(), password);

      if (result?.success) {
        const meResult = await auth.me();

        Alert.alert("Thông báo", "Đăng nhập thành công!", [
          {
            text: "OK",
            onPress: () => {
              if (meResult?.data?.firstSetupCompleted) {
                navigation.dispatch(
                  StackActions.replace("App", { screen: "Home" })
                );
              } else {
                navigation.dispatch(
                  StackActions.replace("App", { screen: "FirstSetup" })
                );
              }
            },
          },
        ]);
      } else {
        setEmailError("Tài khoản hoặc mật khẩu không chính xác");
      }
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      Alert.alert("Lỗi", "Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại.");
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
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
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
            <Image
              source={require("../../../../assets/images/back.png")}
              style={styles.backImage}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <Text style={styles.title}>Login</Text>

          <TextInput
            placeholder="Email/Phone"
            placeholderTextColor="#888"
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
            placeholderTextColor="#888"
            secureTextEntry
            style={[styles.input, passwordError ? styles.inputError : null]}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (passwordError) setPasswordError("");
            }}
          />

          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.forgot}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgotPassword")}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.loginButton,
              isLoading ? styles.loginButtonDisabled : null,
            ]}
            onPress={handleLogin}
            activeOpacity={0.8}
            disabled={isLoading}
          >
            <Image
              source={require("../../../../assets/images/loginw.png")}
              style={styles.loginImage}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.registerRow}>
            <Text style={styles.registerText}>Don't have an account yet? </Text>

            <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
              <Text style={styles.registerLink}>Register now!</Text>
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
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.socialButton}>
            <Image
              source={require("../../../../assets/images/google.png")}
              style={styles.socialImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}