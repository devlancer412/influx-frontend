import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEllipsisV } from 'react-icons/fa';

type Props = {
  influence: Influence;
};

const CampaignInfluenceCard: React.FC<Props> = ({ influence }) => {
  return (
    <div className='relative flex flex-row items-center bg-[#243034] h-[120px]'>
      <div className='flex flex-row w-1/2 justify-around items-center'>
        <div className='flex flex-row w-1/2 items-center justify-around py-[29px] px-[23px]'>
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
              <p className='text-white text-[15px] leading-[22px] mb-[11px]'>
                @{influence?.nickName}
              </p>
              <div className='flex flex-row w-full justify-around items-center'>
                {influence?.youtube ? (
                  <Link href={influence?.youtube}>
                    <div className='w-[19px] h-[19px] bg-white flex justify-center items-center rounded-full'>
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
                {influence?.telegram ? (
                  <Link href={influence?.telegram}>
                    <div className='w-[19px] h-[19px] bg-white flex justify-center items-center rounded-full'>
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
                {influence?.twitter ? (
                  <Link href={influence?.twitter}>
                    <div className='w-[19px] h-[19px] bg-white flex justify-center items-center rounded-full'>
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
              </div>
            </div>
          </div>
        </div>
        <ul className='grid grid-cols-1 gap-[10px] w-1/2 text-[13px] leading-[20px] text-[#CCCCCC] my-[23px] list-disc list-inside'>
          <li>
            Followers{' '}
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
            ER{' '}
            <span className='font-bold text-[#10E98C] text-[16px] leading-[21px] ml-[13px]'>
              {influence?.er}
            </span>
          </li>
        </ul>
      </div>
      <div className='w-1/2 h-full flex flex-row items-end'>
        <div className='w-full p-5 grid grid-cols-3 gap-[30px]'>
          <div className='flex flex-col items-start'>
            <p className='text-[13px] leading-[20px] pl-1 text-[#FFFFFF80] mb-[10px]'>
              Status
            </p>
            <input className='w-full rounded-[3px] border border-[#CCCCCC80] bg-[#243034] text-[#FFFFFF80]' />
          </div>
          <div className='flex flex-col items-start'>
            <p className='text-[13px] leading-[20px] pl-1 text-[#FFFFFF80] mb-[10px]'>
              Negociated price
            </p>
            <input className='w-full rounded-[3px] border border-[#CCCCCC80] bg-[#243034] text-[#FFFFFF80]' />
          </div>
          <div className='flex flex-col items-start'>
            <p className='text-[13px] leading-[20px] pl-1 text-[#FFFFFF80] mb-[10px]'>
              Notes
            </p>
            <input className='w-full rounded-[3px] border border-[#CCCCCC80] bg-[#243034] text-[#FFFFFF80]' />
          </div>
        </div>
      </div>
      <div className='absolute w-5 h-5 flex justify-center items-center bg-[#41666FB3] top-[14px] right-8 rounded-full hover:cursor-pointer'>
        <FaEllipsisV size={12} color='white' />
      </div>
    </div>
  );
};

export default CampaignInfluenceCard;
