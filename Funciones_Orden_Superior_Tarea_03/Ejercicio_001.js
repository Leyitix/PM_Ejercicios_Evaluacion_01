import Square from "./components/Figures";
import { StyleSheet, View } from "react-native";

export default function App() {
  let content = [
    {
      color: "blue",
      width: 100,
      height: 100,
    },
    {
      color: "red",
      width: 200,
      height: 200,
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

  return <View style={styles.container}>{contents}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
