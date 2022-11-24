import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Screens_Modal/Home";
import { PantallaModal } from "./Screens_Modal/PantallaModal";
const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="home" component={Home} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="PantallaModal" component={PantallaModal} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
