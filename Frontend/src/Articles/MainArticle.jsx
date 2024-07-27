import React from 'react';
import Layout from '../Layouts/Layout';
import { Heart, Wallet   } from 'lucide-react';

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
  return (
    <Layout>
      <div className="mt-[8rem] flex flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Total Received</h1>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-xl font-semibold mt-4">
            <h1>$123,456.78</h1>
          </div>
        </div>

        <div className="flex justify-center w-full gap-[6rem] mt-10">
          {/* Left Table */}
          <div className="w-[40rem]">
            <h2 className="text-xl font-semibold mb-4 flex gap-2">Contributors <Heart color='red'/></h2>
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
            <h2 className="text-xl font-semibold mb-4 flex gap-6">Received <Wallet  color='green'/></h2>
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
      </div>
    </Layout>
  );
};

export default MainArticle;
