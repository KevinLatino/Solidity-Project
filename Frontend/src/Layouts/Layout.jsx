import React, { useState } from 'react';
import HeaderComponent from '../Components/HeaderComponent';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen overflow-hidden text-white">
            <div className="absolute inset-0 z-[-1] bg-gray-950
                bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
            >
            </div>
                <div className="relative flex flex-col min-h-screen">
                    <HeaderComponent/>
                    <main className="flex-1">{children}</main>
                </div>
        </div>
    );
};

export default Layout;
