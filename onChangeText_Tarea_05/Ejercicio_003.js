import { StyleSheet, View, Button, Text, Image, TextInput } from "react-native";
import { Square, Rectangle, Triangle, Circle, QuarterCircle } from "./Figures";
import { useState } from "react";

function Article() {
  const [text, setText] = useState("");
  const [dollars, setDollars] = useState();
  // Conversor euros a dólares.

  function handleOnPress() {
    if (isNaN(text)) {
      setDollars("");
      alert("Has introducido texto");
    } else if (text === "") {
      setDollars("");
      alert("No has introducido nada");
    } else if (!isNaN(text)) {
      let result = text * 0.98;
      setDollars(result.toFixed(2) + " dólares");
    }
    setText("");
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Conversor euros - dólares</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta tu texto..."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{dollars}</Text>
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
