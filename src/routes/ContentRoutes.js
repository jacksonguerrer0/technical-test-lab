import React, { useContext, useEffect } from 'react'
import {  BrowserRouter, Routes, Navigate,  Route } from 'react-router-dom'
import { firebase} from '../firebase_config/firebase_config'
import Home from '../container/Home'
import Login from '../container/Login'
import '../style/globalStyle.css'
import UserContext from '../context/userContext.js'



const ContentRoutes = () => {
  const {person, setPerson} = useContext(UserContext)
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if(user?.uid){
        setPerson({
          id: user?.uid, 
          name: user?.displayName, 
          email: user?.email
        })
      }else{
       setPerson({})
      }
    })
  }, [setPerson])
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/login' element={<Login  />} />
        <Route path='/' 
        element={
          <PrivateAuth redirectTo="/login" id={person.id} >
            <Home  />
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
