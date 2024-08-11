import { FontAwesome5 } from "@expo/vector-icons"
import Home from "../Screens/Home/Home"
import UserProfile from "../Screens/Profile/UserProfile"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { appColor, ScreenName } from "../components/Constant"
import Recipes from "../Screens/Recipes/Recipes"
import FavoriteRecipes from "../Screens/FavouritRecipes"

const Tab = createBottomTabNavigator()

export default function StackTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        tabBarActiveTintColor: `${appColor.SECONDARY}`,
        tabBarInactiveTintColor: `${appColor.WHITE}`,
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
      {tabScreens.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={() => ({
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name={item.icon} size={24} color={color} />
              ),
            })}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const tabScreens = [
  {
    icon: "home",
    name: ScreenName.HOME,
    component: Home,
  },
  {
    icon: "clipboard-list",
    name: ScreenName.RECIPES,
    component: Recipes,
  },
  {
    icon: "angellist",
    name: ScreenName.FAVORITE_RECIPES,
    component: FavoriteRecipes,
  },
  {
    icon: "user-circle",
    name: ScreenName.PROFILE,
    component: UserProfile,
  },
]
