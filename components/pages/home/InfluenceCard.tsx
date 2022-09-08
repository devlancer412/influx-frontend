import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
type InfluenceProps = {
  name: string;
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

const InfluenceCard: React.FC<InfluenceProps> = ({
  name,
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
    <div className='relative flex flex-col items-center bg-[#243034]'>
      <h3 className='w-full text-center text-[white]  text-4 leading-6 py-[7px] bg-[#D9D9D966]'>
        {name}
      </h3>
      <div className='w-full flex flex-row items-center py-[29px] px-[23px]'>
        <Image
          src={imageUrl}
          width={98}
          height={98}
          className='rounded-full mr-8'
        />
        <div className='flex flex-col flex-1 items-center'>
          <div className='flex flex-col items-stretch w-fit'>
            <p className='text-white text-[14px] font-semibold mb-[10px]'>
              @influence
            </p>
            <div className='flex flex-row w-full justify-around items-center'>
              {youtube ? (
                <Link href={youtube}>
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
              {telegram ? (
                <Link href={telegram}>
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
              {twitter ? (
                <Link href={twitter}>
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
      <div className='flex flex-col px-[35px] py-[14px] w-full'>
        <div className='relative pt-[19px] pb-[16px] text-start text-[14px] font-semibold text-white border-b border-[#FFFFFF4D]'>
          <>Followers</>
          <p className='absolute text-[#10E98C] top-1/2 -translate-y-1/2 -right-5'>
            {followers}K
          </p>
        </div>
        <div className='relative pt-[19px] pb-[16px] text-start text-[14px] font-semibold text-white border-b border-[#FFFFFF4D]'>
          <>ER</>
          <p className='absolute text-[#10E98C] top-1/2 -translate-y-1/2 -right-5'>
            {er}
          </p>
        </div>
        <div className='relative pt-[19px] pb-[16px] text-start text-[14px] font-semibold text-white'>
          <>Price Range</>
          <p className='absolute text-[#10E98C] top-1/2 -translate-y-1/2 -right-5'>
            ${bottomPrice}-${topPrice}
          </p>
        </div>
      </div>
      <div className='w-full hover:cursor-pointer'>
        <div className='w-full text-center pt-4 pb-0 text-black text-[16px] font-semibold bg-[#10E98C] rounded-t-[100%]'>
          Select
        </div>
        <div className='w-full h-4 bg-[#10E98C]' />
      </div>
      {premium ? (
        <div className='absolute top-0 right-0'>
          <Image src='/images/ribbon.png' width={100} height={100} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InfluenceCard;
