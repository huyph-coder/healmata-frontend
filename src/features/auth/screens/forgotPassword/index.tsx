import { Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "../../components";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  function emailHandler() {
    navigation.navigate("Auth", { screen: "VerifyResetCode", params: {} });
  }

  function phoneHandler() {
    navigation.navigate("Auth", { screen: "VerifyResetCode", params: {} });
  }

  return (
    <ImageBackground
      source={require("@/assets/forgotPasswordBackground.png")}
      style={styles.root}
    >
      <SafeAreaView style={styles.container}>
        <View>
          
        </View>
        <View>
          <Text style={styles.text}>ForgotPassword Screen</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <IconButton
              onPress={emailHandler}
              imageName="mail-outline"
              text="The recovery code will be sent to your email"
            />
          </View>
          <View style={styles.button}>
            <IconButton
              onPress={phoneHandler}
              imageName="phone-portrait-outline"
              text="Send the recovery code via phone."
            />
          </View>
        </View>
        <Button text="Back" onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ForgotPasswordScreen;
