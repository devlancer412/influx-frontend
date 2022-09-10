import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='relative'>
      {/* <div className='absolute top-0 left-0 z-0'>
        <Image src='/images/bg_fragment.png' width={825} height={577} />
      </div> */}
      <div className='w-screen h-screen flex flex-col z-10 bg-[#082129]'>
        <Navbar />
        <div className='flex flex-row h-[calc(100vh-56px)] items-stretch bg-[url("/images/bg_fragment1.png"),url("/images/bg_fragment2.png"),url("/images/bg-fragment3.png")] bg-no-repeat bg-fragment'>
          <Sidebar />
          <div className='flex-1 h-full overflow-y-scroll scrollbar'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
