import { StyleSheet, View, Button, Text } from "react-native";
import { Square, Rectangle } from "./components/Figures";
import { useState } from "react";

export default function App() {
  let [width, setWidth] = useState(100);
  let [height, setHeigth] = useState(100);
  let [backgroundColor, setBackgroundColor] = useState("yellow");
  let [number, setNumber] = useState(0);
  let [number2, setNumber2] = useState(0);

  const square = [
    {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
    },
  ];

  function handleOnPress() {
    if (number <= 10) {
      setHeigth(height + 10);
      setWidth(width + 10);
      setNumber(number + 1);
    } else if (number2 <= 10) {
      setHeigth(height - 10);
      setWidth(width - 10);
      setNumber(number + 1);
      setNumber2(number2 + 1);
    }

    if (number2 == 10) {
      setNumber(0);
      setNumber2(0);
    }

    if (number % 2 == 0) {
      setBackgroundColor("yellow");
    } else {
      setBackgroundColor("blue");
    }
  }

  const contents_square = square.map((value, index) => (
    <Square
      key={index}
      width={value.width}
      height={value.height}
      backgroundColor={value.backgroundColor}
    ></Square>
  ));

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10 }}>{contents_square}</View>
      <Button onPress={handleOnPress} title="Pulsame!!!"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
