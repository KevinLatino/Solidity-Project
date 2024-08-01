import React, { createContext, useState } from 'react'

export const MyContext = createContext()

export const MyProvider = ({ children }) => {
    const [total, setTotal] = useState(0)

  return (
    <MyContext.Provider value={{ total, setTotal }}>
        { children }
    </MyContext.Provider>
  )
}
