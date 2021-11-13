import { TextField, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import imgGoogle from '../assets/google.png'
import styled from 'styled-components'
import { loginEmailAndPassword, loginGoogle, registerEmailAndPassword } from '../helpers/functions'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/userContext'
import ValidationForm from '../helpers/Validations.js'

const ContainerLogin = styled.div`
  width: clamp(300px, 90vw, 400px);
  height: auto;
  display: flex; 
  flex-flow: column wrap;
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


const Login = () => {
  const { person } = useContext(UserContext)
  const { errors, handleValidations } = ValidationForm()
  const navigate = useNavigate()

  const [login, setLogin] = useState(true)
  const [form, setForm] = useState({
  })
  const {name, email, password} = form
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
  const handleBlur = (e) => {
    const target = e.target
    handleValidations(target, form)
  }
  const handleLoginGoogle = () => {
    loginGoogle()
  }
  const handleLoginEmailPassword = () => {
    loginEmailAndPassword(email, password) 
  }
  const handleRegisterEmailPassword = () => {
    registerEmailAndPassword(name, email, password)
  }

  useEffect(() => {
    if (person.id) {
      navigate('/')
    }
  }, [navigate, person.id])

  return (
    <ContainerLogin>
      {
        login ?
          <>
            <TextField label="Correo"
              type="email"
              name='emailLogin'
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={errors.emailLogin ? true : false}
              helperText={errors.emailLogin ? errors.emailLogin : ''}
            />
            <TextField
              label="Contrseña"
              type="password"
              name='passwordLogin'
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={errors.passwordLogin ? true : false}
              helperText={errors.passwordLogin ? errors.passwordLogin : ''}
            />
            <Button variant="contained" onClick={handleLoginEmailPassword}>Iniciar</Button>
          </>
          :
          <>
            <TextField label="Nombre"
              type="string"
              name='name'
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={errors.name ? true : false}
              helperText={errors.name ? errors.name : ''}
            />
            <TextField label="Correo"
              type="email"
              name='emailRegister'
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={errors.emailRegister ? true : false}
              helperText={errors.emailRegister ? errors.emailRegister : ''}
            />
            <TextField
              label="Contrseña"
              type="password"
              name='passwordRegister'
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={errors.passwordRegister ? true : false}
              helperText={errors.passwordRegister ? errors.passwordRegister : ''}
            />
            <TextField
              label="Repite la Contraseña"
              type="password"
              name='passwordRegisterRepeat'
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={errors.passwordRegisterRepeat ? true : false}
              helperText={errors.passwordRegisterRepeat ? errors.passwordRegisterRepeat : ''}
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


// const thereErrors = (errors) => {
//   const arrErrors = Object.values(errors)
//   // let error = false
//   if (arrErrors.legth === 0) {
//     return false
//   }
//   arrErrors.forEach(ele => {
//     if (ele === undefined) {
//       // error = true
//       return false
//     }
//   });
//   // return true
// }