import { useContext } from "react"
import StackAuthNavigation from "./StackAuthNavigation"
import { AuthContext } from "../Context/AuthContext"
import { NavigationContainer } from "@react-navigation/native"
import StackTabNavigation from "./StackTabNavigation"

export default function NavApp() {
  const { user } = useContext(AuthContext)

  return (
    <NavigationContainer>
      {user ? <StackTabNavigation /> : <StackAuthNavigation />}
    </NavigationContainer>
  )
}
