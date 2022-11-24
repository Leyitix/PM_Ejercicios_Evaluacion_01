import { StyleSheet, Text, View, Image } from "react-native";

function Article() {
  let content = {
    title: "Este es mi titulo",
    paragraph: "bla bla bla bla bla bla bla bla bla",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/312px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{content.title}</Text>
      <Image style={styles.image} source={{ uri: content.image }} />
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
