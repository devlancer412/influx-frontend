import Image from 'next/image';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SocialSelect from '../components/pages/home/SocialSelect';
import { RootState } from '../store/index';
import {
  setSocialFilter,
  SocialFilterProps,
} from '../store/slices/filterSlice';

export default function Home() {
  const dispatch = useDispatch();
  const socialFilters: SocialFilterProps[] = useSelector(
    (store: RootState) => store.filter.socialFilters
  );

  return (
    <div className='w-full flex flex-col font-poppins'>
      <div className='flex flex-col p-[58px]'>
        <ul className='font-semibold text-[24px] leading-[36px] text-white capitalize list-disc list-inside'>
          <li>Discover the biggest list of over vetted crypto influencers</li>
        </ul>
        <div className='flex flex-col items-end'>
          <div className='flex flex-row items-center mb-[13px]'>
            <Image src='/icons/filter.png' width='13' height='12' />
            <h5 className='ml-2 text-[#10E98C] text-[13px]'>Clear Filter</h5>
          </div>
          <div className='w-full flex flex-row items-stretch justify-between'>
            <div className='w-[25%] bg-[#243034] rounded-[10px] pt-[38px] pb-[34px] pl-[26px] pr-[36px] grid grid-cols-1 gap-y-10'>
              {socialFilters.map((filter) => (
                <div
                  key={filter.title}
                  className='flex flex-row justify-between items-center'
                >
                  <Image
                    src={filter.iconUrl}
                    width={20}
                    height={18}
                    objectFit='contain'
                  />
                  <div className='flex-1 text-center text-white text-[20px]'>
                    {filter.title}
                  </div>
                  <SocialSelect
                    selected={filter.selected}
                    onToggle={(value: boolean) =>
                      dispatch(
                        setSocialFilter({
                          filterTitle: filter.title,
                          value: value,
                        })
                      )
                    }
                  />
                </div>
              ))}
            </div>
            <div className='w-[70%] bg-[#243034] rounded-[10px] pt-[38px] pb-[34px] pl-[26px] pr-[43px] grid grid-cols-1 gap-y-10 shadow-[0_4px_4px_0px_#40243034]'>
              <div className='flex flex-col flex-wrap'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
