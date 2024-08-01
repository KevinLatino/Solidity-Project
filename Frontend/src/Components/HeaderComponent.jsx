import React, { useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';
import './HeaderComponent.css';
import Metamask from '../../public/metamask.svg'

import { TotalReceivedContext, OwnerContext } from '../context/Context'

const HeaderComponent = () => {
  const { totalReceived, setTotalReceived } = useContext(TotalReceivedContext);
  const { isOwner, setIsOwner } = useContext(OwnerContext);
  const [ isWalletConnected, setIsWalletConnected ] = useState(false);
  const [ currentConnectedAccount, setCurrentConnectedAccount ] = useState('');

  let OWNER_ACCOUNT = process.env.OWNER_ACCOUNT
  let signer = null;
  let provider;

  useEffect(() => {
    if (window.ethereum == null) {
      // If MetaMask is not installed, we use the default provider, which is backed by a variety of third-party services (such as INFURA).
      // They do not have private keys installed, so they only have read-only access
      alert("MetaMask not installed; using read-only defaults")
      provider = ethers.getDefaultProvider()
    }

    window.ethereum.on('accountsChanged', handleAccountChanged)

    //const onScroll = (event) => console.info("scrolling", event);
    //window.addEventListener('scroll', onScroll);
    //return () => {
    //  window.removeEventListener('scroll', onScroll);
    //}
  }, [])

  const handleAccountChanged = (accounts) => {
    setCurrentConnectedAccount(accounts[0])
    disconnectWallet()
  }
  
  const connectWallet = async () => {
    if (isWalletConnected) {
      disconnectWallet()
      return;
    }
    // Connect to the MetaMask EIP-1193 object. This is a standard protocol that allows Ethers access to make all read-only requests through MetaMask.
    provider = new ethers.BrowserProvider(window.ethereum)

    setIsWalletConnected(true)
    
    // It also provides an opportunity to request access to write operations, which will be performed by the private key that MetaMask manages for the user.
    signer = await provider.getSigner();
    console.log(signer.address);

    setCurrentConnectedAccount(signer.address )
    currentConnectedAccount == OWNER_ACCOUNT ? setIsOwner(true) : setIsOwner(false)

    getBalance(signer)
  }

  const disconnectWallet = async () => {
    provider = null
    signer = null
    setIsOwner(false)
    setIsWalletConnected(false)
    setCurrentConnectedAccount('')
    
    getBalance(signer)
  }

  const getBalance = async (signer) => {
    if (!signer) {
      setTotalReceived(0)
      return;
    }

    let provider = signer.provider

    // Get the current balance of an account (by address or ENS name)
    let balanceWei = await provider.getBalance(signer.address)

    // Since the balance is in wei, you may wish to display it in ether instead.
    setTotalReceived(ethers.formatEther(balanceWei))
  }

  return (
    <header className="top-0 w-full z-10 flex items-center justify-center mt-6">
      { window.ethereum &&
        <div className='flex flex-col items-center'>
          <button onClick={connectWallet} className={`flex justify-center items-center gap-2 border-gradient p-3 text-xl transition`}>
            {isWalletConnected ? 'Disconnect Wallet' : `Connect Wallet` }
            <img src={Metamask} className='w-[3rem]'/>
          </button>

            <p className='text-gray-400'>Connected Address: {currentConnectedAccount || '-'}</p>
          </div>
      }
    </header>
  );
};

export default HeaderComponent;
