import React, { useState, useContext, useEffect } from 'react';
import Layout from '../Layouts/Layout';
import { Heart, Wallet } from 'lucide-react';

import { TotalReceivedContext, OwnerContext, WalletConnectedContext } from '../context/Context';

const leftTableData = [
  { address: '0xABC123...', money: '$1,234.56' },
  { address: '0xDEF456...', money: '$2,345.67' },
  { address: '0xGHI789...', money: '$3,456.78' },
  { address: '0xJKL012...', money: '$4,567.89' },
  { address: '0xMNO345...', money: '$5,678.90' },
];

const rightTableData = [
  { address: '0xEFG123...', money: '$11,234.56' },
  { address: '0xHIJ456...', money: '$12,345.67' },
  { address: '0xKLM789...', money: '$13,456.78' },
  { address: '0xNOP012...', money: '$14,567.89' },
  { address: '0xQRS345...', money: '$15,678.90' },
];

const MainArticle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProjectDetailsModalOpen, setIsProjectModalOpen] = useState(false);
  const [isProjectDonateModalOpen, setIsProjectDonateModalOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [amountForProject, setAmountForProject] = useState(0);
  const [project, setProject] = useState({name: '', wallet: '', money: 0, description: ''});

  const { totalReceived, setTotalReceived } = useContext(TotalReceivedContext);
  const { isOwner, setIsOwner } = useContext(OwnerContext);
  const { isWalletConnected, setIsWalletConnected } = useContext(WalletConnectedContext);

  useEffect(() => {
    console.log(isOwner);
  }, [isOwner])

  const handlePopUp = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleProjectDonatePopUp = () => {
    setIsProjectDonateModalOpen(true);
  };

  const closeProjectDonatePopUp = () => {
    setIsProjectDonateModalOpen(false);
  };

  const handleProjectDonate = () => {
    // AQUI SE DONA A UN PROYECTO
  }

  const setProjectDetailsPopUp = (walletAddress) => {
    // Buscar el ID
    console.log(walletAddress);
    const projectById = {name: 'abc', wallet: walletAddress, money: 0, description: 'abc123'}

    const name = projectById.name
    const wallet = projectById.wallet
    const money = projectById.money
    const description = projectById.description
    
    setProject({name, wallet, money, description})

    setIsProjectModalOpen(true);
  };

  const handleProjectDetailsClose = () => {
    setIsProjectModalOpen(false);
  };

  const handleAmountForProject = (amount) => {
    setAmountForProject(amount)
  };

  const handleDonate = () => {
    console.log(`Donating ${amount} to ${walletAddress}`);
    // Aquí puedes agregar la lógica para manejar la donación
    handleClose();
  };

  return (
    <Layout>
      <div className="mt-[3rem] flex flex-col items-center gap-6">
        <div className="flex text-center flex-col gap-6">
          <h1 className="text-4xl font-bold">Total Received</h1>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-xl font-semibold mt-1">
            <h1>{totalReceived} ETH</h1>
          </div>

          {/*<section className='flex flex-row'>*/}
            <button disabled={!isWalletConnected} className={`flex justify-center items-center gap-2 border-gradient p-3 text-xl transition ${!isWalletConnected ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handlePopUp}
            >
              Make a donation
            </button>

            { /*isOwner &&
              <button className="flex justify-center items-center gap-2 border-gradient p-3 text-xl transition"
                onClick={handleProjectDonatePopUp} >
                Donate to project
              </button>*/
            }
          {/*</section>*/}
        </div>

        <div className="flex justify-center w-full gap-[6rem] mt-10">
          {/* Left Table */}
          <div className="w-[40rem]">
            <h2 className="text-xl font-semibold mb-4 flex gap-2">Contributors <Heart color='#f05b5b' /></h2>
            <table className="border-collapse border border-gray-300 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">Wallet Address</th>
                  <th className="border border-gray-400 px-4 py-2">Money</th>
                </tr>
              </thead>
              <tbody>
                {leftTableData.map((wallet) => (
                  <tr key={wallet.address}>
                    <td className="border border-gray-400 px-4 py-2">{wallet.address}</td>
                    <td className="border border-gray-400 px-4 py-2">{wallet.money}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Table */}
          <div className="w-[40rem]">
            <h2 className="text-xl font-semibold mb-4 flex gap-6">Receivers <Wallet color='#11f093' /></h2>
            <table className="border-collapse border border-gray-300 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">Wallet Address</th>
                  <th className="border border-gray-400 px-4 py-2">Money</th>
                </tr>
              </thead>
              <tbody>
                {rightTableData.map((wallet) => (
                  <tr key={wallet.address}>
                    <td className="border border-gray-400 px-4 py-2">
                      <a href="#" onClick={() => setProjectDetailsPopUp(wallet.address)} className="font-medium underline">{wallet.address}</a>
                    </td>
                    <td className="border border-gray-400 px-4 py-2">{wallet.money}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-[30rem]">
              <h2 className="text-2xl font-semibold mb-6">Make a Donation</h2>
              {/*<div className="mb-4">
                <label className="block text-sm font-medium mb-1">Wallet Address</label>
                <input
                  type="text"
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-full bg-gray-700 text-white"
                />
              </div>*/}
              <div className="mb-6 flex justify-evenly items-center gap-5">
                <label className="block text-sm font-medium mb-1">Amount</label>
                <input
                  type="text"
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-[50%] p-2 border border-gray-300 rounded-full bg-gray-700 text-white"
                />
                <p className='font-bold'>ETH</p>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-600 rounded-full hover:bg-gray-700"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                  onClick={handleDonate}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        )}

        {isProjectDetailsModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-[30rem]">
              <h2 className="text-2xl font-semibold mb-6">Project: {project.name || 'Project Name'}</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Wallet Address</label>
                <input
                  type="text"
                  disabled
                  value={project.wallet || 'Project Wallet'}
                  className="w-full p-2 border border-gray-300 rounded-full bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Total Received</label>
                <input
                  type="text"
                  disabled
                  value={`${project.money || 0} ETH`}
                  className="w-full p-2 border border-gray-300 rounded-full bg-gray-700 text-white"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={project.description || 'Project Description'}
                  type="text"
                  disabled
                  className="w-full p-2 border border-gray-300 rounded-xl bg-gray-700 text-white"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-600 rounded-full hover:bg-gray-700"
                  onClick={handleProjectDetailsClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {isProjectDonateModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-[30rem]">
              <h2 className="text-2xl font-semibold mb-6">Donate to project</h2>
              <div className="mb-4">
              
                            
                <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Search by Wallet or Name <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg></button>


                <div id="dropdownSearch" className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                    <div className="p-3">
                      <label htmlFor="input-group-search" className="sr-only">Search</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                        </div>
                        <input type="text" id="input-group-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user" />
                      </div>
                    </div>
                    <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                      <li>
                        <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label htmlFor="checkbox-item-11" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Bonnie Green</label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input id="checkbox-item-13" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label htmlFor="checkbox-item-13" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Michael Gough</label>
                        </div>
                      </li>
                    </ul>
                </div>

              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={project.description || 'Project Description'}
                  type="text"
                  disabled
                  className="w-full p-2 border border-gray-300 rounded-xl bg-gray-700 text-white"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Amount</label>
                  <section className='flex flex-row justify-center items-center gap-2'>
                    <input
                      type="text"
                      onChange={(e) => setAmountForProject(e.target.value)}
                      value={amountForProject}
                      className="w-[50%] p-2 border border-gray-300 rounded-full bg-gray-700 text-white"
                    /> ETH
                  </section>
                </div>

              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                  onClick={handleProjectDonate}
                >
                  Donate
                </button>
                
                <button
                  className="px-4 py-2 bg-gray-600 rounded-full hover:bg-gray-700"
                  onClick={closeProjectDonatePopUp}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <small><a href="https://www.flaticon.com/free-icon/box_3349507?term=donate&page=1&position=16&origin=tag&related_id=3349507" title="donation icon" target='_blank'>Favicon by DinosoftLabs - Flaticon</a></small>
      </div>
    </Layout>
  );
};

export default MainArticle;
