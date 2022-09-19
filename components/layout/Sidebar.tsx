import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { isMobile } from 'react-device-detect';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setBrand } from '../../store/slices/profileSlice';

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
];

const submenus: MenuProps[] = [
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

const comingsoons: string[] = [
  'Engagement BOOSTER',
  'Conversion BOOSTER',
  'Canpaign BOOSTER',
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const profile = useSelector((store: RootState) => store.brandProfile);

  return (
    <div className='flex-col justify-around bg-black bg-opacity-50 bg-blend-soft-light backdrop-blur-[15px] w-[240px] hidden md:flex'>
      <div
        className='w-[calc(100%-32px)] flex flex-row justify-center items-center mx-4 border-b border-[#FFFFFF64] py-4 hover:cursor-pointer'
        onClick={() =>
          dispatch(setBrand({ ...profile, loggedin: !profile.loggedin }))
        }
      >
        {profile.loggedin ? (
          <>
            <Image src={profile.avatar} width={'60vh'} height={'60vh'} />
            <h5 className='ml-[21px] text-[#FFFFFFC8] text-[2vh] leading-[30px] font-medium'>
              {profile.name || 'Name'}
            </h5>
          </>
        ) : (
          <h5 className='text-[#FFFFFFC8] text-[1.6vh] leading-[3vh] custom:text-[1.3vh] custom:leading-[2.5vh] font-medium'>
            Login/Signup
          </h5>
        )}
      </div>
      <div className='w-full grid gap-y-[0.3vh] grid-cols-1'>
        {menus.map((page: MenuProps) => (
          <Link key={page.url} href={page.url}>
            <div
              className={`w-full pl-[30px] py-[1vh] ${
                router.pathname === page.url ? 'bg-[#D9D9D9] bg-opacity-30' : ''
              } flex flex-row justify-start items-center hover:cursor-pointer`}
            >
              <Image src={page.iconUrl} width={'17vh'} height={'17vh'} />
              <h3 className='text-white font-poppins text-[1.6vh] leading-[3vh] custom:text-[1.3vh] custom:leading-[2.5vh] ml-[20px]'>
                {page.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <div className='w-full grid gap-y-[0.5vh] grid-cols-1'>
        <Link href='/comingsoon'>
          <div className='flex flex-col items-start'>
            <div
              className={`w-full pl-[30px] py-[1vh] ${
                router.pathname === '/comingsoon'
                  ? 'bg-[#D9D9D9] bg-opacity-30'
                  : ''
              } flex flex-row justify-start items-center hover:cursor-pointer`}
            >
              <Image
                src='/icons/comingsoon.png'
                width={'17vh'}
                height={'17vh'}
              />
              <h3 className='text-white font-poppins ml-[20px] font-semibold text-[1.6vh] leading-[3vh] custom:text-[1.3vh] custom:leading-[2.5vh]'>
                Coming Soon
              </h3>
            </div>
            <div className='grid grid-cols-1 gap-y-5 mt-[10px] text-start pl-[40px] opacity-80'>
              {comingsoons.map((title: string) => (
                <h3
                  key={title}
                  className='text-white font-poppins font-semibold hover:cursor-pointe text-[1.6vh] leading-[3vh] custom:text-[1.3vh] custom:leading-[2.5vh]'
                >
                  {title}
                </h3>
              ))}
            </div>
          </div>
        </Link>
      </div>
      <div className='w-full grid gap-y-[0.3vh] grid-cols-1'>
        {submenus.map((page: MenuProps) => (
          <Link key={page.url} href={page.url}>
            <div
              className={`w-full pl-[30px] py-[10px] ${
                router.pathname === page.url ? 'bg-[#D9D9D9] bg-opacity-30' : ''
              } flex flex-row justify-start items-center hover:cursor-pointer`}
            >
              <Image src={page.iconUrl} width={'17vh'} height={'17vh'} />
              <h3 className='text-white font-poppins ml-[20px] text-[1.6vh] leading-[3vh] custom:text-[1.3vh] custom:leading-[2.5vh]'>
                {page.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <div className='w-full py-[15px] bg-[#D9D9D9] bg-opacity-50 flex flex-row justify-center items-center hover:cursor-pointer'>
        <Image src='/icons/logout.png' width={20} height={20} />
        <h3 className='text-white font-poppins text-[1.7vh] leading-[2.5vh] ml-[12px] font-semibold'>
          Log Out
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
