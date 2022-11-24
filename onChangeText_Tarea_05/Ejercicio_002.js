import { StyleSheet, View, Button, Text, Image, TextInput } from "react-native";
import { Square, Rectangle, Triangle, Circle, QuarterCircle } from "./Figures";
import { useState } from "react";

function Article() {
  const [text, setText] = useState("");
  const [miles, setMiles] = useState();
  // Conversor km a millas.

  function handleOnPress() {
    if (isNaN(text)) {
      setMiles("");
      alert("Has introducido texto");
    } else if (text === "") {
      setMiles("");
      alert("No has introducido nada");
    } else if (!isNaN(text)) {
      let result = text * 0.621371;
      setMiles(result);
    }
    setText("");
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Conversor de km a millas</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta tu texto..."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{miles}</Text>
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
