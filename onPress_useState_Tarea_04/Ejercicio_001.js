import Square from "./components/Figures";
import { StyleSheet, View, Button, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("yelow");
  const [number, setNumber] = useState(1);

  function handleOnPress() {
    setNumber(number + 1);
    number % 2 == 0 ? setColor("green") : setColor("blue");
  }

  return (
    <View style={styles.container}>
      <View marginBottom={20}>
        <Text>{number}</Text>
      </View>
      <Square color={color} width={100} height={100} />
      <View marginTop={20}>
        <Button title="Pulsame!" onPress={handleOnPress} />
      </View>
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
