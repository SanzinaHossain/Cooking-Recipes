import { StyleSheet, View } from "react-native"
import GetStart from "./src/Screens/GetStart/GetStart"

export default function App() {
  return (
    <View style={styles.container}>
      <GetStart />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
