import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export const StackRouters = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="StackLogin"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StackHome"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
