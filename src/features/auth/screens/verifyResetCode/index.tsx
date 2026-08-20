import { Text, View } from "react-native";

import { Button } from "@/components";
import { StaticScreenProps } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import CloseButton from "../../components/screenDetail/closeButton";
import Title from "../../components/screenDetail/title";

type Props = StaticScreenProps<{
  resetRequestId?: string;
}>;

const VerifyResetCodeScreen = ({ route }: Props) => {
  const navigation = useNavigation();
  const { resetRequestId } = route.params;

  function closeHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.container}>
        <CloseButton onPress={closeHandler} />
        <Title>Enter the OTP code</Title>

        <Button
          onPress={() =>
            navigation.navigate("Auth", {
              screen: "ResetPassword",
              params: { resetToken: "123456" },
            })
          }
          text="Reset"
          
        />
      </SafeAreaView>
    </View>
  );
};

export default VerifyResetCodeScreen;
