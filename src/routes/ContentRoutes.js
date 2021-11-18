import React, {  useEffect, useState } from 'react'
import {  BrowserRouter, Routes, Navigate,  Route } from 'react-router-dom'
import firebaseApp from '../firebase_config/firebase_config'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import Home from '../container/Home'
import Login from '../container/Login'
import '../style/globalStyle.css'

const auth = getAuth(firebaseApp)


const ContentRoutes = () => {
  const [emailUser, setEmailUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user?.uid){
        setEmailUser(user.email)
      }else{
        setEmailUser(null)
      }
    })
  }, [setEmailUser])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/login' element={<Login  emailUser={emailUser} />}/>
        <Route path='/' 
        element={
          <PrivateAuth redirectTo="/login" id={emailUser} >
            <Home emailUser={emailUser} />
          </PrivateAuth>
        } />

      </Routes>
    </BrowserRouter>
  )
}



export default ContentRoutes

const PrivateAuth = ({ children, redirectTo, id }) => {
  let isAuthenticated = id;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
