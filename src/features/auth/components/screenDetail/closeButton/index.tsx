import { View } from "react-native";
import IconButton from "../../iconButton";
import styles from "./styles";

type CloseButtonProps = {
  onPress?: () => void;
}

const CloseButton = (props: CloseButtonProps) => {
  return (
    <View style={styles.iconButton}>
      <IconButton name="close-outline" size={35} color="#28C5A6" onPress={props.onPress} />
    </View>
  )
}

export default CloseButton;