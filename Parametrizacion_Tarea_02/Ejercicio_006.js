import { StyleSheet, View } from "react-native";
import { Circle } from "./components/Figures";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Circle width={100} height={100} color={"red"} />
        <Circle width={100} height={100} color={"red"} />
        <Circle width={100} height={100} color={"red"} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Circle width={100} height={100} color={"red"} />
        <Circle width={100} height={100} color={"blue"} />
        <Circle width={100} height={100} color={"red"} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Circle width={100} height={100} color={"red"} />
        <Circle width={100} height={100} color={"red"} />
        <Circle width={100} height={100} color={"red"} />
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
