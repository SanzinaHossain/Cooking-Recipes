import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { appColor } from "../Constant"

export default function MoleButton({
  title,
  customStyle,
  titleStyle,
  handleClick,
}) {
  return (
    <TouchableOpacity
      onPress={handleClick}
      activeOpacity={0.9}
      style={[styles.button, customStyle]}
    >
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: appColor.PRIMARY,
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
