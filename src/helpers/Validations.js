import { useState } from "react";


const ValidationForm = (initialState={}) => {

  const [errors, setErrors] = useState(initialState)
  const handleValidations = (target,form) => {
    const name = target.name;
    const type = target.type
    console.log(target.value, form[name])
    console.log(name, type)
    if(type === 'text'){
      return setErrors({
        ...errors,
        [name]: validationName(target.value),
      })
    }
    if(type === 'email'){
      return setErrors({
        ...errors,
        [name]:validateEmail(target.value)
      })
    }
    if(type === 'password'){
      if(name === 'passwordRegisterRepeat'){
        return setErrors({
          ...errors,
          [name]: validateRepeatPassword(form.passwordRegister, target.value)
        })
      }
      return setErrors({
        ...errors,
        [name]:
      validatePassword(target.value)
      })
    }
  }

  return { errors, handleValidations }
}
export default ValidationForm
const validationName = (name = '') => {
  if(name === ''){
      return 'Ingresa un nombre'
  }
  if(name.length >= 20){
      return `Nombre demasiado largo`
  }
}

const validateEmail = (email = '') => {
  if(email === ''){
      return 'Completa la información'
  }
  if(!(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(email))){
      return `Email invalido`
  }
}

const validatePassword = (password) => {
  if(password === ''){
    return 'Completa la información'
  }
  if(password.length < 8){
    return 'Contraseña  corta'
  }
}
const validateRepeatPassword = (password, newPassword) => {
  if(newPassword === ''){
    return 'Completa la información'
  }
  console.log(password, newPassword)
  if(newPassword !== password){
    return 'La contraseña no coincide'
  }
}