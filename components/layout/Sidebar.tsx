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
    <div className='flex flex-col w-[326px] bg-black bg-opacity-50 bg-blend-soft-light backdrop-blur-[15px]'>
      <div className='w-full grid gap-y-4 grid-cols-1 mt-[156px]'>
        {pages.map((page: MenuProps) => (
          <Link key={page.url} href={page.url}>
            <div
              className={`w-full pl-[62px] py-[20px] ${
                router.pathname === page.url ? 'bg-[#D9D9D9] bg-opacity-30' : ''
              } flex flex-row justify-start items-center hover:cursor-pointer`}
            >
              <Image src={page.iconUrl} width={28} height={28} />
              <h3 className='text-white font-poppins text-[20px] leading-[28px] ml-[26px]'>
                {page.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <div className='w-full grid gap-y-4 grid-cols-1 mt-[128px]'>
        <Link href='/comingsoon'>
          <div className='flex flex-col items-start'>
            <div
              className={`w-full pl-[50px] py-[20px] ${
                router.pathname === '/comingsoon'
                  ? 'bg-[#D9D9D9] bg-opacity-30'
                  : ''
              } flex flex-row justify-start items-center hover:cursor-pointer`}
            >
              <Image src='/icons/comingsoon.png' width={25} height={25} />
              <h3 className='text-white font-poppins text-[24px] leading-[36px] ml-[26px] font-semibold'>
                Coming Soon
              </h3>
            </div>
            <div className='grid grid-cols-1 gap-y-5 mt-[22px] text-start pl-[62px] opacity-80'>
              {comingsoons.map((title: string) => (
                <h3
                  key={title}
                  className='text-white font-poppins text-[20px] leading-[30px] font-semibold hover:cursor-pointer'
                >
                  {title}
                </h3>
              ))}
            </div>
          </div>
        </Link>
      </div>
      <div className='w-full grid gap-y-4 grid-cols-1 mt-[87px]'>
        {subpages.map((page: MenuProps) => (
          <Link key={page.url} href={page.url}>
            <div
              className={`w-full pl-[62px] py-[20px] ${
                router.pathname === page.url ? 'bg-[#D9D9D9] bg-opacity-30' : ''
              } flex flex-row justify-start items-center hover:cursor-pointer`}
            >
              <Image src={page.iconUrl} width={28} height={28} />
              <h3 className='text-white font-poppins text-[20px] leading-[28px] ml-[26px]'>
                {page.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <div className='w-full py-[20px] bg-[#D9D9D9] bg-opacity-50 flex flex-row justify-center items-center hover:cursor-pointer mt-[37px]'>
        <Image src='/icons/logout.png' width={30} height={30} />
        <h3 className='text-white font-poppins text-[24px] leading-[36px] ml-[12px] font-semibold'>
          Log Out
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
