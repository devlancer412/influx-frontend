import React from 'react';
import Image from 'next/image';
import TagsSlideShow from './TagsSlideShow';
import Link from 'next/link';

import { BsPlusCircle, BsChat } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';

import EngagementChart from './EngagementChart';
import useDialog from '../../../hooks/useDialog';

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
  const { hideDialog } = useDialog();

  return (
    <div className='relative w-screen lg:w-[1000px] h-screen lg:max-h-[90vh] px-[30px] py-[95px] md:p-[95px] pb-[30px] bg-[#082129] mx-auto my-[154px] overflow-y-auto scrollbar'>
      <div
        className='absolute rounded-[5px] bg-[#15171B] p-2 text-white right-[25px] top-[25px] hover:cursor-pointer'
        onClick={hideDialog}
      >
        <FaTimes />
      </div>
      <div className='flex flex-col items-center font-poppins'>
        <h1 className='font-bold text-[20px] leading-[30px] md:text-[36px] md:leading-[54px] text-white mb-[45px] z-20 text-center md:text-left'>
          Influencer Profile
        </h1>
        <div className='w-full relative flex flex-col items-center bg-[#26363B] rounded-[5px] overflow-hidden'>
          <div className='relative w-[113px] h-[113px] md:w-[236px] md:h-[236px] rounded-full border-0 md:border-[22px] border-[#082129] z-20'>
            <Image src={imageUrl} layout='fill' objectFit='contain' />
          </div>
          <h1 className='font-bold text-white text-[20px] leading-[30px] md:text-[36px] md:leading-[54px] mt-[21px]'>
            {name}
          </h1>
          <p className='text-white opacity-80 text-[14px] leading-[21px] md:text-[24px] md:leading-[36px]'>
            @{nickName}
          </p>
          <div className='w-[90%] max-w-[600px] grid grid-cols-3 gap-0 font-semibold mt-2 text-[14px] leading-[21px] md:text-[24px] md:leading-[36px]'>
            <div className='flex flex-col items-center'>
              <h3 className='text-white mb-3'>Audience Size</h3>
              <h3 className='text-[#10E98C]'>{followers}K</h3>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-white mb-3'>ER</h3>
              <h3 className='text-[#10E98C]'>{er}K</h3>
            </div>
            <div className='flex flex-col items-end md:items-center'>
              <h3 className='text-white mb-3'>Price Range</h3>
              <h3 className='text-[#10E98C]'>
                ${bottomPrice}-${topPrice}
              </h3>
            </div>
          </div>
          <div className='w-[90%] grid grid-cols-1 gap-5 md:gap-7 lg:absolute right-[35px] top-[160px] py-[20px] border-b border-[#10E98C48] lg:border-b-0 lg:w-[220px]'>
            <div className='flex w-full max-w-[220px] flex-row justify-center items-center bg-[#10E98C] rounded-[5px] h-[50px] text-black hover:cursor-pointer mx-auto'>
              <BsPlusCircle size={18} />
              <h3 className='text-[15px] font-semibold uppercase ml-[9px]'>
                ADD TO CAMPAIGN
              </h3>
            </div>
            <div className='flex w-full max-w-[220px] flex-row justify-center items-center border border-[#10E98C] rounded-[5px] h-[50px] text-white hover:cursor-pointer mx-auto'>
              <BsChat size={18} />
              <h3 className='text-[15px] font-semibold uppercase ml-[9px]'>
                Contact
              </h3>
            </div>
          </div>
          <div className='w-full max-w-[500px] grid-cols-3 gap-[13px] text-black font-semibold text-[14px] leading-[21px] mt-5 text-center hidden md:grid'>
            <div className='py-2 bg-[#8DD7CF] border-[0.5] border-[#000000B2] rounded-[5px] hover:cursor-pointer'>
              Discount
            </div>
            <div className='py-2 bg-[#FBE192] border-[0.5] border-[#000000B2] rounded-[5px] hover:cursor-pointer'>
              PaidPromo
            </div>
            <div className='py-2 bg-[#96C3EC] border-[0.5] border-[#000000B2] rounded-[5px] hover:cursor-pointer'>
              Voted Project Only
            </div>
          </div>
          <div className='flex-col items-center mt-[45px] hidden md:flex'>
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
          <div className='w-full flex flex-col items-center mt-[45px]'>
            <h5 className='text-[16px] font-semibold text-white'>
              Influencer’s Channels
            </h5>
            <div className='w-[95%] max-w-[500px] grid grid-cols-3 gap-[5px] md:gap-[10px] lg:gap-[53px] mt-7'>
              {youtube ? (
                <Link href={youtube}>
                  <div className='py-[10px] bg-[#324951] rounded-[5px] border border-transparent flex flex-row justify-between px-[7px] items-center hover:cursor-pointer hover:border-[#10E98C]'>
                    <Image
                      src='/icons/youtube.png'
                      width={16}
                      height={16}
                      objectFit='contain'
                    />
                    <h3 className='flex-1 text-center text-white font-semibold capitalize ml-[7px] text-[12px] leading-[18px] md:text-[16px] md:leading-[20px]'>
                      youtube
                    </h3>
                    <h3 className='text-[#CCCCCC] text-[16px] leading-[20px] hidden md:block'>
                      2M
                    </h3>
                  </div>
                </Link>
              ) : (
                <></>
              )}
              {telegram ? (
                <Link href={telegram}>
                  <div className='py-[10px] bg-[#324951] rounded-[5px] border border-transparent flex flex-row justify-between px-[7px] items-center hover:cursor-pointer hover:border-[#10E98C]'>
                    <Image
                      src='/icons/telegram.png'
                      width={16}
                      height={16}
                      objectFit='contain'
                    />
                    <h3 className='flex-1 text-center text-white font-semibold capitalize ml-[7px] text-[12px] leading-[18px] md:text-[16px] md:leading-[20px]'>
                      telegram
                    </h3>
                    <h3 className='text-[#CCCCCC] text-[16px] leading-[20px] hidden md:block'>
                      119K
                    </h3>
                  </div>
                </Link>
              ) : (
                <></>
              )}
              {twitter ? (
                <Link href={twitter}>
                  <div className='py-[10px] bg-[#324951] rounded-[5px] border border-transparent flex flex-row justify-between px-[7px] items-center hover:cursor-pointer hover:border-[#10E98C]'>
                    <Image
                      src='/icons/twitter.png'
                      width={16}
                      height={16}
                      objectFit='contain'
                    />
                    <h3 className='flex-1 text-center text-white font-semibold capitalize ml-[7px] text-[12px] leading-[18px] md:text-[16px] md:leading-[20px]'>
                      twitter
                    </h3>
                    <h3 className='text-[#CCCCCC] text-[16px] leading-[20px] hidden md:block'>
                      119K
                    </h3>
                  </div>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center mt-[55px] pb-[57px] md:pb-0 border-b border-[#10E98C48] md:border-b-0'>
            <h3 className='text-[11px] md:text-[13px] text-white md:mr-[21px] mb-[23px] md:mb-0 text-center'>
              Get Better Prices for this influencer by contacting :
            </h3>
            <div className='hover:cursor-pointer bg-[#324951] rounded-[5px] p-[5px] flex flex-row items-center'>
              <Image
                src='/images/cryptolabs.png'
                width={27}
                height={22}
                objectFit='contain'
              />
              <h3 className='flex-1 text-center text-white font-semibold text-[12px] capitalize ml-[3px]'>
                Crypto Labs
              </h3>
            </div>
          </div>
          <div className='flex flex-col items-center mt-[20px]'>
            <h5 className='text-[12px] md:text-[16px] font-extrabold md:font-semibold text-white mb-[11px] text-center'>
              Influencer’s Statistics ( Last Updated 1-8-2022 )
            </h5>
            <EngagementChart data={chartData} />
          </div>
          {/* <div className='absolute top-[150px] bg-[#FFFF00] -left-16 flex flex-row justify-center items-center py-[13px] w-[300px] text-[16px] text-black font-medium -rotate-[35deg]'>
            <div className='mr-1'>Premium Influencer</div>
            <Image src='/icons/crown.png' width={17} height={17} />
          </div> */}
          <div className='absolute w-[3000px] h-[3000px] bg-[#082129] rounded-full top-[130px] -translate-y-full left-1/2 -translate-x-1/2 hidden md:block' />
          <div className='absolute w-full h-[50px] bg-[#082129] top-0 left-0 md:hidden' />
        </div>
      </div>
    </div>
  );
};

export default InfluenceProfile;
