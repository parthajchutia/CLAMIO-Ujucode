import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component
import Sidebar from "./Sidebar"; // Import your Sidebar component
import { FaPlus } from "react-icons/fa";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Analytic from "./icons/Analytical chart.png"; // Assuming Analytical chart.png is the path to your analytics icon image

function Homepage() {
  return (
    <div className="h-full">
      <Navbar />

      <div className="flex relative h-screen leading-tight ">
        <Sidebar className="sticky top-0 left-0 h-full" />
        <main className="flex-grow overflow-y-scroll px-4 py-8 md:px-8 ml-8 mt-5">
          <div className="absolute top-16 pl-10 w-50 left-72 font-bold text-4xl">
            It's time to create something
          </div>

          <div className="flexbox bg-yellow-300 text-white w-3/4 h-72 absolute top-40 left-80 ">
            <div className="absolute bg-yellow-300 w-full h-full shadow-lg flex flex-col justify-center top-20 items-center">
              <Link to="/product" className="bg-stone-500 text-black p-3">
                <FaPlus className="text-xl size-20" />
              </Link>

              <Link
                to="/product"
                className="bg-white text-black px-12 py-3 absolute bottom-0 left-1/2 mb-6 transform -translate-x-1/2"
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
