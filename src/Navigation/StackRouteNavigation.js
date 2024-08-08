import { FontAwesome5 } from "@expo/vector-icons"
import Home from "../Screens/Home/Home"
import UserProfile from "../Screens/Profile/UserProfile"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { appColor } from "../components/Constant"
import Recipes from "../Screens/Recipes/Recipes"
import FavoriteRecipes from "../Screens/FavouritRecipes"

const Tab = createBottomTabNavigator()

export default function StackRouteNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName

          if (route.name === "Home") {
            iconName = focused ? "home" : "home"
            iconColor = focused ? `${appColor.SECONDARY}` : `${appColor.WHITE}`
          } else if (route.name === "Recipes") {
            iconName = "clipboard-list"
            iconColor = focused ? `${appColor.SECONDARY}` : `${appColor.WHITE}`
          } else if (route.name === "Favorite Recipes") {
            iconName = "angellist"
            iconColor = focused ? `${appColor.SECONDARY}` : `${appColor.WHITE}`
          } else if (route.name === "Profile") {
            iconName = focused ? "user-circle" : "user-circle"
            iconColor = focused ? `${appColor.SECONDARY}` : `${appColor.WHITE}`
          }

          return <FontAwesome5 name={iconName} size={24} color={iconColor} />
        },
        tabBarActiveTintColor: `${appColor.SECONDARY}`,
        tabBarInactiveTintColor: `${appColor.BLACK}`,
        tabBarStyle: {
          width: "100%",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 8,
          paddingBottom: 5,
          backgroundColor: appColor.PRIMARY,
        },
        tabBarLabel: () => null,
        headerStyle: {
          height: 80,
          backgroundColor: appColor.PRIMARY,
        },
        headerTitleStyle: {
          color: appColor.WHITE,
          fontWeight: "bold",
          fontSize: 23,
          textAlign: "center",
        },
        headerTintColor: appColor.WHITE,
        headerTitleAlign: "center",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Recipes" component={Recipes} />
      <Tab.Screen name="Favorite Recipes" component={FavoriteRecipes} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  )
}
