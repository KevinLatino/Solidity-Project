import React, { createContext, useContext, useState } from 'react'

export const TotalReceivedContext = createContext()
export const OwnerContext = createContext()
export const WalletConnectedContext = createContext()
export const SignerContext = createContext()
export const CurrentConnectedAccountContext = createContext()

export const AppProvider = ({ children }) => {
  const [totalReceived, setTotalReceived] = useState(0)
  const [isOwner, setIsOwner] = useState(false)
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [signer, setSigner] = useState(null)
  const [currentConnectedAccount, setCurrentConnectedAccount] = useState('');

  return (
    <TotalReceivedContext.Provider value={{ totalReceived, setTotalReceived }}>
      <OwnerContext.Provider value={{ isOwner, setIsOwner }}>
        <WalletConnectedContext.Provider value={{ isWalletConnected, setIsWalletConnected }}>
          <SignerContext.Provider value={{ signer, setSigner }}>
            <CurrentConnectedAccountContext.Provider value={{ currentConnectedAccount, setCurrentConnectedAccount }}>
              { children }
            </CurrentConnectedAccountContext.Provider>
          </SignerContext.Provider>
        </WalletConnectedContext.Provider>
      </OwnerContext.Provider>
    </TotalReceivedContext.Provider>
  )
}