import { Square, Rectangle } from "./components/Figures";
import { StyleSheet, View, Button, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [squareColor, setSquareColor] = useState("green");
  const [rectangleColor, setRectangleColor] = useState("yellow");
  const [number, setNumber] = useState(1);

  function handleOnPress() {
    setNumber(number + 1);
    if (number % 2 == 0) {
      setSquareColor("green");
      setRectangleColor("yellow");
    } else {
      setSquareColor("yellow");
      setRectangleColor("green");
    }
  }

  return (
    <View style={styles.container}>
      <Square width={150} height={150} backgroundColor={squareColor} />
      <Rectangle width={300} height={70} backgroundColor={rectangleColor} />
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
