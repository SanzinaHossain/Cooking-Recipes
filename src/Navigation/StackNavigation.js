import { createStackNavigator } from "@react-navigation/stack"
import GetStart from "../Screens/GetStart/GetStart"
import Login from "../Screens/Login/Login"
import { NavigationContainer } from "@react-navigation/native"
import Registration from "../Screens/Registration/Registration"
import Home from "../Screens/Home/Home"

const Stack = createStackNavigator()

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName=""
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen name="getStart" component={GetStart} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Registration} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
