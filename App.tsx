import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Day from "./components/Day";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Day></Day>
    </View>
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
