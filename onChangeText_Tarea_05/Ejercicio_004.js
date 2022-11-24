import { StyleSheet, View, Button, Text, Image, TextInput } from "react-native";
import { Square, Rectangle, Triangle, Circle, QuarterCircle } from "./Figures";
import { useState } from "react";

function Article() {
  const [text, setText] = useState("");
  const [dni, setDni] = useState();
  // Validar un DNI

  function handleOnPress() {
    let id = text.toString();
    id = id.split("");
    if (text === "") {
      alert("No has introducido nada");
      setDni("");
    } else if (text.length != 9) {
      alert("Introduce un DNI correcto");
      setDni("");
    } else if (!isNaN(parseInt(id[id.length - 1]))) {
      alert("Tiene que acabar en letra");
      setDni("");
    } else if (isNaN(text.substring(0, 8))) {
      alert("Introduce un DNI correcto");
      setDni("");
    } else {
      if (dni === "") {
        setDni("DNI correcto: " + text);
      }
    }
    setText("");
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Validador DNI</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta tu texto..."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{dni}</Text>
      <Button title="Pulsa..." onPress={handleOnPress} />
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "underline",
    marginBottom: 50,
  },
  image: {
    marginBottom: 20,
    width: 100,
    height: 100,
  },
});

export default Article;
