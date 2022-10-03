import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useDialog from '../../../hooks/useDialog';
import InfluenceProfile from '../../dialog/influenceprofile';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { formatNumber } from '../../../services/utils';

type Props = {
  influence: Influence;
  selected: boolean;
  toggleSelect: () => void;
};

const InfluenceCard: React.FC<Props> = ({
  influence,
  selected,
  toggleSelect,
}) => {
  const { showDialog } = useDialog();

  console.log(influence.tiktok);
  return (
    <div
      className={`relative flex flex-col items-center bg-[#243034] hover:cursor-pointer hover:scale-105 transition-all`}
      onClick={() => showDialog(<InfluenceProfile {...influence} />)}
    >
      <h3 className='w-full text-center text-[white]  text-4 leading-6 py-[7px] bg-[#D9D9D966]'>
        {influence?.name}
      </h3>
      <div className='w-full flex flex-row items-center py-[29px] px-[23px]'>
        <Image
          src={influence?.imageUrl}
          width={98}
          height={98}
          className='rounded-full mr-8'
        />
        <div className='flex flex-col flex-1 items-center'>
          <div className='flex flex-col items-stretch w-fit'>
            <p className='text-white text-[14px] font-semibold mb-[10px]'>
              @{influence?.nickName}
            </p>
            <div className='flex flex-row w-full justify-around items-center'>
              <Link href={influence[influence.mainChannel].socialUrl}>
                <div className='relative flex flex-col justify-center items-center mr-1'>
                  {influence.mainChannel == 'telegram' ? (
                    <>
                      <div className='w-[30px] h-[30px] bg-white  rounded-full hover:scale-110 flex justify-center items-center'>
                        <Image
                          src='/icons/telegram.png'
                          width={18}
                          height={18}
                          objectFit='contain'
                        />
                      </div>
                      <p className='text-[12px] absolute -bottom-5 -transalate-y-full text-white'>
                        {formatNumber(influence.telegram.channelMembers)}
                      </p>
                    </>
                  ) : influence.mainChannel == 'instagram' ? (
                    <>
                      <div className='w-[30px] h-[30px] bg-white  rounded-full hover:scale-110 flex justify-center items-center'>
                        <FaInstagram size={18} color='black' />
                      </div>
                      <p className='text-[12px] absolute -bottom-5 -transalate-y-full text-white'>
                        {formatNumber(influence.instagram.followers)}
                      </p>
                    </>
                  ) : influence.mainChannel == 'youtube' ? (
                    <>
                      <div className='w-[30px] h-[30px] bg-white  rounded-full hover:scale-110 flex justify-center items-center'>
                        <Image
                          src='/icons/youtube.png'
                          width={18}
                          height={18}
                          objectFit='contain'
                        />
                      </div>
                      <p className='text-[12px] absolute -bottom-5 -transalate-y-full text-white'>
                        {formatNumber(influence.youtube.subscribers)}
                      </p>
                    </>
                  ) : influence.mainChannel == 'twitter' ? (
                    <>
                      <div className='w-[30px] h-[30px] bg-white  rounded-full hover:scale-110 flex justify-center items-center'>
                        <Image
                          src='/icons/twitter.png'
                          width={18}
                          height={18}
                          objectFit='contain'
                        />
                      </div>
                      <p className='text-[12px] absolute -bottom-5 -transalate-y-full text-white'>
                        {formatNumber(influence.instagram.followers)}
                      </p>
                    </>
                  ) : influence.mainChannel == 'tiktok' ? (
                    <>
                      <div className='w-[30px] h-[30px] bg-white  rounded-full hover:scale-110 flex justify-center items-center'>
                        <FaTiktok size={18} color='black' />
                      </div>
                      <p className='text-[12px] absolute -bottom-5 -transalate-y-full text-white'>
                        {formatNumber(influence.instagram.followers)}
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </Link>
              {influence?.instagram && influence.mainChannel != 'instagram' ? (
                <Link href={influence?.instagram?.socialUrl}>
                  <div className='w-[19px] h-[19px] bg-white flex justify-center items-center rounded-full hover:scale-110 mr-1'>
                    <FaInstagram size={13} color='black' />
                  </div>
                </Link>
              ) : (
                <></>
              )}
              {influence?.youtube && influence.mainChannel != 'youtube' ? (
                <Link href={influence?.youtube?.socialUrl}>
                  <div className='w-[19px] h-[19px] bg-white flex justify-center items-center rounded-full hover:scale-110 mr-1'>
                    <Image
                      src='/icons/youtube.png'
                      width={13}
                      height={13}
                      objectFit='contain'
                    />
                  </div>
                </Link>
              ) : (
                <></>
              )}
              {influence?.telegram && influence.mainChannel != 'telegram' ? (
                <Link href={influence?.telegram?.socialUrl}>
                  <div className='w-[19px] h-[19px] bg-white flex justify-center items-center rounded-full hover:scale-110 mr-1'>
                    <Image
                      src='/icons/telegram.png'
                      width={13}
                      height={13}
                      objectFit='contain'
                    />
                  </div>
                </Link>
              ) : (
                <></>
              )}
              {influence?.twitter && influence.mainChannel != 'twitter' ? (
                <Link href={influence?.twitter?.socialUrl}>
                  <div className='w-[19px] h-[19px] bg-white flex justify-center items-center rounded-full hover:scale-110 mr-1'>
                    <Image
                      src='/icons/twitter.png'
                      width={13}
                      height={13}
                      objectFit='contain'
                    />
                  </div>
                </Link>
              ) : (
                <></>
              )}
              {influence?.tiktok && influence.mainChannel != 'tictok' ? (
                <Link href={influence?.tiktok?.socialUrl}>
                  <div className='w-[19px] h-[19px] bg-white flex justify-center items-center rounded-full hover:scale-110'>
                    <FaTiktok size={12} color='black' />
                  </div>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-row justify-center items-center gap-[6px] text-[10px] leading-[18px] text-black font-semibold text-center'>
        <div className='p-1 min-w-[60px] rounded-[5px] border-[0.5] border-[#000000B2] bg-[#8DD7CF]'>
          VIP Perks
        </div>
        <div className='p-1 min-w-[60px] rounded-[5px] border-[0.5] border-[#000000B2] bg-[#FBE192]'>
          {influence.promotionType}
        </div>
        <div className='p-1 min-w-[60px] rounded-[5px] border-[0.5] border-[#000000B2] bg-[#96C3EC]'>
          Vetted Projects Only
        </div>
        {/* <div className='p-1 min-w-[60px] rounded-[5px] border-[0.5] border-[#000000B2] bg-[#96C3EC]'>
          May do Paid Promo
        </div> */}
      </div>
      <div className='flex flex-col px-[35px] py-[14px] w-full'>
        {/* <div className='relative pt-[19px] pb-[16px] text-start text-[14px] font-semibold text-white border-b border-[#FFFFFF4D]'>
          <>Audience Size</>
          <p className='absolute text-[#10E98C] top-1/2 -translate-y-1/2 right-0'>
            {influence?.followers > 1000
              ? `${influence?.followers / 1000}K`
              : influence?.followers}
          </p>
        </div> */}
        <div className='relative pt-[19px] pb-[16px] text-start text-[14px] font-semibold text-white border-b border-[#FFFFFF4D]'>
          <>Engagement</>
          <p className='absolute text-[#10E98C] top-1/2 -translate-y-1/2 right-0'>
            {influence?.engagement}
          </p>
        </div>
        <div className='relative pt-[19px] pb-[16px] text-start text-[14px] font-semibold text-white border-b border-[#FFFFFF4D]'>
          <>Language</>
          <p className='absolute text-[#10E98C] top-1/2 -translate-y-1/2 right-0'>
            {influence?.language}
          </p>
        </div>
        <div className='relative pt-[19px] pb-[16px] text-start text-[14px] font-semibold text-white'>
          <>Price Range</>
          <p className='absolute text-[#10E98C] top-1/2 -translate-y-1/2 right-0'>
            ${influence?.bottomPrice}-${influence?.topPrice}
          </p>
        </div>
      </div>
      <div
        className='w-full hover:cursor-pointer'
        onClick={(e) => {
          toggleSelect();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div
          className={`w-full text-center pt-4 pb-0 text-black text-[16px] font-semibold ${
            selected ? 'bg-[#CCCCCC]' : 'bg-[#10E98C]'
          } rounded-t-[100%]`}
        >
          {selected ? 'Remove' : 'Select'}
        </div>
        <div
          className={`w-full h-4 ${
            selected ? 'bg-[#CCCCCC]' : 'bg-[#10E98C]'
          } `}
        />
      </div>
      {/* {influence?.isVIP ? (
        <div className='absolute top-0 right-0'>
          <Image src='/images/ribbon.png' width={90} height={100} />
        </div>
      ) : (
        <></>
      )} */}
      <div
        className='absolute w-[15px] h-[15px] rounded-[5px] border-2 border-[#10E98C] flex justify-center items-center right-4 top-[54px] hover:cursor-pointer'
        onClick={(e) => {
          toggleSelect();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {selected ? (
          <div className='w-1 h-1 rounded-full bg-white'></div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default InfluenceCard;
