import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaArrowLeftLong, FaArrowRightLong, FaLeftLong, FaRightLong, FaRightToBracket } from 'react-icons/fa6';
import { IoHeart } from 'react-icons/io5';

const Card = ({ images, price, name, slug }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0); // State for current image index
  const [heartState, setHeartState] = useState(false); // State for heart fill color
  const [showArrow,SetShowArrow] = useState(false)
  const goToPreviousImage = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div onMouseEnter={()=>{SetShowArrow(true)}}
    onMouseLeave={()=>{
      SetShowArrow(false)
    }} className="  border border-black w-[206px] h-[380px] block">
      <div className=' relative border-black h-4/5'>
              <img src={images[currentImgIndex]} alt={name} className="w-full relative min-h-full object-cover" ></img>
      { showArrow && (<>  <button
          className="w-8 h-8 absolute ml-1 top-1/2 left-0 bg-gray-200 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-300"
          onClick={goToPreviousImage}
        >
          <FaArrowLeftLong/>
        </button>
        <button
          className="w-8 h-8 absolute mr-1 top-1/2 right-0 bg-gray-200 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-300"
          onClick={goToNextImage}
        >
          <FaArrowRightLong/>
        </button> </>)}
      </div>
      <div className="p-1">
        <div className="flex justify-between w-full">
          <h2 className="sm:text-sm w-1/2 text-xs mb-2">{name}</h2>
          <p className="sm:text-sm text-xs mb-2">
            {heartState ? (
              <IoHeart
                fill="red"
                size={25}
                onClick={() => setHeartState(false)}
                className="cursor-pointer transform hover:scale-108 transition-transform duration-300"
              />
            ) : (
              <CiHeart
                size={25}
                onClick={() => setHeartState(true)}
                className="cursor-pointer transform hover:scale-108 transition-transform duration-300"
              />
            )}
          </p>
        </div>
        <p className="sm:text-sm text-xs font-bold">{price}</p>
      </div>


    </div>
  );
};

export default Card;
