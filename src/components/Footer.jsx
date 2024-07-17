import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-200 block mt-5 w-full py-10'>
      <div className='sm:max-w-[50%] hidden mx-auto space-x-2 sm:flex justify-between'>
        <div className='block space-y-1'>
          <p className='font-semibold'>SHOP</p>
          <p className='text-sm'>Ladies</p>
          <p className='text-sm'>Men</p>
          <p className='text-sm'>Baby</p>
          <p className='text-sm'>Kids</p>
          <p className='text-sm'>H&M HOME</p>
          <p className='text-sm'>Sport</p>
          <p className='text-sm'>Magazine</p>
        </div>
        <div className='block space-y-1'>
          <p className='font-semibold'>CORPORATE INFO</p>
          <p className='text-sm'>Career at H&M</p>
          <p className='text-sm'>About H&M group</p>
          <p className='text-sm'>Sustainability H&M Group</p>
          <p className='text-sm'>Press</p>
          <p className='text-sm'>Investor relations</p>
          <p className='text-sm'>Corporate governance</p>
        </div>
        <div className='block space-y-1'>
          <p className='font-semibold'>HELP</p>
          <p className='text-sm'>Customer Service</p>
          <p className='text-sm'>My H&M</p>
          <p className='text-sm'>Find a store</p>
          <p className='text-sm'>Legal & Privacy</p>
          <p className='text-sm'>Contact</p>
          <p className='text-sm'>Report a scam</p>
          <p className='text-sm'>Cookie Notice</p>
          <p className='text-sm'>Cookie Settings</p>
        </div>
      </div>
      <div className='flex space-x-3 mx-auto mt-5 w-fit'>
        <img width="30" height="30" src="https://img.icons8.com/windows/30/instagram-new.png" alt="instagram-new"/>
        <img width="30" height="30" src="https://img.icons8.com/windows/30/youtube-play.png" alt="youtube-play"/>
        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/facebook-new.png" alt="facebook-new"/>
      </div>
      <div className='text-center mt-5'>
        <p className='text-sm'>
          The content of this site is copyright-protected and is the property
        </p>
        <div className='font-semibold'>
          XYZ
        </div>
      </div>
    </footer>
  );
};

export default Footer;
