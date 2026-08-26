import { Pressable, View, Text } from "react-native";
import styles from "./styles";

type ButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={props?.onPress}
      >
        <Text style={styles.text}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
