import React from "react";
import { IoEllipse } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg flex justify-between items-center px-6 py-4 relative">
      <div className="flex items-center space-x-2">
        <IoEllipse className="text-yellow-300 h-14 w-14" />
        <label>
          <select
            name="User name"
            className="border-none outline-none font-bold"
          >
            <option value="apple">User Name</option>
            <option value="banana">User Id</option>
            <option value="orange">User Name</option>
          </select>
        </label>
        <div className="absolute top-0 left-[234px] bottom-0 w-px bg-gray-300 border border-gray-300"></div>
      </div>
      <div className="flex items-center space-x-5 ml-auto font-bold">
        <Link to="/" className="text-gray-700 hover:text-gray-900">
          Go to Explore
        </Link>
        <Link to="/Rewards" className="text-gray-700 hover:text-gray-900">
          Refer and Earn
        </Link>
        <IoIosNotifications className="size-8" />
      </div>
    </nav>
  );
};

export default Navbar;
