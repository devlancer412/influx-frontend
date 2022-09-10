import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

type MenuProps = {
  title: string;
  iconUrl: string;
  url: string;
};

const pages: MenuProps[] = [
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

const subpages: MenuProps[] = [
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

  return (
    <div className='flex flex-col justify-around bg-black bg-opacity-50 bg-blend-soft-light backdrop-blur-[15px] w-[240px]'>
      <div className='w-full grid gap-y-1 grid-cols-1'>
        {pages.map((page: MenuProps) => (
          <Link key={page.url} href={page.url}>
            <div
              className={`w-full pl-[30px] py-[10px] ${
                router.pathname === page.url ? 'bg-[#D9D9D9] bg-opacity-30' : ''
              } flex flex-row justify-start items-center hover:cursor-pointer`}
            >
              <Image src={page.iconUrl} width={25} height={25} />
              <h3 className='text-white font-poppins leading-[28px] ml-[20px] text-[16px]'>
                {page.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <div className='w-full grid gap-y-1 grid-cols-1'>
        <Link href='/comingsoon'>
          <div className='flex flex-col items-start'>
            <div
              className={`w-full pl-[20px] py-[10px] ${
                router.pathname === '/comingsoon'
                  ? 'bg-[#D9D9D9] bg-opacity-30'
                  : ''
              } flex flex-row justify-start items-center hover:cursor-pointer`}
            >
              <Image src='/icons/comingsoon.png' width={23} height={23} />
              <h3 className='text-white font-poppins leading-[36px] ml-[20px] font-semibold text-[20px]'>
                Coming Soon
              </h3>
            </div>
            <div className='grid grid-cols-1 gap-y-5 mt-[15px] text-start pl-[30px] opacity-80'>
              {comingsoons.map((title: string) => (
                <h3
                  key={title}
                  className='text-white font-poppins leading-[30px] font-semibold hover:cursor-pointe text-[16px]'
                >
                  {title}
                </h3>
              ))}
            </div>
          </div>
        </Link>
      </div>
      <div className='w-full grid gap-y-1 grid-cols-1'>
        {subpages.map((page: MenuProps) => (
          <Link key={page.url} href={page.url}>
            <div
              className={`w-full pl-[30px] py-[10px] ${
                router.pathname === page.url ? 'bg-[#D9D9D9] bg-opacity-30' : ''
              } flex flex-row justify-start items-center hover:cursor-pointer`}
            >
              <Image src={page.iconUrl} width={25} height={25} />
              <h3 className='text-white font-poppins leading-[28px] ml-[20px] text-[16px]'>
                {page.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <div className='w-full py-[20px] bg-[#D9D9D9] bg-opacity-50 flex flex-row justify-center items-center hover:cursor-pointer'>
        <Image src='/icons/logout.png' width={25} height={25} />
        <h3 className='text-white font-poppins text-[20px] leading-[36px] ml-[12px] font-semibold'>
          Log Out
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
