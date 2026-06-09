import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
   const [fontsLoaded] = useFonts({
      Sprintura: require("../assets/font/LTInternet-Regular.ttf"),
    });
  
    if (!fontsLoaded) return null;
  return <Stack screenOptions={{headerShown: false}}/>;
}
