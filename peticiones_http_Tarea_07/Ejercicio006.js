import { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet, Image } from "react-native";

// Ejercicio 6 - API de GitHub.
// Hacer una petición HTTP y guardar en un array todos los resultados de la búsuqeda David.
// Con text input y button crear un formulario para poder mostrar por pantalla la imagen del avatar, id y
// login del número de posición del array que se introduzca por pantalla.

function Article() {
  const [photo, setPhoto] = useState();
  const [id, setId] = useState();
  const [login, setLogin] = useState();
  const [data, setData] = useState();
  const [position, setPosition] = useState(0);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/search/users?q=David"
      );

      if (response.ok) {
        const res = await response.json();
        setData(res.items);
        console.log(data);
      }

      throw new Error("La petición ha fallado");
    } catch (error) {
      console.log(error);
    }
  };

  const getProfile = () => {
    setPhoto(data[position].avatar_url);
    setLogin(data[position].login);
    setId(data[position].id);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: photo }} />
      <Text>{login}</Text>
      <Text>{id}</Text>
      <Button title="Pulsa!" onPress={getData} />
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta posición"
        onChangeText={(newText) => setPosition(newText)}
        defaultValue={position}
      />
      <Button onPress={getProfile} title="Realizar búsqueda!" />
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
    width: 360,
    height: 360,
  },
});
export default Article;
