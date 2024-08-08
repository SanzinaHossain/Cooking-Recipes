import { View } from "react-native"
import MoleButton from "../../components/Molecules/MoleButton"
import LoginHooks from "../../Hooks/LoginHooks"

export default function UserProfile() {
  const { handleLogout } = LoginHooks()
  return (
    <View>
      <MoleButton handleClick={handleLogout} title="Logout" />
    </View>
  )
}
