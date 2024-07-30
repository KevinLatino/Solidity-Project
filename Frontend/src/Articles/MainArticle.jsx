import React, { useState } from 'react';
import Layout from '../Layouts/Layout';
import { Heart, Wallet } from 'lucide-react';

const leftTableData = [
  { walletAddress: '0xABC123...', money: '$1,234.56' },
  { walletAddress: '0xDEF456...', money: '$2,345.67' },
  { walletAddress: '0xGHI789...', money: '$3,456.78' },
  { walletAddress: '0xJKL012...', money: '$4,567.89' },
  { walletAddress: '0xMNO345...', money: '$5,678.90' },
];

const rightTableData = [
  { walletAddress: '0xEFG123...', money: '$11,234.56' },
  { walletAddress: '0xHIJ456...', money: '$12,345.67' },
  { walletAddress: '0xKLM789...', money: '$13,456.78' },
  { walletAddress: '0xNOP012...', money: '$14,567.89' },
  { walletAddress: '0xQRS345...', money: '$15,678.90' },
];

const MainArticle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handlePopUp = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
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
          <div className="p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-xl font-semibold mt-4">
            <h1>$123,456.78</h1>
          </div>
          <button className="flex justify-center items-center gap-2 border-gradient p-3 text-xl transition"
            onClick={handlePopUp}
          >
            Make a donation
          </button>
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
                {leftTableData.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-4 py-2">{item.walletAddress}</td>
                    <td className="border border-gray-400 px-4 py-2">{item.money}</td>
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
                {rightTableData.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-4 py-2">{item.walletAddress}</td>
                    <td className="border border-gray-400 px-4 py-2">{item.money}</td>
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
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Wallet Address</label>
                <input
                  type="text"
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-full bg-gray-700 text-white"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Amount</label>
                <input
                  type="text"
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-full bg-gray-700 text-white"
                />
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
      </div>
    </Layout>
  );
};

export default MainArticle;
