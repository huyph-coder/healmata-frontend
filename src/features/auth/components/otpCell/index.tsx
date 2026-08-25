import { View, TextInput, TextInputProps } from "react-native";
import styles from "./styles";
import { forwardRef } from "react";

type OtpCellProps = {
  textInputConfig?: TextInputProps;
};

const OtpCell = forwardRef<TextInput, OtpCellProps>((props, ref) => {
  return (
    <View style={styles.otpCell}>
      <TextInput
        ref={ref}
        style={styles.rowInput}
        textAlign="center"
        keyboardType="number-pad"
        {...props.textInputConfig}
      />
    </View>
  );
});

export default OtpCell;
