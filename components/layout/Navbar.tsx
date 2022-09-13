import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

type Props = {
  toggleSidebar: () => void;
};
const Navbar: React.FC<Props> = ({ toggleSidebar }) => {
  return (
    <div className='relative w-full h-[56px] bg-[#404040] flex flex-row justify-center md:justify-between items-center md:pr-[58px] md:pl-[25px]'>
      <Link href='/'>
        <div className='hover:cursor-pointer h-full flex flex-row items-center'>
          <Image src='/images/mark.png' width='180' height='56' />
        </div>
      </Link>
      <div className='py-[8px] px-7 border border-black bg-[#10E98C] hover:cursor-pointer text-[#082129] font-poppins text-[12px] leading-[22px] hidden md:block'>
        List your influencers
      </div>
      {isMobile ? (
        <div className='absolute left-[33px]' onClick={toggleSidebar}>
          <Image src='/icons/menu.svg' width={26} height={10} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
