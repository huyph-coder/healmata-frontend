import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "../../components";
import { useTheme } from "@/hooks";

const ForgotPasswordScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text>ForgotPassword Screen</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <IconButton
            onPress={() => {}}
            imageName="mail-outline"
            text="The recovery code will be sent to your email"
          />
        </View>
        <View style={styles.button}>
          <IconButton
            onPress={() => {}}
            imageName="phone-portrait-outline"
            text="Send the recovery code via phone."
          />
        </View>
      </View>
      <Button onPress={() => navigation.goBack()}>
        goBack
      </Button>
      <Button
        onPress={() =>
          navigation.navigate("Auth", { screen: "VerifyResetCode", params: {} })
        }
      >
        OTPScreen 
      </Button>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
