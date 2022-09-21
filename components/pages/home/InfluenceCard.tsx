import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useDialog from '../../../hooks/useDialog';
import InfluenceProfile from '../../dialog/influenceprofile';

type Props = {
  influence: Influence;
};

const InfluenceCard: React.FC<Props> = ({ influence }) => {
  const { showDialog } = useDialog();
  const [selected, select] = useState<boolean>(false);

  return (
    <div
      className={`relative flex flex-col items-center bg-[#243034] hover:cursor-pointer`}
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
              {influence?.instagram ? (
                <Link href={influence?.instagram}>
                  <div className='w-[19px] h-[19px] bg-white flex justify-center items-center rounded-full hover:scale-110 mr-1'>
                    <Image
                      src='/icons/instagram.png'
                      width={13}
                      height={13}
                      objectFit='contain'
                    />
                  </div>
                </Link>
              ) : (
                <></>
              )}
              {influence?.youtube ? (
                <Link href={influence?.youtube}>
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
              {influence?.telegram ? (
                <Link href={influence?.telegram}>
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
              {influence?.twitter ? (
                <Link href={influence?.twitter}>
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
              {influence?.tiktok ? (
                <Link href={influence?.tiktok}>
                  <div className='w-[19px] h-[19px] bg-white flex justify-center items-center rounded-full hover:scale-110'>
                    <Image
                      src='/icons/tiktok.png'
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
      <div className='w-full flex flex-row justify-center items-center gap-[6px] text-[10px] leading-[18px] text-black font-semibold text-center'>
        <div className='p-1 min-w-[60px] rounded-[5px] border-[0.5] border-[#000000B2] bg-[#8DD7CF]'>
          VIP Perks
        </div>
        <div className='p-1 min-w-[60px] rounded-[5px] border-[0.5] border-[#000000B2] bg-[#FBE192]'>
          Paid Promo
        </div>
        <div className='p-1 min-w-[60px] rounded-[5px] border-[0.5] border-[#000000B2] bg-[#96C3EC]'>
          Vetted Projects Only
        </div>
      </div>
      <div className='flex flex-col px-[35px] py-[14px] w-full'>
        <div className='relative pt-[19px] pb-[16px] text-start text-[14px] font-semibold text-white border-b border-[#FFFFFF4D]'>
          <>Audience Size</>
          <p className='absolute text-[#10E98C] top-1/2 -translate-y-1/2 -right-5'>
            {influence?.followers > 1000
              ? `${influence?.followers / 1000}K`
              : influence?.followers}
          </p>
        </div>
        <div className='relative pt-[19px] pb-[16px] text-start text-[14px] font-semibold text-white border-b border-[#FFFFFF4D]'>
          <>Engagement</>
          <p className='absolute text-[#10E98C] top-1/2 -translate-y-1/2 -right-5'>
            {influence?.engagement}
          </p>
        </div>
        <div className='relative pt-[19px] pb-[16px] text-start text-[14px] font-semibold text-white'>
          <>Price Range</>
          <p className='absolute text-[#10E98C] top-1/2 -translate-y-1/2 -right-5'>
            ${influence?.bottomPrice}-${influence?.topPrice}
          </p>
        </div>
      </div>
      <div
        className='w-full hover:cursor-pointer'
        onClick={(e) => {
          select(!selected);
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
          select(!selected);
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
