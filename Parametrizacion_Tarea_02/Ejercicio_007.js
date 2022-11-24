import { StyleSheet, View } from "react-native";
import { QuarterCircle } from "./components/Figures";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <QuarterCircle
          width={100}
          height={100}
          borderTopLeftRadius={150}
          borderTopRightRadius={0}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          color={"blue"}
        />
        <QuarterCircle
          width={100}
          height={100}
          borderTopLeftRadius={0}
          borderTopRightRadius={150}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          color={"red"}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <QuarterCircle
          width={100}
          height={100}
          borderTopLeftRadius={0}
          borderTopRightRadius={0}
          borderBottomLeftRadius={150}
          borderBottomRightRadius={0}
          color={"red"}
        />
        <QuarterCircle
          width={100}
          height={100}
          borderTopLeftRadius={0}
          borderTopRightRadius={0}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={150}
          color={"blue"}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <QuarterCircle
          width={75}
          height={75}
          borderTopLeftRadius={150}
          borderTopRightRadius={0}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          color={"blue"}
        />
        <QuarterCircle
          width={75}
          height={75}
          borderTopLeftRadius={0}
          borderTopRightRadius={150}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          color={"red"}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <QuarterCircle
          width={75}
          height={75}
          borderTopLeftRadius={0}
          borderTopRightRadius={0}
          borderBottomLeftRadius={150}
          borderBottomRightRadius={0}
          color={"red"}
        />
        <QuarterCircle
          width={75}
          height={75}
          borderTopLeftRadius={0}
          borderTopRightRadius={0}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={150}
          color={"blue"}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <QuarterCircle
          width={50}
          height={50}
          borderTopLeftRadius={150}
          borderTopRightRadius={0}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          color={"blue"}
        />
        <QuarterCircle
          width={50}
          height={50}
          borderTopLeftRadius={0}
          borderTopRightRadius={150}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          color={"red"}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <QuarterCircle
          width={50}
          height={50}
          borderTopLeftRadius={0}
          borderTopRightRadius={0}
          borderBottomLeftRadius={150}
          borderBottomRightRadius={0}
          color={"red"}
        />
        <QuarterCircle
          width={50}
          height={50}
          borderTopLeftRadius={0}
          borderTopRightRadius={0}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={150}
          color={"blue"}
        />
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
