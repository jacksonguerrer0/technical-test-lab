import React from 'react';
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
// import UserContext from '../context/userContext';
// import { db } from '../firebase_config/firebase_config';



const rows = [

];


const TableData = () => {
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
  return (
    <>
    <TableContainer component={Paper} sx={{width: 'calmp(auto, 50vw, 700px)'}}>
      <Table sx={{ minWidth: 650 }} aria-label="Table person">
        <TableHead sx={{backgroundColor: 'var(--Bg-light)'}}>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Edad</TableCell>
            <TableCell align="right">Direccion</TableCell>
            <TableCell align="right">Correo</TableCell>
            <TableCell align='center'>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.streetAdress}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="center">
                  <Button align='center' variant="contained" endIcon={<EditIcon />}>
                  </Button>
                  <Button align='center' variant="contained" color="error" endIcon={<DeleteIcon />}></Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    {
      rows.length === 0 && <h3 style={{margin:'1rem'}}>¿Que quieres agregar?</h3>
    }
    </>
  );
}

export default TableData