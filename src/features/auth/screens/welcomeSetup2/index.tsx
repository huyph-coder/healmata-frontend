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

  const handleSetUp = () => {
    navigation.navigate("welcomeSetup3"); 
  };

  const handleSkip = () => {
    navigation.navigate("welcomeSetup3"); 
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      
      <ImageBackground
        source={require("../../../../assets/images/s3.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.contentContainer}>
          <View style={styles.indicatorBar} />

          <Text style={styles.mainTitle}>Benefits of HEALMATA</Text>

          <View style={styles.listContainer}>
            <Text style={styles.listItem}>✓ Track daily medication intake</Text>
            <Text style={styles.listItem}>✓ Receive timely reminders</Text>
            <Text style={styles.listItem}>
              ✓ Know if your loved ones have taken their medication
            </Text>
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.8}
            onPress={handleSetUp}
          >
            <Image
              source={require("../../../../assets/images/setup.png")}
              style={styles.buttonImage}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.skipButton}
            activeOpacity={0.7}
            onPress={handleSkip}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}