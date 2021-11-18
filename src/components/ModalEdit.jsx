import React, { useState } from 'react'
import { TextField, Button, Modal } from '@mui/material'
import { ContainerModal } from './ModalStyled'
import { editRegisterAgenda } from '../helpers/functions'

const ModalEdit = ({ openEdit, setOpenEdit, dataRow, emailUser }) => {
  const [form, setForm] = useState({})
  const handleClose = () => {
    setOpenEdit(false)
  }
  const handleFormChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleEdit =  async () => {
    await editRegisterAgenda(emailUser, dataRow, form)
    setOpenEdit(false)
    setForm({})
  }
  return (
    <>
      <Modal
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ContainerModal>
          <TextField label="Nombre"
            type="string"
            name='name'
            onChange={handleFormChange}
            defaultValue={dataRow.name}
          />
          <TextField label="Correo"
            type="email"
            name='email'
            onChange={handleFormChange}
            defaultValue={dataRow.email}
          />
          <TextField label="age"
            type="number"
            name='age'
            onChange={handleFormChange}
            defaultValue={dataRow.age}
          />
          <TextField label="adress"
            type="text"
            name='adress'
            onChange={handleFormChange}
            defaultValue={dataRow.adress}
          />
          <Button variant="contained" onClick={handleEdit}>Editar</Button>
        </ContainerModal>
      </Modal>
    </>
  )
}

export default ModalEdit
