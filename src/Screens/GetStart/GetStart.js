import { Image, StyleSheet, View } from "react-native"
import logo from "../../../assets/logo.png"
import { subtitle, title } from "./Data"
import AtomText from "../../components/Atoms/AtomText"
import MoleButton from "../../components/Molecules/MoleButton"

export default function GetStart() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <AtomText text={title} customStyle={styles.title} />
      <AtomText text={subtitle} customStyle={styles.subtitle} />
      <MoleButton title="Get Started" />
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
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "justify",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
})
