import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function MoleButton({ title, customStyle, titleStyle }) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={[styles.button, customStyle]}>
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "seagreen",
    padding: 15,
    width: "80%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
})
