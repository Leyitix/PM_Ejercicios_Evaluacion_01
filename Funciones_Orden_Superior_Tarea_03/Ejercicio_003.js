import Square from "./components/Figures";
import { StyleSheet, View } from "react-native";

export default function App() {
  let content = [
    {
      color: "red",
      width: 100,
      height: 100,
    },
    {
      color: "blue",
      width: 100,
      height: 100,
    },
  ];

  let rectangle_blue = [
    {
      color: "blue",
      width: 200,
      height: 100,
    },
  ];

  let rectangle_red = [
    {
      color: "red",
      width: 200,
      height: 100,
    },
  ];

  const contents = content.map((value, index) => (
    <Square
      key={index}
      color={value.color}
      width={value.width}
      height={value.height}
    ></Square>
  ));

  const contentsRectangleBlue = rectangle_blue.map((value, index) => (
    <Square
      key={index}
      color={value.color}
      width={value.width}
      height={value.height}
    ></Square>
  ));

  const contentsRectangleRed = rectangle_red.map((value, index) => (
    <Square
      key={index}
      color={value.color}
      width={value.width}
      height={value.height}
    ></Square>
  ));

  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: "row" }}>{contentsRectangleBlue}</View>
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>{contents}</View>
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>{contentsRectangleRed}</View>
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
