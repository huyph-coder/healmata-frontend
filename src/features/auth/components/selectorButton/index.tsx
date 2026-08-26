import { Pressable, View, Text } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

type SelectorButtonProps = {
  text: string;
  imageName: string;
  size: number;
  color: string;
  onPress?: () => void;
};

const SelectorButton = (props: SelectorButtonProps) => {
  return (
    <Pressable onPress={props?.onPress} style={({pressed}) => [styles.container, pressed && styles.pressed]}>
      <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Ionicons name={props.imageName as any} size={props.size} color={props.color} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SelectorButton;
