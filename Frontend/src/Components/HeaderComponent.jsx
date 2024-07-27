import React from 'react';
import './HeaderComponent.css';


const HeaderComponent = () => {
  return (
    <header className="top-0 w-full z-10 flex items-center justify-center mt-6">
      <button className="border-gradient p-3 text-xl transition">
        Connect Wallet
      </button>
    </header>
  );
};

export default HeaderComponent;
