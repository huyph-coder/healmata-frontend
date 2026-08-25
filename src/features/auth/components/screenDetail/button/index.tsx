import { Pressable, View, Text} from 'react-native';
import styles from './styles';

type ButtonProps = {
  children: React.ReactNode;
}

const ButtonOne = (props: ButtonProps) => {
  return(
    <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      <View>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </Pressable>
  )
}

export default ButtonOne;