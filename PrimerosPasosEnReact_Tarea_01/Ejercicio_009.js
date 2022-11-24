import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  let content = {
    title: "App React Native",
    p1: "Párrofo 1",
    p2: "Párrafo 2",
  };

  function Article() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{content.title}</Text>
        <Text>{content.p1}</Text>
        <Text>{content.p2}</Text>
      </View>
    );
  }

  return <Article></Article>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
});
