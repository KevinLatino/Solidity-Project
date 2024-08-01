import React, { createContext, useContext, useState } from 'react'

export const TotalReceivedContext = createContext()
export const OwnerContext = createContext()

export const AppProvider = ({ children }) => {
    const [totalReceived, setTotalReceived] = useState(0)
    const [isOwner, setIsOwner] = useState(false)

  return (
    <TotalReceivedContext.Provider value={{ totalReceived, setTotalReceived }}>
      <OwnerContext.Provider value={{ isOwner, setIsOwner }}>
        { children }
        </OwnerContext.Provider>
    </TotalReceivedContext.Provider>
  )
}