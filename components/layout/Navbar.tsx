import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className='w-full h-[56px] bg-[#404040] flex flex-row pr-[58px] pl-[30px] justify-between items-center'>
      <Link href='/'>
        <Image src='/images/mark.png' width='180' height='56' />
      </Link>
      <div className='py-[8px] px-7 border border-black bg-[#10E98C] hover:cursor-pointer text-[#082129] font-poppins text-[12px] leading-[22px]'>
        List your influencers
      </div>
    </div>
  );
};

export default Navbar;
