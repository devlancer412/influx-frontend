import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  toggleSidebar: () => void;
};
const Navbar: React.FC<Props> = ({ toggleSidebar }) => {
  return (
    <div className='relative w-full h-[56px] bg-[#404040] flex flex-row justify-center md:justify-between items-center md:pr-[58px] md:pl-[25px]'>
      <Link href='/'>
        <div className='hover:cursor-pointer h-full flex flex-row items-center'>
          <Image
            src='/images/logo.svg'
            width='180'
            height='65'
            objectFit='contain'
          />
        </div>
      </Link>
      <div className='py-[8px] px-7 border border-black bg-[#10E98C] hover:cursor-pointer text-[#082129] font-poppins text-[12px] leading-[22px] hidden md:block hover:bg-[#11C176] transition-all'>
        List your influencers
      </div>
      <div className='absolute left-[33px] md:hidden' onClick={toggleSidebar}>
        <Image src='/icons/menu.svg' width={26} height={10} />
      </div>
    </div>
  );
};

export default Navbar;
