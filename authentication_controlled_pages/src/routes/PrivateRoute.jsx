import React, { useContext } from 'react'
import { loginContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'

function PrivateRoute({children}) {
    const {isAuth,setIsAuth}= useContext(loginContext)
    
  return isAuth? <Home/> : <Login/>
}

export default PrivateRoute
