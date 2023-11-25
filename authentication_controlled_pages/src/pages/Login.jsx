import { Input } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { loginContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
    const {isAuth,setIsAuth}= useContext(loginContext)
    const navigaet = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        setIsAuth(true)
        navigaet('/')
    }

  return (
    <div>
       <form onSubmit={handleSubmit} style={{padding:'10px', border:"1px solid black",width:'600px',margin:'auto', textAlign:'start'}}>
            <label htmlFor="email">Email:</label>
            <Input type="email" name="" id="email" />
            <label htmlFor="email">Password:</label>
            <Input type="password" name="" id="password" />
            <Input type="submit"bgColor={'blue'} color={'white'} mt={'10px'} value="Login" />
       </form>
    </div>
  )
}

export default Login
