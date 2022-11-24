import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
function PantallaModal({ navigation }) {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Pantalla Modal</Text>
      <Button onPress={() => navigation.goBack()} title="Descartar" />
    </View>
  );
}
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
export { PantallaModal };
