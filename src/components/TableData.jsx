import React, { useContext, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalEdit from './ModalEdit';
import UserContext from '../context/userContext';
import { deleteRegisterAgenda } from '../helpers/functions';
// import UserContext from '../context/userContext';
// import { db } from '../firebase_config/firebase_config';



const rows = [
  {
    name: 'Jackson',
    streetAdress: 'Cra 11a 5-12',
    age: 18,
    email: 'jacksonguerrerovega2@gmail.com'
  },
  {
    name: 'Jorge',
    streetAdress: 'Cra 11a 5-12',
    age: 20,
    email: 'jorge2@gmail.com'
  }
];


const TableData = ({emailUser}) => {
  const { dataAgendaUser } = useContext(UserContext)
  const [openEdit, setOpenEdit] = useState(false)
  const [dataRow, setDataRow] = useState({})
  const handleEditModal = (row) => {
    setOpenEdit(true)
    setDataRow(row)
  }
  // const [rows, setRows] = useState([])
  // const { person, setPerson } = useContext(UserContext)

  // useEffect(() => {
  //   const getAgenda = async () => {
  //     let docs = []
  //     let res = await db.collection(`agendaUsuarios/${person?.id}`).onSnapshot((querySnapshot) =>{
  //       querySnapshot.forEach((doc) => {
  //         docs.push({...doc.data(), id: doc.id })
  //       })
  //     })
  //     console.log(res)
  //   }
  //   getAgenda()
  // }, [person?.id])
  const handleDelete = (row) => {
    deleteRegisterAgenda(emailUser, row)
  }
  return (
    <>
    <TableContainer component={Paper} sx={{width: "100%",
    overflowX: "auto", maxHeight: '100vh'}}  >
      <Table aria-label=" person" sx={{ minWidth: 650}} >
        <TableHead sx={{backgroundColor: 'var(--Bg-light)'}}>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="left">Edad</TableCell>
            <TableCell align="left">Direccion</TableCell>
            <TableCell align="left">Correo</TableCell>
            <TableCell align='center'>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            dataAgendaUser?.agenda?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.age}</TableCell>
                <TableCell align="left">{row.adress}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="center">
                  <Button align='center' variant="contained" endIcon={<EditIcon />} onClick={() => handleEditModal(row)}>
                  </Button>
                  <Button align='center' variant="contained" color="error" endIcon={<DeleteIcon />} onClick={() => handleDelete(row)}></Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    <ModalEdit openEdit={openEdit} setOpenEdit={setOpenEdit} dataRow={dataRow} emailUser={emailUser}/>
    {
      rows.length === 0 && <h3 style={{margin:'1rem'}}>¿Que quieres agregar?</h3>
    }
    </>
  );
}

export default TableData