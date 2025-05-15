import { StyleSheet, View } from "react-native";
import { Main } from "./components/Main";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Main></Main>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
