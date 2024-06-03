import React from "react";
import Navbar from "./homepage/Navbar";
import { Link } from "react-router-dom";
import Sidebar from "./homepage/Sidebar";
import Analytics from "./homepage/icons/Analytical chart.png";

const Payout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex relative min-h-screen ">
        <Sidebar />
        <div className=" px-28 py-10 md:px-50 ml-8 mt-5">
          <div className="relative flex-col md:flex-row  items-center mb-4">
            <h1 className="font-bold font-serif absolute left-16 text-4xl text-gray-800">
              Payouts
            </h1>

            <Link to= "/" className="absolute top-0 font-semibold right-0 bg-yellow-300 text-black px-16 py-3 ">
              Settings
            </Link>
          </div>
          <div className="container mx-auto flexbox mt-14 ml-8">
            <div className="grid grid-cols-1 top-40 flex-grow overflow-y-auto px-2 py-8 md:px-8 sm:grid-cols-2 md:grid-cols-3  gap-20 ">
              <div
                className="bg-white border border-black rounded-lg shadow-md overflow-hidden h-full md:h-auto"
                style={{ width: "242px", height: "146px" }}
              >
                <div className="flex items-center p-4">
                  <div className="font-sans relative font-semibold text-xl">
                    Last 7 Days
                  </div>
                </div>

                <div className="flex items-center font-bold text-3xl top-20 px-4 py-2">
                  Rs.25
                </div>
              </div>

              <div
                className="bg-white border border-black rounded-lg shadow-md overflow-hidden h-full md:h-auto"
                style={{ width: "242px", height: "146px" }}
              >
                <div className="flex items-center p-4">
                  <div className="relative font-semibold text-xl">
                    Last 30 Days
                  </div>
                </div>
                <div className="flex items-center font-bold text-3xl px-4 py-2">
                  Rs. 700
                </div>
              </div>

              <div
                className="bg-white border border-black rounded-lg shadow-md overflow-hidden h-full md:h-auto"
                style={{ width: "242px", height: "146px" }}
              >
                <div className="flex items-center p-4">
                  <div className="relative text-xl font-semibold">
                    Total Earnings
                  </div>
                </div>

                <div className="flex items-center px-4 py-2 text-3xl font-extrabold">
                  Rs. 5977
                </div>
              </div>
            </div>
            <div className=" absolute px-4 py-2 pt-18 left-96">
            <div className="font-bold text-4xl ">Payouts History:</div>
            <img
              src={Analytics}
              alt="analytic"
              className="pt-4 pl-30 focus:opacity-100 focus:outline-none focus:ring ring-blue-500 ring-opacity-50"
            />
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Payout;
