import GetStart from "./src/Screens/GetStart/GetStart"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/Screens/Login/Login"
import { NavigationContainer } from "@react-navigation/native"
import StackNavigation from "./src/Navigation/StackNavigation"
const Stack = createStackNavigator()

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName=""
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="getStart" component={GetStart} />
    //     <Stack.Screen name="login" component={Login} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <StackNavigation />
  )
}
