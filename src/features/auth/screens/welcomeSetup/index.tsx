import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function WelcomeSetupScreen() {
  const navigation = useNavigation<any>();

  const handleNextStep = () => {
    navigation.navigate("welcomeSetup1"); 
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      
      <ImageBackground
        source={require("../../../../assets/images/s1.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.contentContainer}>
          <View style={styles.indicatorBar} />

          <Text style={styles.title}>
            Start caring for your {"\n"}
            loved ones with {"\n"}
            <Text style={styles.brandName}>HealMata</Text>
          </Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.8}
            onPress={handleNextStep}
          >
            <Image
              source={require("../../../../assets/images/conti.png")}
              style={styles.buttonImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}