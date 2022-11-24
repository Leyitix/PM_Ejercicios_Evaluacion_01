import { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet, Image } from "react-native";

// Ejercicio 5 - API de GitHub.
// Hacer una petición HTTP y sacar con un componente Image la imagen del avatar,
// id y login del primer resultado de la búsqueda David.
function Article() {
  const [photo, setPhoto] = useState();
  const [id, setId] = useState();
  const [login, setLogin] = useState();

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/search/users?q=Java"
      );

      if (response.ok) {
        const res = await response.json();
        setPhoto(res.items[0].avatar_url);
        setLogin(res.items[0].login);
        setId(res.items[0].id);
        return res;
      }

      throw new Error("La petición ha fallado");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: photo }} />
      <Text>{login}</Text>
      <Text>{id}</Text>
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
