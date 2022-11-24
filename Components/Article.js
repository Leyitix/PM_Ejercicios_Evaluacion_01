import { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet, Image } from "react-native";
import { Square } from "../Components/Figures";

function Article() {
  const [searchTerm, setSearchTerm] = useState("David");
  const [photo, setPhoto] = useState();
  const [id, setId] = useState();
  const [login, setLogin] = useState();
  const [data, setData] = useState();
  const [position, setPosition] = useState(0);

  const getData = async () => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchTerm}`
    );
    try {
      if (response.ok) {
        const res = await response.json();
        setData(res.items);
      }
    } catch (error) {
      console.error(error);
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
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta término de búsqueda"
        onChangeText={(newText) => setSearchTerm(newText)}
        defaultValue={searchTerm}
      />
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
