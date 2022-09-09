import React from 'react';
import Image from 'next/image';
import TagsSlideShow from './TagsSlideShow';
import Link from 'next/link';

import { BsPlusCircle, BsChat } from 'react-icons/bs';

import EngagementChart from './EngagementChart';

const chartData = [
  {
    month: '1 June',
    engagement: 0.8,
  },
  {
    month: '5 June',
    engagement: 1.9,
  },
  {
    month: '7 June',
    engagement: 2.1,
  },
  {
    month: '9 June',
    engagement: 1.2,
  },
  {
    month: '13 June',
    engagement: 5,
  },
  {
    month: '30 June',
    engagement: 1,
  },
];

type InfluenceProps = {
  name: string;
  nickName: string;
  imageUrl: string;
  youtube?: string;
  telegram?: string;
  twitter?: string;
  followers: number;
  er: 'Good' | 'Normal' | 'Bad';
  topPrice: number;
  bottomPrice: number;
  premium: boolean;
};

const InfluenceProfile: React.FC<InfluenceProps> = ({
  name,
  nickName,
  imageUrl,
  youtube,
  telegram,
  twitter,
  followers,
  er,
  topPrice,
  bottomPrice,
  premium,
}) => {
  return (
    <div className='w-[1000px] p-[95px] pb-[30px] bg-[#082129] mx-auto my-[154px] max-h-[90vh] overflow-y-auto scrollbar'>
      <div className='flex flex-col items-center font-poppins'>
        <h1 className='font-bold text-[36px] text-white mb-[45px] z-20'>
          Influencer Profile
        </h1>
        <div className='w-full relative flex flex-col items-center bg-[#26363B] rounded-[5px] overflow-hidden'>
          <div className='w-[236px] h-[236px] rounded-full border-[22px] border-[#082129] z-20'>
            <Image src={imageUrl} width={192} height={192} />
          </div>
          <h1 className='font-bold text-[36px] text-white leading-[54px]'>
            {name}
          </h1>
          <p className='text-[24px] text-white leading-[36px] opacity-80'>
            @{nickName}
          </p>
          <div className='w-[500px] grid grid-cols-3 gap-0 text-[24px] leading-[36px] font-semibold mt-2'>
            <div className='flex flex-col items-center'>
              <h3 className='text-white mb-3'>Followers</h3>
              <h3 className='text-[#10E98C]'>{followers}K</h3>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-white mb-3'>ER</h3>
              <h3 className='text-[#10E98C]'>{er}K</h3>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-white mb-3'>Price Range</h3>
              <h3 className='text-[#10E98C]'>
                ${bottomPrice}-${topPrice}
              </h3>
            </div>
          </div>
          <div className='rounded-[10px] py-[13px] px-[83px] bg-[#FFFF00] text-black font-semibold text-[14px] leading-[21px] mt-5'>
            This influencer does paid promotions
          </div>
          <div className='flex flex-col items-center mt-[45px]'>
            <h5 className='text-16 font-semibold text-white'>Tags</h5>
            <TagsSlideShow
              tags={[
                'NFT',
                'ProductLive',
                'DoxxedTeam',
                'Fairvesting',
                'NFT',
                'ProductLive',
                'DoxxedTeam',
                'Fairvesting',
              ]}
            />
          </div>
          <div className='flex flex-col items-center mt-[45px]'>
            <h5 className='text-[16px] font-semibold text-white'>
              Influencer’s Channels
            </h5>
            <div className='w-[500px] grid grid-cols-3 gap-[53px] mt-7'>
              {youtube ? (
                <Link href={youtube}>
                  <div className='py-[10px] w-[132px] bg-[#324951] rounded-[5px] border border-transparent flex flex-row justify-center items-center hover:cursor-pointer hover:border-[#10E98C]'>
                    <Image
                      src='/icons/youtube.png'
                      width={16}
                      height={16}
                      objectFit='contain'
                    />
                    <h3 className='text-white font-semibold text-[16px] capitalize ml-[7px]'>
                      youtube
                    </h3>
                  </div>
                </Link>
              ) : (
                <></>
              )}
              {telegram ? (
                <Link href={telegram}>
                  <div className='py-[10px] w-[132px] bg-[#324951] rounded-[5px] border border-transparent flex flex-row justify-center items-center hover:cursor-pointer hover:border-[#10E98C]'>
                    <Image
                      src='/icons/telegram.png'
                      width={16}
                      height={16}
                      objectFit='contain'
                    />
                    <h3 className='text-white font-semibold text-[16px] capitalize ml-[7px]'>
                      telegram
                    </h3>
                  </div>
                </Link>
              ) : (
                <></>
              )}
              {twitter ? (
                <Link href={twitter}>
                  <div className='py-[10px] w-[132px] bg-[#324951] rounded-[5px] border border-transparent flex flex-row justify-center items-center hover:cursor-pointer hover:border-[#10E98C]'>
                    <Image
                      src='/icons/twitter.png'
                      width={16}
                      height={16}
                      objectFit='contain'
                    />
                    <h3 className='text-white font-semibold text-[16px] capitalize ml-[7px]'>
                      twitter
                    </h3>
                  </div>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className='flex flex-row items-center mt-[55px]'>
            <h3 className='text-[13px] text-white mr-[21px]'>
              Get Better Prices for this influencer by contacting :
            </h3>
            <div className='hover:cursor-pointer bg-[#324951] rounded-[5px] p-[5px] flex flex-row items-center'>
              <Image
                src='/images/cryptolabs.png'
                width={27}
                height={22}
                objectFit='contain'
              />
              <h3 className='text-white font-semibold text-[12px] capitalize ml-[3px]'>
                Crypto Labs
              </h3>
            </div>
          </div>
          <div className='flex flex-col items-center mt-[20px]'>
            <h5 className='text-[16px] font-semibold text-white mb-[11px]'>
              Influencer’s Statistics ( Last Updated 1-8-2022 )
            </h5>
            <EngagementChart data={chartData} />
          </div>
          <div className='absolute top-[150px] bg-[#FFFF00] -left-16 flex flex-row justify-center items-center py-[13px] w-[300px] text-[16px] text-black font-medium -rotate-[35deg]'>
            <div className='mr-1'>Premium Influencer</div>
            <Image src='/icons/crown.png' width={17} height={17} />
          </div>
          <div className='absolute w-[3000px] h-[3000px] bg-[#082129] rounded-full top-[130px] -translate-y-full left-1/2 -translate-x-1/2' />
          <div className='w-[220px] grid grid-cols-1 gap-7 absolute right-[35px] top-[160px]'>
            <div className='flex w-full flex-row justify-center items-center bg-[#10E98C] rounded-[5px] h-[50px] text-black hover:cursor-pointer'>
              <BsPlusCircle size={18} />
              <h3 className='text-[15px] font-semibold uppercase ml-[9px]'>
                ADD TO CAMPAIGN
              </h3>
            </div>
            <div className='flex w-full flex-row justify-center items-center border border-[#10E98C] rounded-[5px] h-[50px] text-white hover:cursor-pointer'>
              <BsChat size={18} />
              <h3 className='text-[15px] font-semibold uppercase ml-[9px]'>
                Contact
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluenceProfile;
