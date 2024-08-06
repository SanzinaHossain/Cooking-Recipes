import { createStackNavigator } from "@react-navigation/stack"
import Home from "../Screens/Home/Home"
import UserProfile from "../Screens/Profile/UserProfile"

const Stack = createStackNavigator()

export default function StackRouteNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        // headerShown: false,
        animation: "none",
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="userProfile" component={UserProfile} />
    </Stack.Navigator>
  )
}
