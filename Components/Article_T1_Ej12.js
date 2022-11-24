import { StyleSheet, Text, View } from "react-native";

function Article() {
  let content = {
    title: "Este es mi titulo",
    paragraphOne: "parrafo uno",
    paragraphTwo: "parrafo dos",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{content.title}</Text>
      <Text>{content.paragraphOne}</Text>
      <Text>{content.paragraphTwo}</Text>
    </View>
  );
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

export default Article;
