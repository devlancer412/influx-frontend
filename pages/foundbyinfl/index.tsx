import React from 'react';
import Image from 'next/image';

const FoundByInfl: React.FC = () => {
  return (
    <div className='px-[100px] py-[75px] flex flex-col font-poppins'>
      <ul className='font-semibold text-[36px] leading-[48px] text-white capitalize list-disc list-outside mb-[25px]'>
        <li>
          Get found by influencers who like your project <br />
          and get free calls
        </li>
      </ul>
      <div className='w-full flex flex-col items-center px-[72px]'>
        <div className='relative flex flex-row items-center w-[1000px]'>
          <Image
            src='/images/01.png'
            width={245}
            height={300}
            objectFit='contain'
          />
          <h1 className='flex-1 text-center text-[64px] font-extrabold text-white'>
            Complete Your Profile
          </h1>
          <div className='absolute bottom-0 right-[30%] w-[184px] text-center py-[12px] bg-[#10E98C] text-black font-medium text-[20px] leading-[30px] hover:cursor-pointer'>
            Brand Profile
          </div>
        </div>
        <div className='relative flex flex-row-reverse items-center w-[1000px]'>
          <Image
            src='/images/02.png'
            width={245}
            height={300}
            objectFit='contain'
          />
          <h1 className='flex-1 text-center text-[64px] font-extrabold text-white'>
            List Your Brand
          </h1>
          <div className='absolute bottom-0 right-[30%] w-[184px] text-center py-[12px] bg-[#10E98C] text-black font-medium text-[20px] leading-[30px] hover:cursor-pointer'>
            Request Listing
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundByInfl;
