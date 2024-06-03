import React from "react";
import { Link } from "react-router-dom";
import Rewardsimg from "../homepage/icons/Rewards.png";
import Signup from "../homepage/icons/Signin.png";
import Earn from "../homepage/icons/Earn.png";
import View from "../homepage/icons/View rewards (2).png";
import Announce from "../homepage/icons/Announce.png";
import Bestreward from "../homepage/icons/Bestrewards (2).png";

function Rewards() {
  return (
    <div className="flex-col">
      <div className="relative bg-black pt-6 bg-opacity-100 h-screen overflow-y-scroll">
        <nav className="bg-black shadow-lg flex justify-between px-6 py-4 relative">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="relative left-16 text-xl font-bold text-slate-300"
            >
              Create and Sell
            </Link>
          </div>
          <div className="flex items-center space-x-20 ml-auto font-bold">
            <Link to="#" className=" text-slate-300 hover:text-gray-900">
              COMMUNITY
            </Link>
            <Link to="#" className=" text-slate-300 hover:text-gray-900">
              EXPLORE
            </Link>
            <Link to="#" className=" text-slate-300 hover:text-gray-900">
              CREATORS
            </Link>
            <Link to="#" className=" text-slate-300 hover:text-gray-900">
              JOIN
            </Link>
          </div>
        </nav>
        <div className="felx absolute  left-20 top-40 bg-black">
          <span className="text-5xl tracking-wider text-yellow-300">
            CLAMIO{" "}
          </span>
          <span className="text-5xl tracking-widest text-white ">
            Rewards Program
          </span>
          <div className="relative top-6">
            <p className="text-white pt-14">
              Refer CLAMIO to fellow creators or sell 100 Digital Products
              through CLAMIO,
            </p>
            <p className="text-white">&</p>
            <p className="text-3xl text-yellow-300">earn Rs. 50000*</p>

            <Link
              to="/"
              className="absolute top-48 pl-32 pr-32 font-semibold left-0 bg-white text-black px-16 py-3 "
            >
              View Dashboard
            </Link>
          </div>
        </div>
        <div className="absolute top-48 right-8 flex  ">
          <img src={Rewardsimg} alt="Rewardimg" className="w-auto" />
        </div>
        <div className="text-white absolute bottom-0 left-0 ml-20 mb-20">
          Terms and conditions apply
        </div>
      </div>

      <div>
        <div>
          <div className="relative bg-white-300 left-80 items-center  font-bold pl-60 pt-6  ">
            <p className="absolute text-3xl "> Getting Started is Easy</p>
          </div>

          <div className="container mx-auto flexbox mt-14 ml-26 flex">
            <div className="grid grid-cols-1 top-40 flex-grow overflow-y-auto px-10 py-10 md:px-8 sm:grid-cols-2 md:grid-cols-3 gap-20">
              <div
                className="bg-white rounded-lg overflow-hidden h-full md:h-auto"
                style={{ width: "300px", height: "300px" }}
              >
                <img
                  src={Signup}
                  alt="Signup"
                  style={{ width: "100%", height: "92%" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 top-40 flex-grow overflow-y-auto px-2 py-8 md:px-8 sm:grid-cols-2 md:grid-cols-3 gap-20">
              <div
                className="bg-white rounded-lg overflow-hidden h-full md:h-auto"
                style={{ width: "300px", height: "300px" }}
              >
                <img
                  src={View}
                  alt="View"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 top-40 flex-grow overflow-y-auto px-2 py-8 md:px-8 sm:grid-cols-2 md:grid-cols-3 gap-20">
              <div
                className="bg-white rounded-lg overflow-hidden h-full md:h-auto"
                style={{ width: "300px", height: "300px" }}
              >
                <img
                  src={Earn}
                  alt="Earn"
                  style={{ width: "100%", height: "92%" }}
                />
              </div>
            </div>
          </div>

          <div className="relative flex flex-row gap-40 left-50">
            <div className="relative left-20 right-96 flex-col ">
              <p className="relative left-44 text-2xl font-bold">Sign In</p>
              <p className="relative top-8 right-18 text-pretty text-center">
                Get Registered with CLAMIO with Zero Registration Charge
              </p>
            </div>

            <div className="flex-col">
              <p className="relative left-20 font-bold">View Rewards</p>
              <p className="relative top-8 right-10 text-pretty text-center">
                Get access to your personalised rewards dashboard
              </p>
              <Link
                to="/"
                className="relative left-12 justify-center items-center top-28  font-semibold  bg-yellow-300 text-black px-16 py-3 "
              >
                Start Selling
              </Link>
            </div>

            <div className="flex-col">
              <p className="relative left-4 text-2xl font-bold">Earn Points</p>
              <p className="relative  top-8  text-center right-32 text-pretty">
                Earn CLAMIO rewards point on every referal and product sell
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white-300 items-center top-60 font-bold pl-40 pt-6 ">
      <div>
          <p className="relative left-80 pl-40 top-0">Getting Reward Is Easy</p>
          </div>
        <div className="relative ">
          
        
          <p className="relative top-46 pt-60">Refer to Creators</p>
          <span>
            On every successful referral you will earn 500 CLAMIO Rewards Coins{" "}
          </span>
          <span>Every 100 coin = Rs.1</span>
        </div>

        <div className="relative top-80">
          <img src={Bestreward} alt="Bestrewards"></img>
        </div>
        <div className="absolute top-48 right-20 flex ">
          <img src={Announce} alt="Announce"></img>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
