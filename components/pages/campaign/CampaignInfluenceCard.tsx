import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEllipsisV, FaInstagram, FaTiktok } from 'react-icons/fa';
import Select from 'react-select';
import { influenceStatusSelectStyle } from '../../../constant';
import { InfluenceStates } from './../../../constant/index';
import { formatNumber } from '../../../services/utils';

type Props = {
  influence: Influence;
};

const CampaignInfluenceCard: React.FC<Props> = ({ influence }) => {
  return (
    <div className='relative flex flex-col xl:flex-row items-stretch bg-[#314146] xl:h-[120px]'>
      <div className='flex flex-col lg:flex-row w-full xl:w-1/2 justify-around items-stretch'>
        <div className='relative flex flex-row w-full lg:w-1/2 items-center justify-around py-[29px] px-[23px] overflow-hidden'>
          <Image
            src={influence?.imageUrl}
            width={78}
            height={78}
            className='rounded-full mr-8'
          />
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-stretch w-fit'>
              <p className='text-white text-[20px] font-bold leading-[30px] text-center'>
                {influence?.name}
              </p>
              <p className='text-white text-[15px] leading-[22px] mb-[11px] text-center'>
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
                        {/* <p className='text-[12px] absolute -bottom-5 -transalate-y-full text-white'>
                          {formatNumber(influence.telegram.channelMembers)}
                        </p> */}
                      </>
                    ) : influence.mainChannel == 'instagram' ? (
                      <>
                        <div className='w-[30px] h-[30px] bg-white  rounded-full hover:scale-110 flex justify-center items-center'>
                          <FaInstagram size={18} color='black' />
                        </div>
                        {/* <p className='text-[12px] absolute -bottom-5 -transalate-y-full text-white'>
                          {formatNumber(influence.instagram.followers)}
                        </p> */}
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
                        {/* <p className='text-[12px] absolute -bottom-5 -transalate-y-full text-white'>
                          {formatNumber(influence.youtube.subscribers)}
                        </p> */}
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
                        {/* <p className='text-[12px] absolute -bottom-5 -transalate-y-full text-white'>
                          {formatNumber(influence.instagram.followers)}
                        </p> */}
                      </>
                    ) : influence.mainChannel == 'tiktok' ? (
                      <>
                        <div className='w-[30px] h-[30px] bg-white  rounded-full hover:scale-110 flex justify-center items-center'>
                          <FaTiktok size={18} color='black' />
                        </div>
                        {/* <p className='text-[12px] absolute -bottom-5 -transalate-y-full text-white'>
                          {formatNumber(influence.instagram.followers)}
                        </p> */}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </Link>
                {influence?.instagram &&
                influence.mainChannel != 'instagram' ? (
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
          {influence.isVIP ? (
            <div className='absolute top-[17px] bg-[#FFFF00] -left-[46px] flex flex-row justify-center items-center py-1 w-[150px] text-[12px] text-black font-medium -rotate-[45deg]'>
              <div className='mr-1'>VIP</div>
              <Image src='/icons/crown.png' width={12} height={12} />
            </div>
          ) : (
            <></>
          )}
        </div>
        <ul className='grid-cols-1 gap-[10px] w-full lg:w-1/2 text-[13px] leading-[20px] text-[#CCCCCC] my-[23px] list-disc list-inside hidden lg:grid'>
          <li>
            Audience Size{' '}
            <span className='font-bold text-[#10E98C] text-[16px] leading-[21px] ml-[13px]'>
              {influence?.followers}K
            </span>
          </li>
          <li>
            Price Range{' '}
            <span className='font-bold text-[#10E98C] text-[16px] leading-[21px] ml-[13px]'>
              ${influence?.bottomPrice}-${influence?.topPrice}
            </span>
          </li>
          <li>
            Engagement{' '}
            <span className='font-bold text-[#10E98C] text-[16px] leading-[21px] ml-[13px]'>
              {influence?.engagement}
            </span>
          </li>
        </ul>
        <div className='w-[90%] max-w-[500px] grid grid-cols-3 gap-0 font-semibold mt-2 text-[10px] leading-[15px] lg:hidden'>
          <div className='flex flex-col items-center'>
            <h3 className='text-white mb-3'>Audience Size</h3>
            <h3 className='text-[#10E98C] text-[13px] leading-[20px]'>
              {influence?.followers}K
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-white mb-3'>Engagement</h3>
            <h3 className='text-[#10E98C] text-[13px] leading-[20px]'>
              {influence?.engagement}
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-white mb-3'>Price Range</h3>
            <h3 className='text-[#10E98C] text-[13px] leading-[20px]'>
              ${influence?.bottomPrice}-${influence?.topPrice}
            </h3>
          </div>
        </div>
      </div>
      <div className='w-full xl:w-1/2 h-full flex-row items-end hidden lg:flex'>
        <div className='w-full p-5 grid grid-cols-3 gap-[30px]'>
          <div className='flex flex-col items-start'>
            <p className='text-[13px] leading-[20px] pl-1 text-[#FFFFFF80] mb-[10px]'>
              Status
            </p>
            <Select
              styles={influenceStatusSelectStyle}
              options={InfluenceStates.map((item) => {
                return { value: item, label: item };
              })}
              defaultValue={{
                value: InfluenceStates[0],
                label: InfluenceStates[0],
              }}
            />
          </div>
          <div className='flex flex-col items-start'>
            <p className='text-[13px] leading-[20px] pl-1 text-[#FFFFFF80] mb-[10px]'>
              Negotiated price
            </p>
            <input className='w-full rounded-[3px] border-[0.5px] border-[#CCCCCC80] bg-[#243034] text-[#FFFFFF80] text-[12px] py-1 px-2' />
          </div>
          <div className='flex flex-col items-start'>
            <p className='text-[13px] leading-[20px] pl-1 text-[#FFFFFF80] mb-[10px]'>
              Notes
            </p>
            <input className='w-full rounded-[3px] border-[0.5px] border-[#CCCCCC80] bg-[#243034] text-[#FFFFFF80] text-[12px] py-1 px-2' />
          </div>
        </div>
      </div>
      <div className='w-[80%] grid grid-cols-1 gap-[19px] lg:hidden py-10'>
        <input
          className='w-full rounded-[3px] border-[0.5px] border-[#CCCCCC80] bg-[#243034] text-[#FFFFFF80] text-[12px] py-2 px-3'
          placeholder='Status'
        />
        <input
          className='w-full rounded-[3px] border-[0.5px] border-[#CCCCCC80] bg-[#243034] text-[#FFFFFF80] text-[12px] py-2 px-3'
          placeholder='Negotiated Price'
        />
        <input
          className='w-full rounded-[3px] border-[0.5px] border-[#CCCCCC80] bg-[#243034] text-[#FFFFFF80] text-[12px] py-2 px-3'
          placeholder='Notes'
        />
      </div>
      <div className='absolute w-5 h-5 flex justify-center items-center bg-[#41666FB3] top-[14px] right-8 rounded-full hover:cursor-pointer'>
        <FaEllipsisV size={12} color='white' />
      </div>
    </div>
  );
};

export default CampaignInfluenceCard;
