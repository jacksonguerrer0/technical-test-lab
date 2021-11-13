import { Button } from '@mui/material'
import React, { useContext } from 'react'
import styled from 'styled-components'
import TableData from '../components/TableData'
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import {firebase} from  '../firebase_config/firebase_config'
import UserContext from '../context/userContext';
import ModalAdd from '../components/ModalAdd';
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
const Home = () => {
  const { person } = useContext(UserContext)
  const [openAdd, setOpenAdd] = React.useState(false)

  const handleAdd = () => {
    setOpenAdd(true)
  }
  const handleLogout = () => {
    firebase.auth().signOut()
  }
  return (
    <HomeContainer>
      <div><LogoutIcon onClick={handleLogout} /></div>
      <aside>
        <h2>Bienvenid@! {person.name}</h2>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
           Agregar
        </Button>
      </aside>
      <TableData />
      <ModalAdd openAdd={openAdd} setOpenAdd={setOpenAdd} />
    </HomeContainer>
  )
}

export default Home
