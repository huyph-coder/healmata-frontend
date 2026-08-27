import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash/index" />
      <Stack.Screen name="welcome/index" />
    </Stack>
  );
}