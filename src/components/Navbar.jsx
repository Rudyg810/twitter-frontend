import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { FaHandHoldingHeart, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [dialog, setDialog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <div>
      <div className="items-center p-4 bg-white  text-black">
        <div className="flex mx-1 sm:mx-14 justify-between">
          <div className="hidden md:flex sm:hidden w-[380px] space-x-3">
            <a href="#home" className="text-black   text-sm">Home</a>
            <a href="#about" className="text-black   text-sm">About Me</a>
            <a href="#order-tracking" className="text-black   text-sm">Order Tracking</a>
            <a 
              className="relative text-black   text-sm" 
              onMouseEnter={() => setDialog(true)} 
              onMouseLeave={() => setDialog(false)}
              role='button'
            >
              Important Links
              {dialog && (
                <div className="absolute z-20 transition-opacity duration-300 ease-in-out opacity-100">
                  <ul className="mt-7 p-2 block w-[140px] h-fit space-y-2 bg-white text-black">
                    <a className="hover:text-maroon-600 block ">Home</a>
                    <a className="hover:text-maroon-600 block ">About</a>
                    <a className="hover:text-maroon-600 block">Company Policy</a>
                  </ul>
                </div>
              )}
            </a>
          </div>
          <div className="text-xl font-bold text-center">XYZ</div>
          <div className="flex justify-end w-[380px] space-x-4">
            <button 
              className="text-black  flex mt-auto  "
              onClick={() => setShowModal(true)}
            >
            <CiUser size={20}/>
           <span className='text-sm'>Sign In</span>
            </button>
            <button className="text-black  relative  ">
              <div ><FaShoppingCart size={20}/>
              <span className="absolute top-[-10px] right-[-10px] bg-black rounded-full px-[5px] py-[3px] text-xs  text-white">18
              </span></div>
              
            </button>
            <button className="text-black relative  ">
              <div><FaHandHoldingHeart size={20}/></div>
              <span className="absolute top-[-10px] right-[-10px] bg-black rounded-full px-[5px] py-[3px] text-xs  text-white">18
              </span>
            </button>
    
          </div>
        </div>
      </div>

      {showModal && (
        <div aria-hidden="true" className="fixed top-0 right-0 left-0 z-50  w-full h-full ">
          <div className="relative w-full  h-screen ml-auto sm:w-[30%]">
            <div className="relative bg-white h-full  -lg shadow dark:bg-gray-700">
              <div className="flex items-center h-fit mx-auto  justify-between p-4 md:p-5 border-b -t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                  Sign in to our platform
                </h3>
                <button 
                  type="button" 
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 -lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-black"
                  onClick={() => setShowModal(false)}
                >
                  <svg className="w-3  h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form className="space-y-4 " action="#">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border-gray-300 text-gray-900 text-sm -lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="name@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border-gray-300 text-gray-900 text-sm -lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required />
                  </div>
                  <div className="flex  justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border-gray-300  bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                      </div>
                      <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <a href="#" className="text-sm text-red-700  dark:text-red-500">Lost Password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium -lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <a 
                    onClick={()=>{
                      setShowModal(false)
                      setShowSignUpModal(true)
                    }} href="#" className="text-red-700  dark:text-red-500">Create account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSignUpModal && (
        <div aria-hidden="true" className="fixed top-0 right-0 left-0 z-50  w-full h-full ">
          <div className="relative w-full  h-screen ml-auto sm:w-[30%]">
            <div className="relative bg-white h-full  -lg shadow dark:bg-gray-700">
              <div className="flex items-center h-fit mx-auto  justify-between p-4 md:p-5 border-b -t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                  Sign up to our platform
                </h3>
                <button 
                  type="button" 
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 -lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-black"
                  onClick={() => setShowSignUpModal(false)}
                >
                  <svg className="w-3  h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form className="space-y-4 " action="#">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border-gray-300 text-gray-900 text-sm -lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="name@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border-gray-300 text-gray-900 text-sm -lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required />
                  </div>
                  <div className="flex  justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border-gray-300  bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                      </div>
                      <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium -lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Registered? <a onClick={()=>{
                      setShowModal(true);
                      setShowSignUpModal(false)
                    }} href="#" className="text-red-700  dark:text-red-500">Login to your account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
