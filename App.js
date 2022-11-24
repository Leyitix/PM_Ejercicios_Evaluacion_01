import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Article from "./Components/Article";

export default function App() {
  return <Article />;
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "green",
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
