import React, { useContext } from 'react'
import { loginContext } from '../Context/AuthContext'
import { Button } from '@chakra-ui/react'

function Home() {
    const {isAuth,setIsAuth}= useContext(loginContext)
  return (
    <div>
       <h1>Home page </h1>
       <Button onClick={()=>setIsAuth(false)}>Logout</Button>
    </div>
  )
}

export default Home
