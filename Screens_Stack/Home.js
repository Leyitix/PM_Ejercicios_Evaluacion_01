import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Square } from "./components/Figures";

const Home = (props) => {
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
      backgroundColor={value.color}
      width={value.width}
      height={value.height}
    ></Square>
  ));

  return (
    <View style={styles.layout}>
      <View style={styles.container}>{contents}</View>
      <Button
        title="Ir a logup!"
        onPress={() => props.navigation.navigate("LogUp")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export { Home };
