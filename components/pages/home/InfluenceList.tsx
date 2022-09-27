import React, { useState } from 'react';
import Image from 'next/image';
import InfluenceCard from './InfluenceCard';
import { FaPlusCircle } from 'react-icons/fa';
import Select, { components } from 'react-select';
import { influencesSortSelectStyle, Sorters } from '../../../constant';
import { Engagements } from './../../../constant/index';

type Props = {
  influences: Influence[];
  sortFilter: SortFilter;
  setSortFilter: (value: SortFilter) => void;
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Image src='/icons/sort.png' width={10} height={10} objectFit='cover' />
    </components.DropdownIndicator>
  );
};

const InfluenceList: React.FC<Props> = ({
  influences,
  sortFilter,
  setSortFilter,
}) => {
  const [selectAll, setSelectAll] = useState<Boolean>(false);
  return (
    <>
      <div className='relative flex-row px-10 items-start w-full justify-center hidden lg:flex'>
        {/* <div className='rounded-[5px] bg-[#006671] px-[13px] py-[7px] flex flex-row justify-between min-w-[123px] mr-[21px]'>
          <p className='text-[10px] text-[#FFFFFF66]'>Sort</p>
          <Image
            src='/icons/sort.png'
            width={10}
            height={10}
            objectFit='cover'
          />
        </div> */}
        <div className='w-[15%] max-w-[150px] absolute top-0 left-10'>
          <Select
            styles={influencesSortSelectStyle}
            components={{ DropdownIndicator }}
            options={Sorters.map((item) => {
              return { value: item, label: item };
            })}
            value={{
              value: sortFilter,
              label: sortFilter,
            }}
            onChange={(item: any) => {
              setSortFilter(item.value);
            }}
          />
        </div>
        <div className='flex flex-row items-center gap-[30px]'>
          <div className='flex flex-row items-center py-[7px] px-[18px] bg-[#04434D] rounded-[5px] hover:cursor-pointer hover:bg-[#075E6C] transition-all'>
            <FaPlusCircle size={20} color='#10E98C' className='mx-2' />
            <p className='text-[15px] leading-[22px] text-white font-semibold'>
              ADD TO CAMPAIGN
            </p>
          </div>
          <div className='flex flex-row items-center py-[2px] px-[18px] bg-[#04434D] rounded-[5px]'>
            <p className='text-[14px] mr-5 text-[#CCCCCC]'>
              Returned influencers :
            </p>
            <p className='text-white font-extrabold text-[20px] w-20'>
              {influences.length}
            </p>
          </div>
        </div>
        <div
          className='flex flex-row items-center py-[2px] px-[10px] bg-[#04434D] rounded-[5px] hover:cursor-pointer min-w-[110px] ml-[25px] absolute top-0 right-10 hover:bg-[#075E6C] transition-all'
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
        <div className='float-left w-[calc(100%-20px)] md:w-[calc(100%-40px)] grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 py-5'>
          {influences
            .sort((a, b) =>
              sortFilter === 'Audience size'
                ? a.followers - b.followers
                : sortFilter === 'Price range'
                ? b.topPrice - a.topPrice
                : Engagements.indexOf(a.engagement) -
                  Engagements.indexOf(b.engagement)
            )
            .map((influence, index) => (
              <InfluenceCard key={index} influence={influence} />
            ))}
        </div>
      </div>
    </>
  );
};

export default InfluenceList;
