import { StyleSheet, Text, View, Image } from "react-native";

function Article() {
  let content = {
    title: "Este es mi titulo",
    paragraph: "bla bla bla bla bla bla bla bla bla",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{content.title}</Text>
      <Image style={styles.image} source={require("./assets/favicon.png")} />
      <Text>{content.paragraph}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  image: {
    width: 200,
    height: 200,
  },
});

export default Article;
