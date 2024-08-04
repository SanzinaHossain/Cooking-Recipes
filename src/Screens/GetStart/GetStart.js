import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import logo from "../../../assets/logo.png"
import { subtitle, title } from "./Data"

export default function GetStart() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <TouchableOpacity activeOpacity={0.9} style={styles.button}>
        <Text style={styles.text}>Get Started</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 15,
    fontStyle: "bold",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "justify",
    marginBottom: 20,
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
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold", // Makes the text bold
  },
})
