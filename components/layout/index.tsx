import React, { PropsWithChildren } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='w-screen flex flex-col'>
      <Navbar />
      <div className='flex flex-row bg-[#082129]'>
        <Sidebar />
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
