import Circle from "./components/Figures";
import { StyleSheet, View } from "react-native";

export default function App() {
  let filas = [0, 1, 2];
  let contents = [
    ["red", "blue", "green"],
    ["blue", "green", "red"],
    ["green", "red", "blue"],
  ];

  return (
    <View style={styles.container}>
      {filas.map((value, index) => (
        <View style={{ flexDirection: "row" }}>
          {contents[value].map((value, index) => (
            <Circle width={100} height={100} color={value} />
          ))}
        </View>
      ))}
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
