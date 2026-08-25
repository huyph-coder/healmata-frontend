import { radius, spacing } from "@/theme";
import { useTheme } from "@react-navigation/native";
import {
  ActivityIndicator,
  Pressable,
  Text,
  ViewStyle,
  View,
} from "react-native";

type ButtonProps = {
  text: React.ReactNode;
  isLoading?: boolean;
  onPress?: () => void;
};
const Button = (
  props: ButtonProps & { style?: ViewStyle; textStyle?: ViewStyle },
) => {
  const theme = useTheme();
  return (
    <Pressable
      onPress={props?.onPress}
      style={{
        backgroundColor: theme.colors.primary,
        padding: spacing.medium,
        borderRadius: radius.medium,
        minWidth: 120,
        flexDirection: "row",
        justifyContent: "center",
        ...props.style,
      }}
    >
        {props.isLoading ? (
          <ActivityIndicator />
        ) : (
            <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Text style={{ color: theme.colors.text, ...props.textStyle }}>
            {props.text}
          </Text>
      </View>
        )}
    </Pressable>
  );
};

export default Button;
