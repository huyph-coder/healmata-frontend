import { View, TextInput, TextInputProps } from "react-native";

import styles from "./styles";

type InputFieldProps = {
  textInputConfig?: TextInputProps;
};

const InputField = (props: InputFieldProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#475467D6"
        secureTextEntry={true}
        {...props.textInputConfig}
      />
    </View>
  );
};

export default InputField;
