import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth, initializeAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC6ByLRCMnNPPetKm_ndakYAqoDMUqpx7c",
  authDomain: "cooking-recipes-81f7c.firebaseapp.com",
  projectId: "cooking-recipes-81f7c",
  storageBucket: "cooking-recipes-81f7c.appspot.com",
  messagingSenderId: "342507692855",
  appId: "1:342507692855:web:fb4cfdd4f09b76f03570b2",
  measurementId: "G-8C7PL3VH5M",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
// const analytics = getAnalytics(app)
