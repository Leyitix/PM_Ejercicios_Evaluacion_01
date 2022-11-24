import { Square, Rectangle } from "./components/Figures";
import { StyleSheet, View, Button, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [squareColor, setSquareColor] = useState("green");
  const [squareWidth, setSquareWidth] = useState(150);
  const [squareHeight, setSquareHeight] = useState(150);
  const [number, setNumber] = useState(1);

  function handleOnPress() {
    setNumber(number + 1);
    if (number % 2 === 0) {
      setSquareColor("green");
      if (squareHeight <= 390) {
        setSquareWidth(squareWidth + 10);
        setSquareHeight(squareHeight + 10);
      } else {
        setSquareWidth(150);
        setSquareHeight(150);
      }
    } else {
      setSquareColor("yellow");
      if (squareHeight <= 390) {
        setSquareWidth(squareWidth + 20);
        setSquareHeight(squareHeight + 20);
      } else {
        setSquareWidth(150);
        setSquareHeight(150);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Square
        width={squareWidth}
        height={squareHeight}
        backgroundColor={squareColor}
      />
      <Button onPress={handleOnPress} title="Pulsame!" />
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
