import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme'
import { loginBasic } from '@/features/auth/api'

export default function App() {
  loginBasic('user', 'password');
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
