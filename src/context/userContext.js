
// Creacion de contexto

import { createContext, useState } from "react";

const UserContext = createContext();

// Proveedor

const UserProvider = ({children}) => {
  const [dataAgendaUser, setDataAgendaUser] = useState(null)
  const data = {dataAgendaUser, setDataAgendaUser}

  return(
    <UserContext.Provider value={data}>{children}</UserContext.Provider>
  )
}
export { UserProvider }
export default UserContext