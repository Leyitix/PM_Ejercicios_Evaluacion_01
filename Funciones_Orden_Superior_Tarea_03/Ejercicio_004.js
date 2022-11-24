import { Square, Triangle } from "./components/Figures";
import { StyleSheet, View } from "react-native";

export default function App() {
  let content = [
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

  let triangle = [{}];

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

  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Triangle
            width={0}
            height={0}
            backgroundColor={"transparent"}
            borderStyle={"solid"}
            borderLeftWidth={50}
            borderRightWidth={50}
            borderBottomWidth={100}
            borderLeftColor="transparent"
            borderRightColor="transparent"
            borderBottomColor="blue"
          />
        </View>
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>{contents}</View>
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>{contentsRectangleBlue}</View>
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
