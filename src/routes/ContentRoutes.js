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
  const {authEmail, setAuthEmail} = useContext(AuthContext)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user?.uid){
        setAuthEmail(user.email)
      }else{
        setAuthEmail(null)
      }
      setIsLoaded(true)
    })
  }, [setAuthEmail, authEmail])
  console.log(authEmail, 'Eail content routes')
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
        <Layout />
        </>
      }
      </>
    </BrowserRouter>
  )
}



export default ContentRoutes

