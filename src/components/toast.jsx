import React, { useState, useEffect } from 'react';

const Toast = ({ show, onHide, productName, price, description, image }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  return (
    <>
      {show && (
        <div className="fixed overflow-hidden top-20 left-0 sm:left-0 w-full h-full sm:h-full z-10"></div>
      )}
      <div
        className={`absolute z-20 sm:top-0 top-1/2 right-0 sm:h-full h-screen  w-full sm:w-[25%] transition-transform transform ${
          show ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          transitionProperty: 'transform', // Add transition property
          transitionDuration: '0.3s', // Set transition duration
          transitionTimingFunction: 'ease-in-out', // Adjust timing function
        }}
      >
        <div className="h-fit border bg-white p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold">{productName}</h2>
            <p className="text-gray-600">Added to Cart</p>
            <p className="text-gray-800">{price}</p>
            <p className="text-gray-600">{description}</p>
            <img
              src={image}
              alt={productName}
              className="mt-2 sm:block hidden w-full h-32 object-cover"
            />
          </div>
          <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-black">
            Take me to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Toast;
