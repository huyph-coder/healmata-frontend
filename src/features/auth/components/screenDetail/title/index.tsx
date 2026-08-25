import { View, Text } from "react-native";
import styles from "./styles";
import { Children } from "react";

type TitleProps = {
  children: React.ReactNode;
};

const Title = (props: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

export default Title;
