import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Article from "../Components/Article";

const Screen1 = () => {
  return (
    <View style={styles.layout}>
      <Article />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 0,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export { Screen1 };
