import React from "react";
import Navbar from "../homepage/Navbar";
import Sidebar from "../homepage/Sidebar";
import { RiRectangleFill } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom"

function Product() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex relative min-h-screen ">
        <Sidebar />
        <main className="flex-grow overflow-y-auto px-4 py-8 md:px-8 ml-8 mt-5">
          <div className="relative flex flex-col md:flex-row justify-between items-center mb-4">
            <h1 className="font-bold absolute left-30 text-3xl text-gray-800">
              Product Listing:
            </h1>
          </div>
          <div className="container mx-auto flexbox ml-8">
          <div className="grid grid-cols-1 top-40 flex-grow overflow-y-auto px-2 py-8 md:px-8 sm:grid-cols-2 md:grid-cols-3  gap-6 ">
            <div className="bg-white border  border-gray-200 rounded-lg overflow-hidden h-full md:h-auto">
              <div className="flex items-center p-4">
                <div className="relative">
                  <RiRectangleFill className="text-yellow-300 h-20 w-20" />
                  <RiEdit2Line className="absolute top-3 left-72 text-white h-5 w-5 bg-black" />
                </div>
              </div>

              <Link to="/Productselect" className="font-bold text-lg px-4 py-2">Product A</Link>
              <div className="flex items-center px-4 py-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="ml-2">4.7(1k)</p>
              </div>
              <p className="px-4 py-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-full md:h-auto">
              <div className="bg-white border  border-gray-200 rounded-lg overflow-hidden h-full md:h-auto">
                <div className="flex items-center p-4">
                  <div className="relative">
                    <RiRectangleFill className="text-yellow-300 h-20 w-20" />
                    <RiEdit2Line className="absolute top-3 left-72 text-white h-5 w-5 bg-black" />
                  </div>
                </div>

                <p className="font-bold text-lg px-4 py-2">Product B</p>
                <div className="flex items-center px-4 py-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <p className="ml-2">4.7(1k)</p>
                </div>
                <p className="px-4 py-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-full md:h-auto">
              <div className="bg-white border  border-gray-200 rounded overflow-hidden h-full md:h-auto">
                <div className="flex items-center p-4">
                  <div className="relative">
                    <RiRectangleFill className="text-yellow-300 h-20 w-20" />
                    <RiEdit2Line className="absolute top-3 left-72 text-white h-5 w-5 bg-black" />
                  </div>
                </div>

                <p className="font-bold text-lg px-4 py-2">Product C</p>
                <div className="flex items-center px-4 py-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <p className="ml-2">4.7(1k)</p>
                </div>
                <p className="px-4 py-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 flex-grow  px-4 py-8 md:px-8 sm:grid-cols-6 md:grid-cols-3  gap-10">
          <div className="bg-white border  border-gray-200 rounded-lg shadow-2xl overflow-hidden h-full md:h-auto">
              <div className="flex items-center p-4">
                <div className="relative">
                  <RiRectangleFill className="text-yellow-300 h-20 w-20" />
                  <RiEdit2Line className="absolute top-3 left-72 text-white h-5 w-5 bg-black" />
                </div>
              </div>

              <p className="font-bold text-lg px-4 py-2">Product D</p>
              <div className="flex items-center px-4 py-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="ml-2">4.7(1k)</p>
              </div>
              <p className="px-4 py-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="bg-white border  border-gray-200 rounded-lg shadow-2xl overflow-hidden h-full md:h-auto">
              <div className="flex items-center p-4">
                <div className="relative">
                  <RiRectangleFill className="text-yellow-300 h-20 w-20" />
                  <RiEdit2Line className="absolute top-3 left-72 text-white h-5 w-5 bg-black" />
                </div>
              </div>

              <p className="font-bold text-lg px-4 py-2">Product E</p>
              <div className="flex items-center px-4 py-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="ml-2">4.7(1k)</p>
              </div>
              <p className="px-4 py-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="bg-white border  border-gray-200 rounded-lg shadow-2xl overflow-hidden h-full md:h-auto">
              <div className="flex items-center p-4">
                <div className="relative">
                  <RiRectangleFill className="text-yellow-300 h-20 w-20" />
                  <RiEdit2Line className="absolute top-3 left-72 text-white h-5 w-5 bg-black" />
                </div>
              </div>

              <p className="font-bold text-lg px-4 py-2">Product F</p>
              <div className="flex items-center px-4 py-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="ml-2">4.7(1k)</p>
              </div>
              <p className="px-4 py-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="bg-white border  border-gray-200 rounded-lg shadow-2xl overflow-hidden h-full md:h-auto">
              <div className="flex items-center p-4">
                <div className="relative">
                  <RiRectangleFill className="text-yellow-300 h-20 w-20" />
                  <RiEdit2Line className="absolute top-3 left-72 text-white h-5 w-5 bg-black" />
                </div>
              </div>

              <p className="font-bold text-lg px-4 py-2">Product G</p>
              <div className="flex items-center px-4 py-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="ml-2">4.7(1k)</p>
              </div>
              <p className="px-4 py-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="bg-white border  border-gray-200 rounded-lg shadow-2xl overflow-hidden h-full md:h-auto">
              <div className="flex items-center p-4">
                <div className="relative">
                  <RiRectangleFill className="text-yellow-300 h-20 w-20" />
                  <RiEdit2Line className="absolute top-3 left-72 text-white h-5 w-5 bg-black" />
                </div>
              </div>

              <p className="font-bold text-lg px-4 py-2">Product H</p>
              <div className="flex items-center px-4 py-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="ml-2">4.7(1k)</p>
              </div>
              <p className="px-4 py-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="bg-white border  border-gray-200 rounded-lg shadow-2xl overflow-hidden h-full md:h-auto">
              <div className="flex items-center p-4">
                <div className="relative">
                  <RiRectangleFill className="text-yellow-300 h-20 w-20" />
                  <RiEdit2Line className="absolute top-3 left-72 text-white h-5 w-5 bg-black" />
                </div>
              </div>

              <p className="font-bold text-lg px-4 py-2">Product I</p>
              <div className="flex items-center px-4 py-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="ml-2">4.7(1k)</p>
              </div>
              <p className="px-4 py-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="bg-white border  border-gray-200 rounded-lg shadow-2xl overflow-hidden h-full md:h-auto">
              <div className="flex items-center p-4">
                <div className="relative">
                  <RiRectangleFill className="text-yellow-300 h-20 w-20" />
                  <RiEdit2Line className="absolute top-3 left-72 text-white h-5 w-5 bg-black" />
                </div>
              </div>

              <p className="font-bold text-lg px-4 py-2">Product J</p>
              <div className="flex items-center px-4 py-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="ml-2">4.7(1k)</p>
              </div>
              <p className="px-4 py-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="bg-white border  border-gray-200 rounded-lg shadow-2xl overflow-hidden h-full md:h-auto">
              <div className="flex items-center p-4">
                <div className="relative">
                  <RiRectangleFill className="text-yellow-300 h-20 w-20" />
                  <RiEdit2Line className="absolute top-3 left-72 text-white h-5 w-5 bg-black" />
                </div>
              </div>

              <p className="font-bold text-lg px-4 py-2">Product K</p>
              <div className="flex items-center px-4 py-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="ml-2">4.7(1k)</p>
              </div>
              <p className="px-4 py-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="bg-white border  border-gray-200 rounded-lg shadow-2xl overflow-hidden h-full md:h-auto">
              <div className="flex items-center p-4">
                <div className="relative">
                  <RiRectangleFill className="text-yellow-300 h-20 w-20" />
                  <RiEdit2Line className="absolute top-3 left-72 text-white h-5 w-5 bg-black" />
                </div>
              </div>

              <p className="font-bold text-lg px-4 py-2">Product L</p>
              <div className="flex items-center px-4 py-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="ml-2">4.7(1k)</p>
              </div>
              <p className="px-4 py-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
           
           
        </div>   
        </main>
        </div>  
        
      
    </div>
  );
}

export default Product;
