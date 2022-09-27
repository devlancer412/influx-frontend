import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import { useSelector, useDispatch } from 'react-redux';
import client from '../../services/HttpClient';

import { RootState } from '../../store';
import { setBrand } from '../../store/slices/profileSlice';
import { Languages, Regions } from './../../constant/index';

const menus: MenuProps[] = [
  {
    title: 'Discovery',
    iconUrl: '/icons/cover.png',
    url: '/',
  },
  {
    title: 'Campaigns',
    iconUrl: '/icons/campaign.png',
    url: '/campaign',
  },
  {
    title: 'Profile',
    iconUrl: '/icons/profile.png',
    url: '/profile',
  },
  {
    title: 'Upgrade Plan',
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
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      (async () => {
        let response = await client.get(`/brands/brandId/${user.email}`);
        if (!response.success) {
          const body = {
            name: user.name,
            email: user.email,
            logo: user.picture,
            region: Regions[0],
            language: Languages[0],
            desc: '',
            salesPhase: 'Launched',
            budget: 0,
            isVetted: false,
            pdfAudit: true,
            pdfReview: true,
            profileLive: true,
          };
          response = await client.post('/brands', body);
          if (!response.success) {
            console.log(response.message);
            return;
          }
        } else {
          response = await client.get(`/brands/${response.data}`);
        }
        const brandData: BrandProfile = {
          id: response.data.id,
          account: {
            id: response.data?.accountId,
            language: Languages[0],
            name: user.name,
            avatar: user.picture,
            email: user.email,
            verified: user.email_verified,
          },
          website: '',
          description: response.data?.desc,
          channels: {
            twitter: 'https://fakeurl',
            instagram: 'https://fakeurl',
            discord: 'https://fakeurl',
            youtube: 'https://fakeurl',
          },
          mainTgChannel: '',
          category: '',
          region: '',
          chain: '',
          attribute: '',
          esBudget: response.data?.budget,
          launchSettings: [
            {
              name: 'Pre-Launch',
              setted: true,
              value: '',
              placeholder: 'Presale / Launch In',
            },
            {
              name: 'Presale',
              setted: true,
              value: '',
              placeholder: 'Presale Link',
            },
            {
              name: 'Launched',
              setted: false,
              value: '',
              placeholder: 'Contract Address',
            },
          ],
          isWL: false,
          isAirdrop: false,
          isPremint: false,
          loggedin: false,
          isListed: false,
          campaigns: response.data?.campaigns.map((data) => {
            return {
              id: data.id,
              name: data.name,
              influencers: data.influencers.length,
              avgER: data.avgER,
              price: data.negoBudget,
              followers: 0,
            };
          }),
        };

        dispatch(setBrand(brandData));
      })();
    }
  }, [user]);

  return (
    <div className='flex-col justify-around bg-black bg-opacity-50 bg-blend-soft-light backdrop-blur-[15px] w-[240px] hidden md:flex'>
      {user ? (
        // <Link href='/api/auth/me'>
        <div className='w-[calc(100%-32px)] flex flex-row justify-center items-center mx-4 border-b border-[#FFFFFF64] py-4 hover:cursor-pointer'>
          <Image src={user.picture} width={'60vh'} height={'60vh'} />
          <h5 className='ml-[21px] text-[#FFFFFFC8] text-[1.6vh] leading-[3vh] custom:text-[1.3vh] custom:leading-[2.5vh] font-medium'>
            {user.name}
          </h5>
        </div>
      ) : (
        // </Link>
        <Link href='/api/auth/login'>
          <div className='w-[calc(100%-32px)] flex flex-row justify-center items-center mx-4 border-b border-[#FFFFFF64] py-4 hover:cursor-pointer'>
            <h5 className='text-[#FFFFFFC8] text-[1.6vh] leading-[3vh] custom:text-[1.3vh] custom:leading-[2.5vh] font-medium'>
              Login/Signup
            </h5>
          </div>
        </Link>
      )}
      <div className='w-full grid gap-y-[0.3vh] grid-cols-1'>
        {menus.map((page: MenuProps) => (
          <Link key={page.url} href={page.url}>
            <div
              className={`w-full pl-[30px] py-[1vh] ${
                router.pathname === page.url ? 'bg-[#D9D9D9] bg-opacity-30' : ''
              } flex flex-row justify-start items-center hover:cursor-pointer hover:bg-[#D9D9D924] transition-all`}
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
              } flex flex-row justify-start items-center hover:cursor-pointer hover:bg-[#D9D9D924] transition-all`}
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
                  className='text-white font-poppins font-semibold hover:cursor-pointe text-[1.6vh] leading-[3vh] custom:text-[1.3vh] custom:leading-[2.5vh] hover:bg-[#D9D9D924] transition-all'
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
              } flex flex-row justify-start items-center hover:cursor-pointer hover:bg-[#D9D9D924] transition-all`}
            >
              <Image src={page.iconUrl} width={'17vh'} height={'17vh'} />
              <h3 className='text-white font-poppins ml-[20px] text-[1.6vh] leading-[3vh] custom:text-[1.3vh] custom:leading-[2.5vh]'>
                {page.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      {user ? (
        <Link href='/api/auth/logout'>
          <div className='w-full py-[15px] bg-[#D9D9D9] bg-opacity-50 flex flex-row justify-center items-center hover:cursor-pointer'>
            <Image src='/icons/logout.png' width={20} height={20} />
            <h3 className='text-white font-poppins text-[1.7vh] leading-[2.5vh] ml-[12px] font-semibold'>
              Log Out
            </h3>
          </div>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Sidebar;
