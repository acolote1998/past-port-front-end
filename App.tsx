import { View } from "react-native";
import { Main } from "./components/Main";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <View className="bg-lightMainBg flex-1">
          <StatusBar style="auto" />
          <Main></Main>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
