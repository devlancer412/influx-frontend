import React from 'react';
import Image from 'next/image';

const FoundByInfl: React.FC = () => {
  return (
    <div className='px-[23px] pl-[40px] lg:px-[100px] py-[30px] lg:py-[75px] flex flex-col font-poppins'>
      <ul className='font-semibold text-[12px] leading-[22px] md:text-[20px] md:leading-[32px] xl:text-[36px] xl:leading-[48px] text-white capitalize list-disc list-outside mb-[25px]'>
        <li>
          Get found by influencers who like your project{' '}
          <br className='hidden lg:block' />
          and get free calls
        </li>
      </ul>
      <div className='w-full flex flex-col items-center xl:px-[72px]'>
        <div className='relative flex flex-row items-center w-full max-w-[1000px]'>
          <div className='relative w-[42px] h-[60px] md:w-[60px] md:h-[92px] xl:w-[245px] xl:h-[300px]'>
            <Image src='/images/01.png' layout='fill' objectFit='contain' />
          </div>
          <h1 className='flex-1 text-center text-[24px] md:text-[32px] xl:text-[64px] font-extrabold text-white'>
            Complete Your Profile
          </h1>
          <div className='absolute -bottom-full md:-bottom-2/3 xl:bottom-0 right-[30%] w-[111px] xl:w-[184px] text-center py-[12px] bg-[#10E98C] text-black font-medium text-[12px] leading-[18px] xl:text-[20px] xl:leading-[30px] hover:cursor-pointer'>
            Brand Profile
          </div>
        </div>
        <div className='relative flex flex-row-reverse items-center w-full max-w-[1000px] mt-[100px]'>
          <div className='relative w-[42px] h-[60px] md:w-[60px] md:h-[92px] xl:w-[245px] xl:h-[300px]'>
            <Image src='/images/02.png' layout='fill' objectFit='contain' />
          </div>
          <div className='flex-1 flex-col items-center'>
            <h1 className='flex-1 text-center text-[24px] md:text-[32px] xl:text-[64px] font-extrabold text-white'>
              List Your Brand
            </h1>
            <p className='font-medium text-[8px] leading-[12px] md:text-[12px] md:leading-[18px] lg:text-[15px] lg:leading-[22px] text-[#CCCCCC]'>
              It may take up to 24 HR for your brand profile to go live due to
              manual review
            </p>
          </div>
          <div className='absolute -bottom-full md:-bottom-2/3 xl:bottom-0 right-[30%] w-[111px] xl:w-[184px] text-center py-[12px] bg-[#10E98C] text-black font-medium text-[12px] leading-[18px] xl:text-[20px] xl:leading-[30px] hover:cursor-pointer'>
            Request Listing
          </div>
        </div>
        <div className='relative flex flex-row items-center justify-between w-full max-w-[1000px] mt-[100px]'>
          <div className='relative w-[42px] h-[60px] md:w-[60px] md:h-[92px] xl:w-[245px] xl:h-[300px]'>
            <Image src='/images/03.png' layout='fill' objectFit='contain' />
          </div>
          <div className='flex-1 max-w-[700px] flex flex-col items-center'>
            <h1 className='flex-1 text-center text-[24px] md:text-[32px] xl:text-[64px] font-extrabold text-white'>
              List Your Brand
            </h1>
            <p className='w-[90%] font-medium text-[8px] leading-[12px] md:text-[12px] md:leading-[18px] lg:text-[15px] lg:leading-[22px] text-[#CCCCCC]'>
              Lörem ipsum ingrid Björk Michael Sjögren curlingförälder. Christer
              Samuelsson Charlotta Gustafsson. Alexandra Berggren Kerstin Öberg
              Elsa Ali Jessica Ek och Johannes Sundberg. Metasion Hanna
              Hermansson,
            </p>
          </div>
          <div className='absolute -bottom-full md:-bottom-2/3 xl:bottom-0 right-[10%] flex flex-row items-center'>
            <div className='text-center py-[12px] bg-[#10E98C] text-black font-medium text-[12px] leading-[18px] xl:text-[20px] xl:leading-[30px] hover:cursor-pointer mr-[22px] px-5'>
              Requested Vetted badge
            </div>
            <div className='text-center py-[12px] border border-[#10E98C] text-white font-medium text-[12px] leading-[18px] xl:text-[20px] xl:leading-[30px] hover:cursor-pointer px-5 min-w-[111px] xl:min-w-[184px]'>
              More Info
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundByInfl;
