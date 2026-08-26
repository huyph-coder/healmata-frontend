import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StaticScreenProps } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/screenDetail/button";
import styles from "./styles";
import CloseButton from "../../components/screenDetail/closeButton";
import Title from "../../components/screenDetail/title";
import { TextInput } from "react-native-gesture-handler";
import InputField from "../../components/inputField";

type Props = StaticScreenProps<{
  resetToken: string;
}>;

const ResetPasswordScreen = ({ route }: Props) => {
  const navigation = useNavigation();
  const { resetToken } = route.params;

	function closeHandler() {
		navigation.goBack();
	}

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.container}>
        <CloseButton onPress={closeHandler} />
        <Title>Reset password</Title>
        <View style={styles.inputContainer}>
					<InputField textInputConfig={{
						placeholder: 'New password',
						placeholderTextColor: '#475467D6',
					}}/>
					<InputField textInputConfig={{
						placeholder: 'Confirm new password',
					}}/>
				</View>
        <View>
					<Button>Reset password</Button>
				</View>
      </SafeAreaView>
    </View>
  );
};

export default ResetPasswordScreen;
