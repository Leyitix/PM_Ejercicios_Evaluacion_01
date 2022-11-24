import { Square } from "./components/Figures";
import { StyleSheet, View, Button, Text } from "react-native";
import { useState } from "react";

export default function App() {
  let [width, setWidth] = useState(100);
  let [height, setHeight] = useState(100);
  let [backgroundColor, setBackgroundColor] = useState("blue");

  const square = [
    {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
    },
  ];

  function handleOnPress() {
    backgroundColor == "blue" || backgroundColor == "yellow"
      ? (backgroundColor = "red")
      : (backgroundColor = "yellow");
    setBackgroundColor(backgroundColor);
  }

  const contents_square = square.map((value, index) => (
    <Square
      Key={index}
      width={value.width}
      height={value.height}
      backgroundColor={value.backgroundColor}
    ></Square>
  ));

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10 }}>{contents_square}</View>
      <Button onPress={handleOnPress} title="Pulsame!"></Button>
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
