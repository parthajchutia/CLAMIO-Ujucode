import React from "react";
import Navbar from "./Navbar"; 
import Sidebar from "./Sidebar"; 
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Analytic from "./icons/Analytical chart.png"; 

function Homepage() {
  return (
    <div className="h-full">
      <Navbar />

      <div className="flex relative h-screen ">
        <Sidebar className="sticky top-0 left-0 h-full" />
        <main className="flex-grow overflow-y-scroll px-4 py-8 md:px-8 ml-8 mt-5">
          <div className="absolute top-12 pl-10 w-50 left-72 font-bold text-4xl">
            It's time to create something
          </div>

          <div className="flexbox bg-yellow-300 text-white w-3/4 h-72 absolute top-32 left-80 ">
            <div className="absolute bg-yellow-300 w-full h-full shadow-lg flex flex-col justify-center top-20 items-center">
              <Link to="/product" className="bg-stone-500 text-black p-3">
                <FaPlus className="text-xl size-20" />
              </Link>

              <Link
                to="/product"
                className="bg-white text-black px-20 py-4 absolute bottom-0 left-1/2 mb-6 transform -translate-x-1/2"
              >
                Create your product
              </Link>
              <div>
              <div className="grid  absolute top-80 left-0">
                <div className="font-bold text-black text-4xl ">Analytics</div>
                <img src={Analytic} alt="analytic" className="pt-6 pl-30" />
                
              </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Homepage;
