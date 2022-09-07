import React, { PropsWithChildren } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='w-screen flex flex-col'>
      <Navbar />
      <div className='flex flex-row'>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
