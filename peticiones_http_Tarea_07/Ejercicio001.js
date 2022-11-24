import { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet, Image } from "react-native";

// Ejercicio 1. Guardar la imagen que devuelve en un componente Img.
function Article() {
  const [image, setImage] = useState();
  const getData = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse.sprites.front_shiny);
        setImage(jsonResponse.sprites.front_shiny);
        return jsonResponse;
      }
      throw new Error("La petición ha fallado");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnPress = () => {
    getData();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={{ fontSize: 30 }}></Text>
      <Button title="Pulsa!" onPress={handleOnPress} />
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
