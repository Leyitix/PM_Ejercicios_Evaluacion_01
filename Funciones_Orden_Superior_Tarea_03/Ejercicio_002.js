import { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet, Image } from "react-native";
import { Square } from "../Components/Figures";

function Article() {
  let squareContents = [
    {
      widthSquareOne: 150,
      heigthSquareOne: 150,
      colorSquareOne: "blue",
      widthSquareTwo: 150,
      heightSquareTwo: 150,
      colorSquareTwo: "blue",
    },
    {
      widthSquareOne: 150,
      heigthSquareOne: 150,
      colorSquareOne: "red",
      widthSquareTwo: 150,
      heightSquareTwo: 150,
      colorSquareTwo: "blue",
    },
    {
      widthSquareOne: 150,
      heigthSquareOne: 150,
      colorSquareOne: "red",
      widthSquareTwo: 150,
      heightSquareTwo: 150,
      colorSquareTwo: "red",
    },
  ];
  return (
    <View style={styles.container}>
      {squareContents.map((value, index) => (
        <View key={index.toString()} style={{ flexDirection: "row" }}>
          <Square
            width={value.widthSquareOne}
            height={value.heigthSquareOne}
            backgroundColor={value.colorSquareOne}
          />
          <Square
            width={value.widthSquareTwo}
            height={value.heightSquareTwo}
            backgroundColor={value.colorSquareTwo}
          />
        </View>
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
  image: {
    width: 360,
    height: 360,
  },
});
export default Article;
