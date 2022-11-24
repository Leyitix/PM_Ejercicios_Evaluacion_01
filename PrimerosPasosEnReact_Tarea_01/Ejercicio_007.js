import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  let content = {
    p1: "Párrofo 1",
    p2: "Párrafo 2",
  };

  return (
    <View style={styles.container}>
      <Text>{content.p1}</Text>
      <Text>{content.p2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "red",
  },
});
