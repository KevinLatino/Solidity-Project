import React, { useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';
import './HeaderComponent.css';
import Metamask from '../../public/metamask.svg'

import { TotalReceivedContext, OwnerContext } from '../context/Context'

const HeaderComponent = () => {
  const { totalReceived, setTotalReceived } = useContext(TotalReceivedContext);
  const { isOwner, setIsOwner } = useContext(OwnerContext);
  const [ isWalletConnected, setIsWalletConnected ] = useState(false);

  let signer = null;
  let provider;

  useEffect(() => {
    if (window.ethereum == null) {
      // If MetaMask is not installed, we use the default provider, which is backed by a variety of third-party services (such as INFURA).
      // They do not have private keys installed, so they only have read-only access
      alert("MetaMask not installed; using read-only defaults")
      provider = ethers.getDefaultProvider()
    }
  }, [])
  
  const connectWallet = async () => {
    // Connect to the MetaMask EIP-1193 object. This is a standard protocol that allows Ethers access to make all read-only requests through MetaMask.
    provider = new ethers.BrowserProvider(window.ethereum)

    setIsWalletConnected(true)
    
    // It also provides an opportunity to request access to write operations, which will be performed by the private key that MetaMask manages for the user.
    signer = await provider.getSigner();
    console.log(signer.address);

    signer.address == '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'? setIsOwner(true) : setIsOwner(false)

    getBalance(signer)
  }

  const getBalance = async (signer) => {
    let provider = signer.provider

    // Get the current balance of an account (by address or ENS name)
    let balanceWei = await provider.getBalance(signer.address)

    // Since the balance is in wei, you may wish to display it in ether instead.
    setTotalReceived(ethers.formatEther(balanceWei))
    //console.log(balance);
  }

  return (
    <header className="top-0 w-full z-10 flex items-center justify-center mt-6">
      { window.ethereum &&
        <button disabled={isWalletConnected} onClick={connectWallet} className={`flex justify-center items-center gap-2 border-gradient p-3 text-xl transition ${isWalletConnected ? 'opacity-50 cursor-not-allowed' : ''}`}>
          Connect Wallet
          <img src={Metamask} className='w-[3rem]'/>
          </button>
      }
    </header>
  );
};

export default HeaderComponent;
