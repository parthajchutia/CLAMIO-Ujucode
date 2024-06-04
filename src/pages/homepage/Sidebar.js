import React from 'react';
import { FaHome } from 'react-icons/fa';
import dollar from './icons/dollar.png';
import { BsArchive } from "react-icons/bs";
import reward from './icons/reward.png'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
   <ul className="h-screen-full text-white pt-8 px-4 left-8 relative bottom-0" style={{ borderRight: "1px solid black" }}>

      <li className="mb-4">
        <Link to="/" className="flex items-center font-bold px-10 py-2 hover:bg-gray-800 text-black">
          <FaHome className="w-6 h-6 mr-2" />
          Home
        </Link>
      </li>
      <li className="mb-4">
        <Link to="/product" className="flex items-center font-bold px-10 py-2 hover:bg-gray-800 text-black">
         <BsArchive alt="Products" className="w-6 h-6 mr-2" />
          Products
        </Link>
      </li>
      <li className="mb-4">
        <Link to="/Payout" className="flex items-center font-bold px-10 py-2 hover:bg-gray-800 text-black">
          <img src={dollar} alt="Services" className="w-6 h-6 mr-2" />
           Payouts
        </Link>
      </li>
      <li className="mb-4">
        <Link to="/Rewards" className="flex items-center font-bold px-10 py-2 hover:bg-gray-800 text-black">
          <img src={reward} alt="Contact" className="w-6 h-6 mr-2" />
           Rewards
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
