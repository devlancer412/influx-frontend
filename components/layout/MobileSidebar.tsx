import React from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

type Props = {
  hide: boolean;
  setHide: () => void;
};

const menus: MenuProps[] = [
  {
    title: 'Discover',
    iconUrl: '/icons/cover.png',
    url: '/',
  },
  {
    title: 'Campaigns',
    iconUrl: '/icons/campaign.png',
    url: '/campaign',
  },
  {
    title: 'Get Found by infl.',
    iconUrl: '/icons/foundbyinfl.png',
    url: '/foundbyinfl',
  },
  {
    title: 'Profile',
    iconUrl: '/icons/profile.png',
    url: '/profile',
  },
  {
    title: 'Plan & Billing',
    iconUrl: '/icons/planandbilling.png',
    url: '/planandbilling',
  },
  {
    title: 'I am an Influencer',
    iconUrl: '/icons/campaign.png',
    url: '/iminfluencer',
  },
  {
    title: 'Trusted Agencies',
    iconUrl: '/icons/trustedagencies.png',
    url: '/trustedagencies',
  },
  {
    title: 'Settings',
    iconUrl: '/icons/settings.png',
    url: '/settings',
  },
  {
    title: 'Help Center',
    iconUrl: '/icons/helpcenter.png',
    url: '/helpcenter',
  },
];

const MobileSidebar: React.FC<Props> = ({ hide, setHide }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-[#082129] md:hidden ${
        hide ? '-translate-x-full' : 'translate-x-0'
      } transition-transform z-20 font-poppins`}
    >
      <div className='w-full h-[720px] flex flex-col items-start py-10'>
        <FaTimes className='mx-8' size={20} color='#10E98C' onClick={setHide} />
        <div className='flex-1 flex flex-col justify-between items-start my-[55px] text-[14px] leading-[21px] text-white mx-8'>
          {menus.map((menu) => (
            <Link key={menu.title} href={menu.url}>
              <div
                className='flex flex-row justify-between items-center w-[200px]'
                onClick={setHide}
              >
                <p>{menu.title}</p>
                <Image
                  src={menu.iconUrl}
                  width={20}
                  height={20}
                  objectFit='contain'
                />
              </div>
            </Link>
          ))}
        </div>
        <div className='w-full bg-[#D9D9D948] flex flex-row justify-center items-center py-[13px]'>
          <Image src='/icons/logout.png' width={25} height={25} />
          <h3 className='text-white text-[20px] leading-[30px] ml-[12px] font-semibold'>
            Log Out
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
