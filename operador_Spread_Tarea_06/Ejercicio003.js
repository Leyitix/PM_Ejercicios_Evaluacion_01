import { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet } from "react-native";

function Article() {
  const [text, setText] = useState("");
  const [myArrayInt, setMyArrayInt] = useState([]);
  const [myArrayStrings, setMyArrayStrings] = useState([]);

  const handleOnPress = () => {
    if (isNaN(text)) {
      setText("");
      alert("Has introducido texto. Introduce un número.");
      setText("");
      let newArray = [...myArrayStrings];
      newArray.push(text);
      setMyArrayStrings(newArray);
    } else if (text === "") {
      alert("No has introducido nada.");
    } else if (!isNaN(text)) {
      alert("Tú número se ha guardado.");
      let newArray = [...myArrayInt];
      newArray.push(text);
      setMyArrayInt(newArray);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta tu texto..."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{text}</Text>
      <Button title="Pulsa..." onPress={handleOnPress} />
      {myArrayInt.map((value) => (
        <Text>{value}</Text>
      ))}
      {myArrayStrings.map((value) => (
        <Text>{value}</Text>
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
});
export default Article;
