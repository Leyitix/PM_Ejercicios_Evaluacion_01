import { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet, Image } from "react-native";

// Ejercicio 2. Guardar dos imagenes que devuelve en un componente Img.
// Utilizar dos estados.
function Article() {
  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();
  const getData = async () => {
    try {
      const responseDitto = await fetch(
        "https://pokeapi.co/api/v2/pokemon/ditto"
      );
      const responsePikachu = await fetch(
        "https://pokeapi.co/api/v2/pokemon/pikachu"
      );
      if (responseDitto.ok) {
        const ditto = await responseDitto.json();
        setImageOne(ditto.sprites.front_shiny);
      }
      if (responsePikachu.ok) {
        const pikachu = await responsePikachu.json();
        setImageTwo(pikachu.sprites.front_default);
      }
      throw new Error("La petición ha fallado");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageOne }} />
      <Image style={styles.image} source={{ uri: imageTwo }} />
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
