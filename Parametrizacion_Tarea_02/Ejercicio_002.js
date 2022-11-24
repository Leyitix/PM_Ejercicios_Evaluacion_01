import { StyleSheet, View } from "react-native";

export default function App() {
  function Square() {
    return (
      <View
        size="100"
        mt="-2"
        marginTop={-6}
        width={100}
        height={100}
        backgroundColor={"blue"}
      />
    );
  }

  function Rectangle() {
    return (
      <View
        size="100"
        mt="-2"
        marginTop={-6}
        width={200}
        height={200}
        backgroundColor={"red"}
      />
    );
  }

  function Triangle() {
    return (
      <View
        size="100"
        mt="-2"
        marginTop={-6}
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
    );
  }

  function Circle() {
    return (
      <View
        size="100"
        mt="-2"
        marginTop={-6}
        width={100}
        height={100}
        borderRadius={100 / 2}
        backgroundColor={"red"}
      />
    );
  }

  function QuarterCircle() {
    return (
      <View
        size="100"
        mt="-2"
        marginTop={-6}
        width={100}
        height={100}
        borderTopLeftRadius={150}
        borderTopRightRadius={0}
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
        backgroundColor={"blue"}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Square />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Rectangle />
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
