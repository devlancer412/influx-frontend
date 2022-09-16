import React, { useState } from 'react';
import Image from 'next/image';
import InfluenceCard from './InfluenceCard';
import { FaPlusCircle } from 'react-icons/fa';

type Props = {
  influences: any[];
};

const InfluenceList: React.FC<Props> = ({ influences }) => {
  const [selectAll, setSelectAll] = useState<Boolean>(false);
  return (
    <>
      <div className='flex-row px-10 items-start w-full justify-between hidden lg:flex'>
        <div className='rounded-[5px] bg-[#006671] px-[13px] py-[7px] flex flex-row justify-between min-w-[123px] mr-[21px]'>
          <p className='text-[10px] text-[#FFFFFF66]'>Sort</p>
          <Image
            src='/icons/sort.png'
            width={10}
            height={10}
            objectFit='cover'
          />
        </div>
        <div className='flex flex-row items-center gap-[30px]'>
          <div className='flex flex-row items-center py-[7px] px-[18px] bg-[#04434D] rounded-[5px] hover:cursor-pointer'>
            <FaPlusCircle size={20} color='#10E98C' className='mx-2' />
            <p className='text-[15px] leading-[22px] text-white font-semibold'>
              ADD TO CAMPAIGN
            </p>
          </div>
          <div className='flex flex-row items-center py-[2px] px-[18px] bg-[#04434D] rounded-[5px]'>
            <p className='text-[14px] mr-5 text-[#CCCCCC]'>
              Returned influencers :
            </p>
            <p className='text-white font-extrabold text-[20px] w-20'>24</p>
          </div>
        </div>
        <div
          className='flex flex-row items-center py-[2px] px-[10px] bg-[#04434D] rounded-[5px] hover:cursor-pointer min-w-[110px] ml-[25px]'
          onClick={() => setSelectAll(!selectAll)}
        >
          <div className='w-[8px] h-[8px] flex justify-center items-center border border-[#10E98C]'>
            {selectAll ? <div className='w-1 h-1 bg-[#10E98C]' /> : <></>}
          </div>
          <p className='flex-1 text-center text-[10px] text-white'>
            Select All
          </p>
        </div>
      </div>
      <div className='pl-5 md:pl-10 w-full overflow-x-hidden mt-8 mb-[30px]'>
        <div className='float-left w-[calc(100%-20px)] md:w-[calc(100%-40px)] grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10'>
          {influences.map((influence, index) => (
            <InfluenceCard key={index} influence={influence} />
          ))}
        </div>
      </div>
    </>
  );
};

export default InfluenceList;
