import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LogIn } from "./LogIn";
import { NavigationTab } from "./NavigationTab";

const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator options="false">
      <Stack.Screen name="Log In" component={LogIn} />
      <Stack.Screen name="NavigationTab" component={NavigationTab} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
