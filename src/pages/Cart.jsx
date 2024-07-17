import React, { useState } from 'react';

const Cart = () => {
  const [auth,setAuth] = useState(null)
  const [showSignIn, setshowSignIn] = useState(false);
  const [showSignUp, setshowSignUp] = useState(false);
  const [showInformation,setShowInformation] = useState(false)
  return (
    <div className="max-w-7xl w-90% sm:w-85% mx-auto p-4 overflow-hidden">
      {/* Title */}
      <h1 className="text-2xl w-full mt-5 font-bold mb-4 text-center">Shopping Bag</h1>
      <div className=' flex flex-wrap'>
      {/* Left Section */}
      <div className="block max-h-[500px] h-fit justify-between  sm:w-3/5  w-full overflow-y-scroll custom-scrollbar">


      <div className=" bg-white h-[150px]   p-2 ">
          <div className=" flex h-full items-center mb-4">
            <div className="  h-full">
              <img src="https://via.placeholder.com/150" alt="Product" className='h-full'/>
            </div>
            <div className=" w-2/3 h-full   px-4">
              <h2 className="text-sm font-bold mb-1">Product Name</h2>
              <p className="text-gray-600 text-sm mb-1">Price: $XX.XX</p>
              <p className="text-gray-600 text-sm">Product ID: XXXXXXX</p>
            </div>
           <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/waste.png" alt="waste"/>
          </div>          
        </div>
        <div className=" bg-white h-[150px]   p-2 ">
          <div className=" flex h-full items-center mb-4">
            <div className="  h-full">
              <img src="https://via.placeholder.com/150" alt="Product" className='h-full'/>
            </div>
            <div className=" w-2/3 h-full   px-4">
              <h2 className="text-sm font-bold mb-1">Product Name</h2>
              <p className="text-gray-600 text-sm mb-1">Price: $XX.XX</p>
              <p className="text-gray-600 text-sm">Product ID: XXXXXXX</p>
            </div>
           <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/waste.png" alt="waste"/>
          </div>          
        </div>
        <div className=" bg-white h-[150px]   p-2 ">
          <div className=" flex h-full items-center mb-4">
            <div className="  h-full">
              <img src="https://via.placeholder.com/150" alt="Product" className='h-full'/>
            </div>
            <div className=" w-2/3 h-full   px-4">
              <h2 className="text-sm font-bold mb-1">Product Name</h2>
              <p className="text-gray-600 text-sm mb-1">Price: $XX.XX</p>
              <p className="text-gray-600 text-sm">Product ID: XXXXXXX</p>
            </div>
           <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/waste.png" alt="waste"/>
          </div>          
        </div>




      </div>
      
      {/* Right Section */}
      <div className="  sm:w-2/5 w-full ">
        <div className=" bg-white -sm  p-4 mb-4">
          {!auth && <div role='button' onClick={()=>{
            setshowSignIn(true)
            setshowSignUp(false)
          }} className='w-full text-center px-1 mt-5 bg-white text-black  hover:border-red-700 border border-black py-2'>
            Please Sign In to continue

          </div>}
          <h2 className="text-sm font-bold my-4">Total Price to Checkout: $15000</h2>
          {/* Checkout Button */}
          <div className='w-full overflow-x-hidden flex'>
          <img className='w-1/8' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons.png" alt="external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons"/>       
          <img className='w-1/8' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons.png" alt="external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons"/>       
          
          <img className='w-1/8' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/external-leaf-thanksgiving-flatart-icons-lineal-color-flatarticons.png" alt="external-leaf-thanksgiving-flatart-icons-lineal-color-flatarticons"/>
          <img className='w-1/8' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/external-leaf-thanksgiving-flatart-icons-lineal-color-flatarticons.png" alt="external-leaf-thanksgiving-flatart-icons-lineal-color-flatarticons"/>         
          <img className='w-1/8' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons.png" alt="external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons"/>       
          <img className='w-1/8' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons.png" alt="external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons"/>       
          
          <img className='w-1/8' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons.png" alt="external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons"/>       
          <img className='w-1/8' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons.png" alt="external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons"/>       
          
          <img className='w-1/8' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons.png" alt="external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons"/>       
          <img className='w-1/8' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons.png" alt="external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons"/>       
          
          <img className='w-1/8' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons.png" alt="external-gift-thanksgiving-flatart-icons-lineal-color-flatarticons"/>       

          
          </div>
       
              <button onClick={()=>{
                //update info
                setShowInformation(true)
              }}
               className="w-full mt-5 bg-black text-white py-2 ">Checkout</button>
        </div>
      </div>
      </div>
      {showSignUp && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md mx-4  shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Sign Up</h2>
            <button onClick={()=>setshowSignUp(false)} className="text-gray-600 hover:text-gray-800">
              &times;
            </button>
          </div>
          <p className="mb-4">Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300  shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Rudra@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full p-2 border border-gray-300  shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Please enter a password."
              />
            </div>
            <div className='flex justify-between'>
            <div className="text-left">
              <a href="#" onClick={()=>{
                setshowSignUp(false)
                setshowSignIn(true)
              }} className="text-sm   hover:text-blue-600">Already have an Account Sign In..</a>
            </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white font-medium  shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>)}
      {showSignIn && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white w-full max-w-md mx-4 shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Sign In</h2>
        <button onClick={() => setshowSignIn(false)} className="text-gray-600 hover:text-gray-800">
          &times;
        </button>
      </div>
      <p className="mb-4">Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Rudra@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Please enter a password."
          />
        </div>
        <div className="flex justify-between">
          <div className="text-left">
            <a href="#" onClick={() => {
              setshowSignIn(false);
              setshowSignUp(true);
            }} className="text-sm text-indigo-600 hover:text-indigo-500">Create an Account</a>
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white font-medium shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
)}

{showInformation && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white w-full max-w-md mx-4 shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold">Update Information</h2>
        <button onClick={() => setShowInformation(false)} className="text-gray-600 hover:text-gray-800">
          &times;
        </button>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="goodName" className="block text-sm font-medium text-gray-700">Good Name</label>
          <input
            type="text"
            id="goodName"
            className="mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="addressLandmark" className="block text-sm font-medium text-gray-700">Address Landmark</label>
          <input
            type="text"
            id="addressLandmark"
            className="mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Near Central Park"
          />
        </div>
        <div>
          <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
          <input
            type="text"
            id="addressLine1"
            className="mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="123 Main St"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            className="mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="123-456-7890"
          />
        </div>
        <div>
          <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">Pin Code</label>
          <input
            type="text"
            id="pinCode"
            className="mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="123456"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white font-medium shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update Info
        </button>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default Cart;