import React from 'react';
import './HeaderComponent.css';
import Metamask from '../../public/metamask.svg'


const HeaderComponent = () => {
  return (
    <header className="top-0 w-full z-10 flex items-center justify-center mt-6">
      <button className="flex justify-center items-center gap-2 border-gradient p-3 text-xl transition">
        Connect Wallet
        <img src={Metamask} className='w-[3rem]'/>
      </button>
    </header>
  );
};

export default HeaderComponent;
