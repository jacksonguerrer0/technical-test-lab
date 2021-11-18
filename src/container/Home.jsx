import { Button } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import TableData from '../components/TableData'
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import UserContext from '../context/userContext';
import ModalAdd from '../components/ModalAdd';
import { getAuth, signOut } from '@firebase/auth';
import firebaseApp from '../firebase_config/firebase_config';
import { getDocOrAddDoc } from '../helpers/functions';

const HomeContainer = styled.main`
  width: 100vw;
  max-width: 900px;
  padding: 1rem;
  div{
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    svg{
      cursor: pointer;
    }
  }
  aside{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

  }
  section{
    background-color: var(--Bg-light);
    min-height: 40vh;
  }
`

const auth = getAuth(firebaseApp)

const Home = ({ emailUser }) => {
  const { dataAgendaUser, setDataAgendaUser } = useContext(UserContext)
  const [openAdd, setOpenAdd] = React.useState(false)
  // const [personFirestore, setPersonFirestore] = useState({})
console.log(dataAgendaUser, 'data')

  const handleAdd = () => {
    setOpenAdd(true)
  }
  const handleLogout = async () => {
    await signOut(auth)
    setDataAgendaUser(null)
  }
  useEffect(() => { 
    const getFirestoreAgendaUsuarios = async () => {
      await getDocOrAddDoc(emailUser, setDataAgendaUser)
    }
    getFirestoreAgendaUsuarios()
  }, [emailUser, setDataAgendaUser])
  return (
    <HomeContainer>
      <div><LogoutIcon onClick={handleLogout} /></div>
      <aside>
        <h2>Bienvenid@!</h2>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
           Agregar
        </Button>
      </aside>
      <TableData emailUser={emailUser}/>
      <ModalAdd openAdd={openAdd} setOpenAdd={setOpenAdd} emailUser={emailUser} />
    </HomeContainer>
  )
}

export default Home
