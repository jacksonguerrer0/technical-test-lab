import { TextField, Button } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import imgGoogle from '../assets/google.png'
import styled from 'styled-components'
import { loginEmailAndPassword, loginGoogle, registerEmailAndPassword } from '../helpers/functions'
import { useNavigate } from 'react-router-dom'

const ContainerLogin = styled.div`
  width: clamp(300px, 90vw, 400px);
  display: flex; 
  flex-flow: column wrap;
  margin: 10vh auto;
  justify-content: space-evenly;
  background-color: var(--Bg-light);
  border-radius: 1rem;
  border:  1px solid var(--color-secondary);
  padding: 1rem;
  > div{
    margin: 0.5rem 0;
  }
  img{
    width: 30px;
    height: 30px;
    margin: 0.5rem auto;
    cursor: pointer;
  }
  small{
    display: flex;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    color: var(--color-secondary);
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
    :hover{
      color: var(--Bg-color);
    }
}
`
// Falta la validacion de formularios :)

const Login = ({ emailUser }) => {
  const navigate = useNavigate()

  const [login, setLogin] = useState(true)
  const [form, setForm] = useState({
  })
  const {name, emailRegister, passwordRegister, emailLogin, passwordLogin} = form
  const handleLogin = () => {
    setLogin(!login)
  }
  const handleFormChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleLoginGoogle = () => {
    loginGoogle()
  }
  const handleLoginEmailPassword = () => {
    loginEmailAndPassword(emailLogin, passwordLogin) 
  }
  const handleRegisterEmailPassword = () => {
    registerEmailAndPassword(name, emailRegister, passwordRegister)
  }
  useEffect(() => {
    if (emailUser) {
      navigate('/')
    }
  }, [navigate, emailUser])

  return (
    <ContainerLogin>
      {
        login ?
          <>
            <TextField label="Correo"
              type="email"
              name='emailLogin'
              onChange={handleFormChange}
              required
            />
            <TextField
              label="Contrseña"
              type="password"
              name='passwordLogin'
              onChange={handleFormChange}
              required
            />
            <Button variant="contained" onClick={handleLoginEmailPassword}>Iniciar</Button>
          </>
          :
          <>
            <TextField label="Nombre"
              type="string"
              name='name'
              onChange={handleFormChange}
              required
            />
            <TextField label="Correo"
              type="email"
              name='emailRegister'
              onChange={handleFormChange}
              required
            />
            <TextField
              label="Contrseña"
              type="password"
              name='passwordRegister'
              onChange={handleFormChange}
              required
            />
            <TextField
              label="Repite la Contraseña"
              type="password"
              name='passwordRegisterRepeat'
              onChange={handleFormChange}
              required
            />
            <Button variant="contained" onClick={handleRegisterEmailPassword}>Registrar</Button>
          </>
      }
      <hr />
      <img src={imgGoogle} alt="google" onClick={handleLoginGoogle} />
      {
        login ? <small onClick={handleLogin}><i>Crear Cuenta</i></small>
          : <small onClick={handleLogin}><i>Iniciar Sesion</i></small>
      }
    </ContainerLogin>
  )
}

export default Login
