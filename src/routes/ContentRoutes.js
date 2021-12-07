import React, {  useContext, useEffect, useState } from 'react'
import {  BrowserRouter, Routes,   Route } from 'react-router-dom'
import firebaseApp from '../firebase_config/firebase_config'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import Login from '../container/Login'
import '../style/globalStyle.css'
import AuthContext from '../context/authContext'
import PublicRoute from './PublicRoute'
import Layout from '../layout/Layout'

const auth = getAuth(firebaseApp)


const ContentRoutes = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [name, setName] = useState('')
  const {authEmail, setAuthEmail} = useContext(AuthContext)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user?.uid){
        setAuthEmail(user.email)  
        setName(user.displayName)
        // console.log(user.email, user.displayName)
      }else{
        setAuthEmail(null)
      }
      setIsLoaded(true)
    })
  }, [setAuthEmail, authEmail])
  return (
    <BrowserRouter>
      <>
      { isLoaded &&
        <>
        <Routes>
        <Route  path='/login' element={
          <PublicRoute  redirectTo="/" id={authEmail} >
            <Login  emailUser={authEmail} />
        </PublicRoute>
        }/>
        </Routes>
        <Layout name={name}/>
        </>
      }
      </>
    </BrowserRouter>
  )
}



export default ContentRoutes

