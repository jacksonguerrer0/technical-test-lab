import { TextField, Button } from '@mui/material'
import React, {   useState } from 'react'
import imgGoogle from '../assets/google.png'
import styled from 'styled-components'
import { loginEmailAndPassword, loginGoogle, registerEmailAndPassword } from '../helpers/functions'

const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  > div{
    width: clamp(300px, 90vw, 400px);
  display: flex;
  flex-flow: column wrap;
  background-color: var(--Bg-light);
  border-radius: 1rem;
  border:  1px solid var(--color-secondary);
  margin: 10vh auto;
  form {
  width: inherit;
  display: inherit; 
  flex-flow:inherit;
  padding: 1rem;
  > div{
    margin: 0.5rem 0;
  }
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
    margin: 0 auto 1rem auto;
    color: var(--color-secondary);
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
    :hover{
      color: var(--Bg-color);
    }
  }
  }
`
// Falta la validacion de formularios :)

const Login = () => {
  const [login, setLogin] = useState(true)
  const [form, setForm] = useState({
  })
  const [error, setError] = useState({
    login: '',
    register: ''
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
  const handleLoginEmailPassword = async  (e) => {
    e.preventDefault()
    const res = await loginEmailAndPassword(emailLogin, passwordLogin) 
    if(res){
      setError({...error, login: res})
    }
  }
  const handleRegisterEmailPassword = async (e) => {
    e.preventDefault()
    const res = await registerEmailAndPassword(name, emailRegister, passwordRegister)
    if(res){
      setError({...error, register: res})
    }
  }
  return (
    <ContainerLogin>
      <div>
      {
        login ?
          <form onSubmit={handleLoginEmailPassword}>
            <TextField label="Correo"
              type="email"
              name='emailLogin'
              onChange={handleFormChange}
              required
            />
            <TextField
              label="Contrse??a"
              type="password"
              name='passwordLogin'
              onChange={handleFormChange}
              required
            />
            <Button variant="contained" type='submit'>Iniciar</Button>
            <p style={{color: 'red', textAlign: 'center'}}>{error.login}</p>
          </form>
          :
          <form onSubmit={handleRegisterEmailPassword}>
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
              label="Contrse??a"
              type="password"
              name='passwordRegister'
              onChange={handleFormChange}
              required
            />
            <TextField
              label="Repite la Contrase??a"
              type="password"
              name='passwordRegisterRepeat'
              onChange={handleFormChange}
              required
            />
            <Button variant="contained" type='submit'>Registrar</Button>
            <p style={{color: 'red', textAlign: 'center'}}>{error.register}</p>
          </form>
      }
      <hr />
      <img src={imgGoogle} alt="google" onClick={handleLoginGoogle} />
      {
        login ? <small onClick={handleLogin}><i>Crear Cuenta</i></small>
          : <small onClick={handleLogin}><i>Iniciar Sesion</i></small>
      }
      </div>
    </ContainerLogin>
  )
}

export default Login
