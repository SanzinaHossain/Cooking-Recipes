import { useForm } from "react-hook-form"
import { auth } from "../../firebase.init"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth"
import { Alert } from "react-native"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigation } from "@react-navigation/native"

export default function LoginHooks() {
  const { setUser, user } = useContext(AuthContext)
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // user signup function...........

  const handleRegistration = (data) => {
    const email = data?.email
    const password = data?.password
    const name = data.name
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user
        updateProfile(user, {
          displayName: name,
        })
        Alert.alert("User SignUp Successfully")
        navigation.navigate("login")
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }

  // user login function...........

  const handleSignIn = (data) => {
    const email = data?.email
    const password = data?.password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setUser(user)
        Alert.alert("User Login Successfully")
        {
          user && navigation.navigate("Home")
        }
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
        Alert.alert("SignOut Successfully")
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return {
    handleSubmit,
    control,
    errors,
    handleRegistration,
    handleSignIn,
    handleLogout,
  }
}
