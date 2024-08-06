import { createContext, useState } from "react"

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({})
  const authInfo = { user, setUser }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}
