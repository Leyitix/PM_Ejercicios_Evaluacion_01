import { StyleSheet, View, Button, Text, Image, TextInput } from "react-native";
import { Square, Rectangle, Triangle, Circle, QuarterCircle } from "./Figures";
import { useState } from "react";

function Article() {
  const [myArray, setMyArray] = useState([]);
  const [text, setText] = useState("");

  const handleOnPress = () => {
    console.log(text);
    if (isNaN(text)) {
      setText("");
      alert("Has introducido texto. Introduce un número.");
      setText("");
    } else if (text == "") {
      alert("No has introducido nada.");
    } else if (!isNaN(text)) {
      alert("Tú número se ha guardado.");
      let newArray = [...myArray];
      newArray.push(text);
      setMyArray(newArray);
      console.log(myArray);
      let suma = 0;
      let contador = 0;
      newArray.forEach((element) => {
        contador++;
        element = parseInt(element);
        suma += element;
      });
      let media = suma / contador;
      console.log("Suma " + suma);
      console.log("Media " + media);
      setText(media);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>{text}</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Insertar tu texto..."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Button title="Pulsa..." onPress={handleOnPress} />
      {myArray.map((value) => (
        <Text style={{ fontSize: 30 }}>{value}</Text>
      ))}
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
