import { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet } from "react-native";

function Article() {
  const [textDni, setTextDni] = useState();
  const [textName, setTextName] = useState();
  const [dni, setDni] = useState();
  const [name, setName] = useState();
  const [user, setUser] = useState([{ nombre: "Nombre", dni: "Dni" }]);

  const handleOnPress = () => {
    if (validarDni(textDni)) {
      alert("DNI y nombre introducidos correctamente");
      setDni(textDni);
      setName(textName);
      let newArray = [...user];
      newArray.push({ nombre: textName, dni: textDni });
      setUser(newArray);
      setTextName("");
      setTextDni("");
    } else {
      alert("Introduce un DNI correcto");
      setTextDni("");
      setDni("");
      setName("");
      setTextName("");
    }
  };

  const validarDni = (textDni) => {
    let id = textDni.toString();
    id = id.split("");
    if (
      textDni !== "" &&
      textDni.length === 9 &&
      isNaN(parseInt(id[id.length - 1])) &&
      !isNaN(textDni.substring(0, 8))
    ) {
      return true;
    } else {
      return false;
    }
  };

  const users = user.map((value) => (
    <Text>{value.nombre + " / " + value.dni}</Text>
  ));
  return (
    <View style={styles.container}>
      <Text style={{ padding: 10, fontSize: 30 }}>DNI</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta DNI"
        onChangeText={(newText) => setTextDni(newText)}
        defaultValue={textDni}
      />
      <Text style={{ padding: 10, fontSize: 30 }}>Nombre</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta nombre"
        onChangeText={(newText) => setTextName(newText)}
        defaultValue={textName}
      />
      <Button title="Validar" onPress={handleOnPress} />
      {users}
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
