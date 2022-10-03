import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { BsPlusCircle, BsChat } from 'react-icons/bs';
import { FaInstagram, FaTimes, FaTiktok } from 'react-icons/fa';

import EngagementChart from './EngagementChart';
import useDialog from '../../../hooks/useDialog';
import AddInfluenceToCampaign from '../campaigns/AddInfluenceToCampaign';
import { formatNumber } from './../../../services/utils';

const InfluenceProfile: React.FC<Influence> = ({
  id,
  accountId,
  name,
  nickName,
  imageUrl,
  promotionType,
  contactLink,
  youtube,
  telegram,
  twitter,
  instagram,
  tiktok,
  followers,
  engagement,
  topPrice,
  bottomPrice,
  history,
}) => {
  console.log(history);
  const { hideDialog, showDialog } = useDialog();

  return (
    <div className='fixed top-0 left-0 w-[100vw] h-screen overflow-y-auto'>
      <div className='w-full h-full min-h-[800px] flex flex-row items-start md:items-center'>
        <div className='relative w-screen md:w-[550px] px-[10px] py-[35px] md:p-[40px] !pb-[20px] bg-[#082129] mx-auto my-0 md:my-[40px] rounded-xl'>
          <div
            className='absolute rounded-[5px] bg-[#15171B] p-2 text-white right-[25px] top-[25px] hover:cursor-pointer'
            onClick={hideDialog}
          >
            <FaTimes />
          </div>
          <div className='flex flex-col items-center font-poppins'>
            <h1 className='font-bold text-[16px] leading-[28px] text-white mb-[10px] text-center md:text-left'>
              Influencer Profile
            </h1>
            <div className='w-full relative flex flex-col items-center rounded-[5px] overflow-hidden  bg-[#26363B]'>
              <div className='relative w-[79px] h-[79px] rounded-full border-0 md:border-[8px] border-[#082129] z-20'>
                <Image src={imageUrl} layout='fill' objectFit='contain' />
              </div>
              <h1 className='font-bold text-white text-[12px] leading-[20px] mt-[10px]'>
                {name}
              </h1>
              <p className='text-white opacity-80 text-[8px] leading-[16px]'>
                @{nickName}
              </p>
              <div className='w-[90%] max-w-[400px] grid grid-cols-3 gap-0 font-semibold mt-2 text-[12px] leading-[16px]'>
                <div className='flex flex-col items-center'>
                  <h3 className='text-white mb-2'>Audience Size</h3>
                  <h3 className='text-[#10E98C]'>{formatNumber(followers)}</h3>
                </div>
                <div className='flex flex-col items-center'>
                  <h3 className='text-white mb-2'>Engagement</h3>
                  <h3 className='text-[#10E98C]'>{engagement}</h3>
                </div>
                <div className='flex flex-col items-end md:items-center'>
                  <h3 className='text-white mb-2'>Price Range</h3>
                  <h3 className='text-[#10E98C]'>
                    ${bottomPrice}-${topPrice}
                  </h3>
                </div>
              </div>
              <div className='w-[90%] grid grid-cols-1 gap-2 md:absolute right-[45px] top-[45px] py-[20px] border-b border-[#10E98C48] md:border-b-0 md:w-[120px]'>
                <div
                  className='flex w-full max-w-[120px] flex-row justify-center items-center bg-[#10E98C] rounded-[5px] h-[25px] text-black hover:cursor-pointer mx-auto hover:bg-[#11C176] transition-all'
                  onClick={() =>
                    showDialog(
                      <AddInfluenceToCampaign
                        influenceId={id}
                        accountId={accountId}
                      />
                    )
                  }
                >
                  <BsPlusCircle size={10} />
                  <h3 className='text-[8px] font-semibold uppercase ml-[9px]'>
                    ADD TO CAMPAIGN
                  </h3>
                </div>
                <div className='flex w-full max-w-[120px] flex-row justify-center items-center border border-[#10E98C] rounded-[5px] h-[25px] text-white hover:cursor-pointer mx-auto'>
                  <BsChat size={10} />
                  <h3
                    className='text-[8px] font-semibold uppercase ml-[9px]'
                    onClick={() => window.open(contactLink, '_blank')}
                  >
                    Contact
                  </h3>
                </div>
              </div>
              <div className='w-full max-w-[400px] grid-cols-3 gap-[6px] text-black font-semibold text-[12px] leading-[16px] mt-5 text-center hidden md:grid'>
                <div className='py-2 bg-[#8DD7CF] border-[0.5] border-[#000000B2] rounded-[5px] hover:cursor-pointer'>
                  VIP Perks
                </div>
                <div className='py-2 bg-[#FBE192] border-[0.5] border-[#000000B2] rounded-[5px] hover:cursor-pointer'>
                  {promotionType}
                </div>
                <div className='py-2 bg-[#96C3EC] border-[0.5] border-[#000000B2] rounded-[5px] hover:cursor-pointer'>
                  Vetted Projects Only
                </div>
              </div>
              {/* <div className='flex-col items-center mt-[45px] hidden md:flex'>
            <h5 className='text-16 font-semibold text-white'>Niche</h5>
            <NicheSlideShow niches={niches.length ? niches : ['NFTs']} />
          </div> */}
              <div className='flex-row items-center mt-[10px] hidden md:flex'>
                <h5 className='text-[12px] font-semibold text-white mr-4'>
                  Niche
                </h5>
                <div className='bg-[#324951] text-[#10E98C] text-[8px] rounded-[5px] py-[3px] text-center my-[10px] !w-[50px] !h-[18px] mx-auto'>
                  #NFTs
                </div>
              </div>
              <div className='w-full flex flex-col items-center mt-[10px]'>
                <h5 className='text-[12px] font-semibold text-white'>
                  Influencer’s Channels
                </h5>
                <div className='w-[90%] max-w-[200px] md:max-w-[400px] flex flex-row justify-center flex-wrap gap-[10px] mt-2'>
                  {youtube ? (
                    <Link href={youtube?.socialUrl}>
                      <div className='relative w-[160px] py-1 bg-[#324951] rounded-[5px] border border-transparent flex flex-row justify-between px-[7px] items-center hover:cursor-pointer hover:border-[#10E98C]'>
                        <Image
                          src='/icons/youtube.png'
                          width={12}
                          height={12}
                          objectFit='contain'
                        />
                        <h3 className='flex-1 text-left text-white font-semibold capitalize ml-[20px] text-[12px] leading-[18px]'>
                          youtube
                        </h3>
                        <h3 className='absolute right-1 text-[#CCCCCC] text-[12px] leading-[18px]'>
                          {formatNumber(youtube?.subscribers ?? 0)}
                        </h3>
                      </div>
                    </Link>
                  ) : (
                    <></>
                  )}
                  {telegram ? (
                    <Link href={telegram.socialUrl}>
                      <div className='relative w-[160px] py-1 bg-[#324951] rounded-[5px] border border-transparent flex flex-row justify-between px-[7px] items-center hover:cursor-pointer hover:border-[#10E98C]'>
                        <Image
                          src='/icons/telegram.png'
                          width={12}
                          height={12}
                          objectFit='contain'
                        />
                        <h3 className='flex-1 text-left text-white font-semibold capitalize ml-[20px] text-[12px] leading-[18px]'>
                          telegram
                        </h3>
                        <h3 className='absolute right-1 text-[#CCCCCC] text-[12px] leading-[18px]'>
                          {formatNumber(telegram?.channelMembers ?? 0)}
                        </h3>
                      </div>
                    </Link>
                  ) : (
                    <></>
                  )}
                  {twitter ? (
                    <Link href={twitter.socialUrl}>
                      <div className='relative w-[160px] py-1 bg-[#324951] rounded-[5px] border border-transparent flex flex-row justify-between px-[7px] items-center hover:cursor-pointer hover:border-[#10E98C]'>
                        <Image
                          src='/icons/twitter.png'
                          width={12}
                          height={12}
                          objectFit='contain'
                        />
                        <h3 className='flex-1 text-left text-white font-semibold capitalize ml-[20px] text-[12px] leading-[18px]'>
                          twitter
                        </h3>
                        <h3 className='absolute right-1 text-[#CCCCCC] text-[12px] leading-[18px]'>
                          {formatNumber(twitter?.followers ?? 0)}
                        </h3>
                      </div>
                    </Link>
                  ) : (
                    <></>
                  )}
                  {instagram ? (
                    <Link href={instagram.socialUrl}>
                      <div className='relative w-[160px] py-1 bg-[#324951] rounded-[5px] border border-transparent flex flex-row justify-between px-[7px] items-center hover:cursor-pointer hover:border-[#10E98C]'>
                        <FaInstagram size={12} color='white' />
                        <h3 className='flex-1 text-left text-white font-semibold capitalize ml-[20px] text-[12px] leading-[18px]'>
                          instagram
                        </h3>
                        <h3 className='absolute right-1 text-[#CCCCCC] text-[12px] leading-[18px]'>
                          {formatNumber(instagram?.followers ?? 0)}
                        </h3>
                      </div>
                    </Link>
                  ) : (
                    <></>
                  )}
                  {tiktok ? (
                    <Link href={tiktok.socialUrl}>
                      <div className='relative w-[160px] py-1 bg-[#324951] rounded-[5px] border border-transparent flex flex-row justify-between px-[7px] items-center hover:cursor-pointer hover:border-[#10E98C]'>
                        <FaTiktok size={12} color='white' />
                        <h3 className='flex-1 text-left text-white font-semibold capitalize ml-[20px] text-[12px] leading-[18px]'>
                          tiktok
                        </h3>
                        <h3 className='absolute right-1 text-[#CCCCCC] text-[12px] leading-[18px]'>
                          {formatNumber(tiktok?.followers ?? 0)}
                        </h3>
                      </div>
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              {/* <div className='flex flex-col md:flex-row items-center mt-[55px] pb-[57px] md:pb-0 border-b border-[#10E98C48] md:border-b-0'>
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
          </div> */}
              <div className='flex flex-col items-center mt-[15px]'>
                <h5 className='text-[12px] font-extrabold md:font-semibold text-white mb-[11px] text-center'>
                  Influencer’s Statistics ( Last Updated 1-8-2022 )
                </h5>
                <EngagementChart data={history} />
              </div>
              <Link href={'#'}>
                <h5 className='text-[12px] leading-[18px] text-[#10E98C] underline hover:cursor-pointer mb-[21px]'>
                  Report Issue
                </h5>
              </Link>
              {/* <div className='absolute top-[150px] bg-[#FFFF00] -left-16 flex flex-row justify-center items-center py-[13px] w-[300px] text-[16px] text-black font-medium -rotate-[35deg]'>
            <div className='mr-1'>isVIP Influencer</div>
            <Image src='/icons/crown.png' width={17} height={17} />
          </div> */}
              <div className='absolute w-[1500px] h-[1500px] bg-[#082129] rounded-full top-[50px] -translate-y-full left-1/2 -translate-x-1/2 hidden md:block' />
              <div className='absolute w-full h-[50px] bg-[#082129] top-0 left-0 md:hidden' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluenceProfile;
