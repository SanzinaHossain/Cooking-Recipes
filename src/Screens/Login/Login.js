import React from "react"
import { Image, View } from "react-native"
import logo from "../../../assets/logo.png"

export default function Login() {
  return (
    <View>
      <Image source={logo} style={styles.logo} />
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
  },

  button: {
    backgroundColor: "seagreen",
    padding: 20,
    width: "80%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
})
