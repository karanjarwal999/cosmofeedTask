import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PrivateRoute/>}/>
        <Route path='/login' element={<PrivateRoute/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes