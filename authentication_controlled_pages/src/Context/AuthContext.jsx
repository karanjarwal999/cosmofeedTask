import React, { createContext, useState } from 'react'

export const loginContext= createContext()
function AuthContext({children}) {
    const [isAuth,setIsAuth]=useState(false)
  return (
    <loginContext.Provider value={{isAuth,setIsAuth}}>
       {children}
    </loginContext.Provider>
  )
}

export default AuthContext
