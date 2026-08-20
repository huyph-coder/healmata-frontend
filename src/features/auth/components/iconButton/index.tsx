import { Pressable, View, Text } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

type IconButtonProps = {
  text: string;
  imageName: string;
  onPress?: () => void;
};

const IconButton = (props: IconButtonProps) => {
  return (
    <Pressable onPress={props?.onPress} style={({pressed}) => [styles.container, pressed && styles.pressed]}>
      <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Ionicons name={props.imageName as any} size={17} color="white" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default IconButton;
