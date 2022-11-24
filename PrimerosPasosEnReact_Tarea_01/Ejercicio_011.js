import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  let content = {
    title: "Este es mi titulo",
    paragraphOne: "parrafo uno",
    paragraphTwo: "parrafo dos",
  };
  function Article() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{content.title}</Text>
        <Text>{content.paragraphOne}</Text>
        <Text>{content.paragraphTwo}</Text>
      </View>
    );
  }
  function Articles() {
    const articulos = [];
    for (let i = 0; i < 4; i++) {
      articulos.push(<Article key={i.toString()} />);
    }
    return articulos;
  }
  return <Articles />;
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
