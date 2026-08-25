import { Text, View, Image, Keyboard } from "react-native";
import { useRef, useState } from "react";

import { Button } from "@/components";
import { StaticScreenProps } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import CloseButton from "../../components/screenDetail/closeButton";
import Title from "../../components/screenDetail/title";
import ButtonOne from "../../components/screenDetail/button";
import { TextInput } from "react-native-gesture-handler";
import OtpCell from "../../components/otpCell";

type Props = StaticScreenProps<{
  resetRequestId?: string;
}>;

const VerifyResetCodeScreen = ({ route }: Props) => {
  const MAXLENGTH = 1;

  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  const inputRef4 = useRef<TextInput>(null);
  const inputRef5 = useRef<TextInput>(null);
  const inputRef6 = useRef<TextInput>(null);

  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" });

  const navigation = useNavigation();
  const { resetRequestId } = route.params;

  function closeHandler() {
    navigation.goBack();
  }

	function submitOtp(){ 
		console.log(otp);
	}

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.container}>
        <CloseButton onPress={closeHandler} />
        <Title>Enter the OTP code</Title>
        <View style={styles.inputContainer}>
          <View>
            <Image style={styles.icon} source={require("@/assets/ClockIcon.png")} />
          </View>
          <View style={styles.otpInput}>
            <OtpCell
              textInputConfig={{
                maxLength: MAXLENGTH,
                onChangeText: (text) => {
                  setOtp({ ...otp, 1: text });
                  if (text.length === MAXLENGTH) {
                    inputRef2.current?.focus();
                  }
                },
              }}
            />
            <OtpCell
              ref={inputRef2}
              textInputConfig={{
                maxLength: MAXLENGTH,
                onChangeText: (text) => {
                  setOtp({ ...otp, 2: text });
                  if (text.length === MAXLENGTH) {
                    inputRef3.current?.focus();
                  }
                },
              }}
            />
            <OtpCell ref={inputRef3}
              textInputConfig={{
                maxLength: MAXLENGTH,
                onChangeText: (text) => {
                  setOtp({ ...otp, 3: text });
                  if (text.length === MAXLENGTH) {
                    inputRef4.current?.focus();
                  }
                },
              }} />
            <OtpCell ref={inputRef4}
              textInputConfig={{
                maxLength: MAXLENGTH,
                onChangeText: (text) => {
                  setOtp({ ...otp, 4: text });
                  if (text.length === MAXLENGTH) {
                    inputRef5.current?.focus();
                  }
                },
              }}/>
            <OtpCell ref={inputRef5}
              textInputConfig={{
                maxLength: MAXLENGTH,
                onChangeText: (text) => {
                  setOtp({ ...otp, 5: text });
                  if (text.length === MAXLENGTH) {
                    inputRef6.current?.focus();
                  }
                },
              }}/>
            <OtpCell ref={inputRef6}
              textInputConfig={{
                maxLength: MAXLENGTH,
                onChangeText: (text) => {
                  setOtp({ ...otp, 6: text });
                  if (text.length === MAXLENGTH) {
										Keyboard.dismiss();
                  }
                },
              }}/>
          </View>
          <Text style={styles.text}>Haven't received the code yet? Resend it.</Text>
        </View>
        <View style={styles.button}>

        <ButtonOne>
          Reset Password
        </ButtonOne>
        </View>
        <Button
          onPress={() =>
            navigation.navigate("Auth", {
              screen: "ResetPassword",
              params: { resetToken: "123456" },
            })
          }
          text="Reset Password"
        />
      </SafeAreaView>
    </View>
  );
};

export default VerifyResetCodeScreen;
