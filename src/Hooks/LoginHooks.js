import { useForm } from "react-hook-form"
import { auth } from "../../firebase.init"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { useNavigation } from "@react-navigation/native"

export default function LoginHooks() {
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

  const handleRegistration = (data) => {
    const email = data?.email
    const password = data?.password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user
        console.log("user:", user)
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }

  const handleSignIn = (data) => {
    const email = data?.email
    const password = data?.password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log("Login User:", user)
        navigation.navigate("home")
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }
  return { handleSubmit, control, errors, handleRegistration, handleSignIn }
}
