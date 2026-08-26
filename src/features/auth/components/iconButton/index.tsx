
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IconButtonProps = {
  name: string;
  size: number;
  color: string;
  onPress?: () => void;
}

const IconButton = (props: IconButtonProps) => {
  return (
    <Pressable onPress={props?.onPress}>
      <Ionicons name={props.name as any} size={props.size} color={props.color}/>
    </Pressable>
  )
}

export default IconButton;
