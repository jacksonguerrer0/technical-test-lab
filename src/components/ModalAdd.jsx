import React, {  useState } from 'react'
import { TextField, Button, Modal } from '@mui/material'
import { ContainerModal } from './ModalStyled'
import { addRegisterAgenda } from '../helpers/functions'


const ModalAdd = ({ emailUser, openAdd, setOpenAdd }) => {
  const [form, setForm] = useState({})

  const handleClose = () => {
    setOpenAdd(false)
  }
  const handleFormChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleAdd = async (e) => {
    e.preventDefault()
    console.log('onSubmit')
    await addRegisterAgenda(emailUser, form)
    setOpenAdd(false)
    setForm({})
  }
  return (
    <>
      <Modal
        open={openAdd}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ContainerModal onSubmit={handleAdd}>
          <TextField label="Nombre"
            type="string"
            name='name'
            onChange={handleFormChange}
          />
          <TextField label="Correo"
            type="email"
            name='email'
            onChange={handleFormChange}
          />
          <TextField label="age"
            type="number"
            name='age'
            onChange={handleFormChange}
          />
          <TextField label="adress"
            type="text"
            name='adress'
            onChange={handleFormChange}
          />
          <Button variant="contained" type='submit'>Agregar</Button>
        </ContainerModal>
      </Modal>
    </>
  )
}

export default ModalAdd
