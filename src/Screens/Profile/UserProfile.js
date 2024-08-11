import { StyleSheet, Text, View } from "react-native"
import MoleButton from "../../components/Molecules/MoleButton"
import LoginHooks from "../../Hooks/LoginHooks"
import { FontAwesome } from "@expo/vector-icons"
import { appColor } from "../../components/Constant"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

export default function UserProfile() {
  const { handleLogout } = LoginHooks()
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle" size={100} color={appColor.PRIMARY} />
      <Text style={styles.textStyle}>{user?.displayName}</Text>
      <Text style={styles.textStyle}>{user?.email}</Text>
      <View></View>
      <MoleButton handleClick={handleLogout} title="Logout" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  textStyle: {
    color: appColor.BLACK,
    fontSize: 18,
    paddingVertical: 2,
    fontWeight: "bold",
  },
})
