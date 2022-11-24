import { StyleSheet, View, Button, Text, Image, TextInput } from "react-native";
import { Square, Rectangle, Triangle, Circle, QuarterCircle } from "./Figures";
import { useState } from "react";

function Article() {
  let [width, setWidth] = useState(0);
  let [height, setHeigth] = useState(0);
  let [backgroundColor, setBackgroundColor] = useState("blue");
  let [backgroundColor_rect, setBackgroundColor_rect] = useState("blue");
  let [width_rect, setWidth_rect] = useState(200);
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
    if (number == 1) {
      setWidth(100);
      setHeigth(100);
    }
    setNumber(number + 1);
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
      <View style={{ marginBottom: 10, width: 100, heigth: 100 }}>
        {contents_square}
      </View>
      <View style={{ marginBottom: 10 }}>{contents_square}</View>
      <Button onPress={handleOnPress} title="Pulsame!!!"></Button>
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
