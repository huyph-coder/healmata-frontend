import { View, Text } from "react-native";
import styles from "./styles";
import { Children } from "react";

type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Title;
