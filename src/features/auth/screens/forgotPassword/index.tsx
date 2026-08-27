import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function ForgotPasswordScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Nút đóng / Back */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            navigation.navigate("Login");
          }
        }}
      >
        <Text style={styles.close}>✕</Text>
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>
        Forgot your{"\n"}password?
      </Text>

      {/* Các lựa chọn gửi mã */}
      <View style={styles.optionContainer}>
        {/* Khung 1: Bấm vào đây để gửi qua Email */}
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("VerifyResetCode", { method: "email" });
          }}
        >
          <Image
            source={require("../../../../assets/images/mail.png")}
            style={styles.icon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.optionSub}>
              The recovery code will be sent to your email.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Khung 2: Bấm vào đây để gửi qua Phone */}
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("VerifyResetCode", { method: "phone" });
          }}
        >
          <Image
            source={require("../../../../assets/images/phone.png")}
            style={styles.icon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.optionSub}>
              Send the recovery code via phone.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}