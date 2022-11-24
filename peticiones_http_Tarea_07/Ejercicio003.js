import { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet, Image } from "react-native";

//Ejercicio 3 - API de GitHub.
// Hacer una petición HTTP y sacar por consola la primera posición del array con los resultados de la búsqueda Java.
// Bajar PostMan para entenderlo mejor.
function Article() {
  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/search/users?q=Java"
      );

      if (response.ok) {
        const res = await response.json();
        console.log(res.items[0]);
        return res;
      }

      throw new Error("La petición ha fallado");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
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
