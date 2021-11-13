
// Creacion de contexto

import { createContext, useState } from "react";

const UserContext = createContext();

// Proveedor

const UserProvider = ({children}) => {
  const [person, setPerson] = useState({})

  const data = {person, setPerson}

  return(
    <UserContext.Provider value={data}>{children}</UserContext.Provider>
  )
}
export { UserProvider }
export default UserContext