import { StyleSheet, View, Button, Text, Image, TextInput } from "react-native";
import { Square, Rectangle, Triangle, Circle, QuarterCircle } from "./Figures";
import { useState } from "react";

function Article() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState();
  // Validar un email.

  function handleOnPress() {
    let split = text.split("");
    let arrobas = split.filter((x) => x == "@");
    let primerArroba = arrobas.indexOf("@");
    let emailDos = text.substring(primerArroba + 1, text.length);
    emailDos = emailDos.split("");
    let puntos = emailDos.filter((x) => x == ".");

    if (text === "") {
      alert("Por favor, introduce tú email.");
      setText("");
    } else if (arrobas.length === 0) {
      alert("Por favor, introduce un email con una arroba.");
      setText("");
    } else if (arrobas.length > 1) {
      alert("Por favor, introduce un email con una sóla arroba.");
      setText("");
    } else if (puntos.length > 1) {
      alert("Por favor, introduce un email con un solo punto tras la arroba.");
      setText("");
    } else if (text[text.length - 1] === ".") {
      alert("Por favor, introduce un email que no acabe en punto.");
      setText("");
    } else if (puntos.length === 0) {
      alert("Por favor, introduce un email con un punto tras la arroba.");
      setText("");
    } else if (text[0] === "@") {
      alert("Por favor, introduce un email que no empiece por arroba.");
      setText("");
    } else {
      setEmail("Email correcto: " + text);
      setText("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Validador e-mail</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta e-mail"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{email}</Text>
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
