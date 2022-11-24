import { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet, Image } from "react-native";

// Ejercicio 4 - API de GitHub.
// Hacer una petición HTTP y sacar con un componente Image la
// imagen del avatar del primer resultado de la búsqueda Java.
function Article() {
  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/search/users?q=Java"
      );

      if (response.ok) {
        const res = await response.json();
        setImageOne(res.items[0].avatar_url);

        return res;
      }

      throw new Error("La petición ha fallado");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageOne }} />
      <Text style={{ fontSize: 30 }}></Text>
      <Button title="Pulsa!" onPress={getData} />
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
  image: {
    width: 200,
    height: 200,
  },
});
export default Article;
