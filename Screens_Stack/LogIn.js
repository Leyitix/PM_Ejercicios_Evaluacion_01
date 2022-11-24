import * as React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { useState } from "react";

const LogIn = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  let contet = {
    image: require("./assets/profilePicture.png"),
  };

  const login = () => {
    let userName = "";
    let pass = "";
    if (userName === user && pass === password) {
      props.navigation.navigate("NavigationTab");
    } else {
      if (userName != user) {
        alert("Nombre de usuario erróneo");
      } else if (pass != password) {
        alert("Contraseña errónea");
      }
    }
  };

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Log In</Text>
      <Image style={styles.image} source={contet.image} />
      <TextInput
        style={{ height: 40 }}
        placeholder="Usuario..."
        onChangeText={(newText) => setUser(newText)}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Contraseña..."
        onChangeText={(newText) => setPassword(newText)}
      />
      <Button title="login" onPress={login} />
    </View>
  );
};
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 65,
  },
});
export { LogIn };
