import { createStackNavigator } from "@react-navigation/stack"
import GetStart from "../Screens/GetStart/GetStart"
import Login from "../Screens/Login/Login"
import Registration from "../Screens/Registration/Registration"

const Stack = createStackNavigator()

export default function StackAuthNavigation() {
  return (
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
    </Stack.Navigator>
  )
}
