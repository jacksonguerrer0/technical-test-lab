
// Creacion de contexto

import { createContext, useState } from "react";

const AuthContext = createContext();

// Proveedor

const AuthProvider = ({children}) => {
  const [authEmail, setAuthEmail] = useState(null)
  const data = {authEmail, setAuthEmail}

  return(
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  )
}
export { AuthProvider }
export default AuthContext