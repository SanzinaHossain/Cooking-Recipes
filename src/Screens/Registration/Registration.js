import { Image, StyleSheet, View } from "react-native"
import logo from "../../../assets/logo.png"
import RegistrationForm from "./RegistrationForm"

export default function Registration() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <RegistrationForm />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
})
