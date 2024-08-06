import { Text, View } from "react-native"
import MoleButton from "../../components/Molecules/MoleButton"
import LoginHooks from "../../Hooks/LoginHooks"

export default function Home() {
  const { handleLogout } = LoginHooks()
  return (
    <View>
      <Text>Find User</Text>
      <MoleButton handleClick={handleLogout} title="Logout" />
    </View>
  )
}
