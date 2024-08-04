import { StyleSheet, Text } from "react-native"

export default function AtomText({ text, customStyle }) {
  return <Text style={[styles.textStyle, customStyle]}>{text}</Text>
}

const styles = StyleSheet.create({
  textStyle: {
    color: "black",
    textAlign: "justify",
  },
})
