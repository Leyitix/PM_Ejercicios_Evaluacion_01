import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ejercicio002 from "../peticiones_http_Tarea_07/Ejercicio002";

const Screen2 = () => {
  return (
    <View style={styles.layout}>
      <Ejercicio002 />
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

export { Screen2 };
