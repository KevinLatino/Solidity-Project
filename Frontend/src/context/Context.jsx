import React, { createContext, useContext, useState } from 'react'

export const TotalReceivedContext = createContext()
export const OwnerContext = createContext()
export const WalletConnectedContext = createContext()

export const AppProvider = ({ children }) => {
  const [totalReceived, setTotalReceived] = useState(0)
  const [isOwner, setIsOwner] = useState(false)
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  return (
    <TotalReceivedContext.Provider value={{ totalReceived, setTotalReceived }}>
      <OwnerContext.Provider value={{ isOwner, setIsOwner }}>
        <WalletConnectedContext.Provider value={{ isWalletConnected, setIsWalletConnected }}>
          { children }
        </WalletConnectedContext.Provider>
        </OwnerContext.Provider>
    </TotalReceivedContext.Provider>
  )
}