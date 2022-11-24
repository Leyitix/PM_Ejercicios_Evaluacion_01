import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./Screens_Stack/Home";
import { LogIn } from "./Screens_Stack/LogIn";
import { LogUp } from "./Screens_Stack/LogUp";

const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator options="false">
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="LogUp" component={LogUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
