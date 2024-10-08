import { CuteFont_400Regular } from "@expo-google-fonts/cute-font";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import { RuslanDisplay_400Regular } from "@expo-google-fonts/ruslan-display";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    RuslanDisplay_400Regular,
    CuteFont_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="detail" />
    </Stack>
  );
}
