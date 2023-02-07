import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Add from "./screens/Add";
import Auth from "./screens/Auth";
import Prehome from "./screens/Prehome";
import Categories from "./screens/Categories";
import Signup from "./screens/Signup";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Prehome" component={Prehome} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Add"
        component={Add}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
