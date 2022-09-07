import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className='w-full h-[73px] bg-[#404040] flex flex-row pr-[58px] pl-[38px] justify-between items-center'>
      <Image src='/images/mark.png' width='227' height='80' />
      <div className='py-[8px] px-7 border border-black bg-[#10E98C] hover:cursor-pointer text-[#082129] font-poppins text-[15px] leading-[22px]'>
        List your influencers
      </div>
    </div>
  );
};

export default Navbar;
