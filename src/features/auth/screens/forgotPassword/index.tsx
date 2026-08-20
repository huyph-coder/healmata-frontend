import { View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SelectorButton } from "../../components";
import Title from "../../components/screenDetail/title";
import CloseButton from "../../components/screenDetail/closeButton";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  function emailHandler() {
    navigation.navigate("Auth", { screen: "VerifyResetCode", params: {} });
  }

  function phoneHandler() {
    navigation.navigate("Auth", { screen: "VerifyResetCode", params: {} });
  }

  function closeHandler() {
    navigation.goBack();
  }

  return (
    <ImageBackground
      source={require("@/assets/forgotPasswordBackground.png")}
      style={styles.root}
    >
      <SafeAreaView style={styles.container}>
        <CloseButton onPress={closeHandler} />
        <Title>
          Forgot your password?
        </Title>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <SelectorButton
              onPress={emailHandler}
              imageName="mail-outline"
              text="The recovery code will be sent to your email"
              size={20}
              color="white"
            />
          </View>
          <View style={styles.button}>
            <SelectorButton
              onPress={phoneHandler}
              imageName="phone-portrait-outline"
              text="Send the recovery code via phone."
              size={20}
              color="white"
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ForgotPasswordScreen;
