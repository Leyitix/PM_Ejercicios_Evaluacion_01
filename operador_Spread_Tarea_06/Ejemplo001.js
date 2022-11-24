import { StyleSheet, View, Button, Text, Image, TextInput } from "react-native";
import { Square, Rectangle, Triangle, Circle, QuarterCircle } from "./Figures";
import { useState } from "react";

function Article() {
  function maximo(...args) {
    console.log(args);
    let maxValue = undefined;
    for (let value of args) {
      if (!maxValue || value > maxValue) {
        maxValue = value;
      }
    }
    return maxValue;
  }
  console.log(maximo(5, 1, 89));
  console.log(maximo(44, -23, 43423, 0));

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}></Text>
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
