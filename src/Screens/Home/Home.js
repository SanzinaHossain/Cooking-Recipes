import { useEffect, useState } from "react"
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { appColor } from "../../components/Constant"

export default function Home() {
  const [foodRecipes, setFoodRecipes] = useState()

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setFoodRecipes(data?.recipes))
  }, [])

  return (
    <ScrollView style={styles.container}>
      {foodRecipes?.map((rap, index) => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.recipesContainer}
          key={index}
        >
          <Image source={{ uri: rap.image }} style={styles.imageStyle} />
          <View style={{ padding: 10 }}>
            <Text>{rap.name}</Text>
            <Text>{rap.mealType}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    fontSize: 10,
    padding: 20,
    paddingBottom: 30,
  },
  recipesContainer: {
    borderColor: appColor.SECONDARY,
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    display: "flex",
    flexDirection: "row",
  },
  imageStyle: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
})
