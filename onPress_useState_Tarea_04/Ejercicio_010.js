import { Square, Rectangle } from "./components/Figures";
import { StyleSheet, View, Button, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [squares, setSquares] = useState([]);
  const [number, setNumber] = useState(0);
  const myArray = [1];

  function handleOnPress() {
    if (number === 0) {
      setNumber(1);
      setSquares(
        myArray.map((index) => (
          <Square
            key={index.toString()}
            width={150}
            height={150}
            backgroundColor={"red"}
          />
        ))
      );
    } else {
      setSquares([]);
      setNumber(0);
    }
    return squares;
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
