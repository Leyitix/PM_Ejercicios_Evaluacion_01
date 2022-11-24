import { StyleSheet, View } from "react-native";
import { Square, Triangle } from "./components/Figures";

export default function App() {
  return (
    <View style={styles.container}>
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
      <View style={{ flexDirection: "row" }}>
        <View style={{ transform: [{ rotate: "-90deg" }] }}>
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
        <Square width={100} color={"blue"} />
        <View style={{ transform: [{ rotate: "90deg" }] }}>
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
      <View style={{ flexDirection: "row" }}>
        <View style={{ transform: [{ rotate: "-180deg" }] }}>
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
