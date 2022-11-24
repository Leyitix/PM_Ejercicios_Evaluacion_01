import { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet } from "react-native";

function Article() {
  const [text, setText] = useState("");
  const [myArray, setMyArray] = useState([]);
  const [pos, setPos] = useState();
  const [show, setShow] = useState();

  const insertElement = () => {
    if (isNaN(text)) {
      setText("");
      alert("Has introducido texto. Introduce un número.");
      setText("");
    } else if (text === "") {
      alert("No has introducido nada.");
    } else if (!isNaN(text)) {
      alert("Tú número se ha guardado.");
      let newArray = [...myArray];
      newArray.push(text);
      setMyArray(newArray);
      setText("");
    }
  };

  const findElement = () => {
    console.log(myArray);
    console.log(pos);
    if (parseInt(pos) > myArray.length - 1 || parseInt(pos) < 0) {
      alert("Introduce un valor válido");
    } else {
      setPos(parseInt(pos));
      setShow(myArray[pos]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta un elemento..."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{text}</Text>
      <Button title="Introducir elemento en el array" onPress={insertElement} />
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta el indice que quieres encontrar..."
        onChangeText={(newText) => setPos(newText)}
      />
      <Button title="Buscar elemento!" onPress={findElement} />
      <Text style={{ padding: 10, fontSize: 42 }}>{show}</Text>
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
});
export default Article;
