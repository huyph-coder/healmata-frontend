import React, { useEffect } from "react";
import {
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { useAuthStore } from "../../../app/stores/authStore";

export default function SplashScreen() {
  const navigation = useNavigation<any>();
  const { authState, checkSession } = useAuthStore();

  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    if (authState === "UNKNOWN" || authState === "CHECKING_SESSION") {
      return;
    }

    const timer = setTimeout(() => {
      if (authState === "AUTHENTICATED") {
        navigation.replace("MainTabs"); 
      } else if (
        authState === "UNAUTHENTICATED" ||
        authState === "SESSION_EXPIRED"
      ) {
        navigation.replace("welcomeSetup"); 
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [authState, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image
          source={require("../../../../assets/images/image1.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <ActivityIndicator
        size="large"
        color="#B7E59B"
        style={styles.loading}
      />
    </View>
  );
}