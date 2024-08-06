import { LogBox } from "react-native"
import AuthProvider from "./src/Context/AuthContext"
import NavApp from "./src/Navigation/NavApp"

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <AuthProvider>
      <NavApp />
    </AuthProvider>
  )
}
