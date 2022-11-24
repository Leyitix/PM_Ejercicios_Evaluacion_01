import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Home = (props) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Ir a logup!"
        onPress={() => props.navigation.navigate("LogUp")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
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
