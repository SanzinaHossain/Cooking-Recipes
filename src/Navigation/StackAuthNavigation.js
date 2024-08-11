import { createStackNavigator } from "@react-navigation/stack"
import GetStart from "../Screens/GetStart/GetStart"
import Login from "../Screens/Login/Login"
import Registration from "../Screens/Registration/Registration"
import { ScreenName } from "../components/Constant"

const Stack = createStackNavigator()

export default function StackAuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      {AuthScreens.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        )
      })}
    </Stack.Navigator>
  )
}

const AuthScreens = [
  {
    name: ScreenName.GET_START,
    component: GetStart,
  },
  {
    name: ScreenName.LOGIN,
    component: Login,
  },
  {
    name: ScreenName.REGISTRATION,
    component: Registration,
  },
]
