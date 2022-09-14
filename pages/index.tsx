import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlinePriceCheck } from 'react-icons/md';
import { FaHeartbeat, FaSearchLocation } from 'react-icons/fa';
import { BsGlobe2, BsPeopleFill, BsFillPersonFill } from 'react-icons/bs';

import SocialSelect from '../components/pages/home/SocialSelect';
import { RootState } from '../store/index';
import {
  Engagements,
  Languages,
  AudienceSizes,
  Tags,
  AudienceLocations,
} from '../constant';
import {
  setEngagementFilter,
  setLanguageFilter,
  setPriceFilter,
  setSocialFilter,
  setAudienceSizeFilter,
  setUserNameFilter,
  setAudienceLocationFilter,
  setTagsFilter,
} from '../store/slices/filterSlice';
import RangeSelect from '../components/pages/home/RangeSelect';
import SelectInput from '../components/pages/home/SelectInput';
import InfluenceList from '../components/pages/home/InfluenceList';
import MobileChannelSelect from '../components/pages/home/MobileChannelSelect';
import MobileSelectInput from '../components/pages/home/MobileSelectInput';
import { PriceRanges } from '../constant';
import { isMobile } from 'react-device-detect';

export default function Home() {
  const dispatch = useDispatch();
  const {
    socialFilters,
    priceFilter,
    engagementFilter,
    languageFilter,
    audienceSizeFilter,
    userNameFilter,
    audienceLocationFilter,
    tagsFilter,
  } = useSelector((store: RootState) => store.filter);
  const influences = useSelector((store: RootState) => store.influences);
  const users = useSelector((store: RootState) => store.users);
  const [priceRange, setPriceRange] = useState<string>(PriceRanges[0]);

  useEffect(() => {
    if (isMobile) {
      const prices = priceRange
        .split(' - ')
        .map((item) => item.substring(1, item.length - 1))
        .map((item) => parseInt(item));
      dispatch(
        setPriceFilter({
          top: prices[1],
          bottom: prices[0],
        })
      );
    }
  }, [priceRange]);

  return (
    <div className='w-full flex flex-col font-poppins'>
      <div className='flex flex-col p-[23px] md:p-[58px]'>
        <ul className='font-semibold text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] text-white list-none md:list-disc list-inside uppercase md:capitalize p-[9px] md:p-0 mb-[90px] md:mb-0'>
          <li>
            Discover <br className='md:hidden' /> the biggest list{' '}
            <br className='md:hidden' /> of over vetted crypto{' '}
            <br className='md:hidden' /> influencers
          </li>
        </ul>
        <div className='flex flex-col items-end'>
          <div className='flex flex-row items-center mb-[13px]'>
            <Image src='/icons/filter.png' width='13' height='12' />
            <h5 className='ml-2 text-[#10E98C] text-[13px]'>Clear Filter</h5>
          </div>
          {/* mobile view */}
          <div className='w-full flex flex-col items-center md:hidden'>
            <div className='w-full grid grid-cols-1 gap-[25px] bg-[#243034] py-[27px] px-[18px] mb-[30px]'>
              <div className='w-full flex flex-col items-start'>
                <ul className='list-inside list-disc mb-[9px] text-white font-bold text-[12px] leading-[18px]'>
                  <li>Platform</li>
                </ul>
                <div className='w-full mb-[10px] lg:mb-0 lg:w-[25%] bg-[#243034] rounded-[10px] pt-[38px] pb-[34px] pl-[26px] pr-[36px] grid grid-cols-1 gap-y-10'>
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
                      <div className='flex-1 text-center text-white text-[16px]'>
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
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <ul className='w-full list-inside list-disc text-white font-bold text-[12px] leading-[18px]'>
                    <li>Price Range For promo</li>
                  </ul>
                  <MdOutlinePriceCheck
                    size={15}
                    color='#FFFFFFB3'
                    className='mx-1'
                  />
                </div>
                <MobileSelectInput
                  items={PriceRanges}
                  value={priceRange}
                  onChange={(value) => setPriceRange(value)}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <ul className='w-full list-inside list-disc text-white font-bold text-[12px] leading-[18px]'>
                    <li>Engagement Rate</li>
                  </ul>
                  <FaHeartbeat size={15} color='#FFFFFFB3' className='mx-1' />
                </div>
                <MobileSelectInput
                  items={Engagements}
                  value={engagementFilter}
                  onChange={(value) => {
                    dispatch(setEngagementFilter(value));
                  }}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <ul className='w-full list-inside list-disc text-white font-bold text-[12px] leading-[18px]'>
                    <li>Language</li>
                  </ul>
                  <BsGlobe2 size={15} color='#FFFFFFB3' className='mx-1' />
                </div>
                <MobileSelectInput
                  items={Languages}
                  value={languageFilter}
                  onChange={(value) => {
                    dispatch(setLanguageFilter(value));
                  }}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <ul className='w-full list-inside list-disc text-white font-bold text-[12px] leading-[18px]'>
                    <li>Audience Size</li>
                  </ul>
                  <BsPeopleFill size={15} color='#FFFFFFB3' className='mx-1' />
                </div>
                <MobileSelectInput
                  items={AudienceSizes}
                  value={audienceSizeFilter}
                  onChange={(value) => {
                    dispatch(setAudienceSizeFilter(value));
                  }}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <ul className='w-full list-inside list-disc text-white font-bold text-[12px] leading-[18px]'>
                    <li>Audience Location</li>
                  </ul>
                  <FaSearchLocation
                    size={15}
                    color='#FFFFFFB3'
                    className='mx-1'
                  />
                </div>
                <MobileSelectInput
                  items={AudienceLocations}
                  value={audienceLocationFilter}
                  onChange={(value) => {
                    dispatch(setAudienceLocationFilter(value));
                  }}
                  placeholder='Where audience located'
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <ul className='w-full list-inside list-disc text-white font-bold text-[12px] leading-[18px]'>
                    <li>User Name</li>
                  </ul>
                  <BsFillPersonFill
                    size={15}
                    color='#FFFFFFB3'
                    className='mx-1'
                  />
                </div>
                <input
                  value={userNameFilter}
                  onChange={(e) => dispatch(setUserNameFilter(e.target.value))}
                  className='w-full border border-[#10E98C80] bg-[#1B3D43] text-center py-[9px] text-[10px] leading-[15px] text-[#FFFFFF64]'
                  placeholder='Search By Username'
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <ul className='w-full list-inside list-disc text-white font-bold text-[12px] leading-[18px]'>
                    <li>Tags</li>
                  </ul>
                  <div className='mx-1 text-[#FFFFFFB3] text-[15px] font-bold'>
                    #
                  </div>
                </div>
                <input
                  value={tagsFilter}
                  onChange={(e) => dispatch(setTagsFilter(e.target.value))}
                  className='w-full border border-[#10E98C80] bg-[#1B3D43] text-center py-[9px] text-[10px] leading-[15px] text-[#FFFFFF64] capitalize'
                  placeholder='type some keywords'
                />
              </div>
            </div>
            <div className='w-[280px] max-w-full rounded-[5px] bg-[#10E98C] py-[7px] text-center text-[14px] leading-[21px] text-black hover:cursor-pointer'>
              Find Now
            </div>
          </div>
          {/* desctop view */}
          <div className='w-full flex-col lg:flex-row items-stretch justify-between hidden md:flex'>
            <div className='w-full mb-[10px] lg:mb-0 lg:w-[25%] bg-[#243034] rounded-[10px] pt-[38px] pb-[34px] pl-[26px] pr-[36px] grid grid-cols-1 gap-y-10'>
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
                  <div className='flex-1 text-center text-white text-[16px]'>
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
            <div className='relative w-full lg:w-[70%] bg-[#243034] rounded-[10px] p-4 pl-[43px] pt-[30px] grid grid-cols-1 gap-y-10 shadow-[0_4px_4px_0px_#24303440]'>
              <div className='w-full h-full flex flex-row justify-between'>
                <div className='flex flex-col w-[35%] justify-around'>
                  <div className='flex flex-col items-start'>
                    <div className='flex flex-row justify-start items-center'>
                      <h3 className='font-semibold text-[12px] text-white capitalize'>
                        Price Range for promo
                      </h3>
                      <MdOutlinePriceCheck
                        size={15}
                        color='#FFFFFFB3'
                        className='mx-1'
                      />
                      <Image src='/icons/info.png' width={10} height={10} />
                    </div>
                    <RangeSelect
                      value0={priceFilter.bottom}
                      value1={priceFilter.top}
                      top={10000}
                      onChange={(top, bottom) => {
                        dispatch(setPriceFilter({ top, bottom }));
                      }}
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <div className='flex flex-row justify-start items-center'>
                      <h3 className='font-semibold text-[12px] text-white capitalize'>
                        Engagement Rate
                      </h3>
                      <FaHeartbeat
                        size={15}
                        color='#FFFFFFB3'
                        className='mx-1'
                      />
                      <Image src='/icons/info.png' width={10} height={10} />
                    </div>
                    <SelectInput
                      items={Engagements}
                      value={engagementFilter}
                      onChange={(value) => {
                        dispatch(setEngagementFilter(value));
                      }}
                    />
                  </div>
                  <div className='flex flex-col items-start mt-[10px]'>
                    <div className='flex flex-row justify-start items-center'>
                      <h3 className='font-semibold text-[12px] text-white capitalize'>
                        Language
                      </h3>
                      <BsGlobe2 size={15} color='#FFFFFFB3' className='mx-1' />
                      <Image src='/icons/info.png' width={10} height={10} />
                    </div>
                    <SelectInput
                      items={Languages}
                      value={languageFilter}
                      onChange={(value) => {
                        dispatch(setLanguageFilter(value));
                      }}
                    />
                  </div>
                  <div className='flex flex-col items-start mt-[10px]'>
                    <div className='flex flex-row justify-start items-center'>
                      <h3 className='font-semibold text-[12px] text-white capitalize'>
                        Audience Size
                      </h3>
                      <BsPeopleFill
                        size={15}
                        color='#FFFFFFB3'
                        className='mx-1'
                      />
                      <Image src='/icons/info.png' width={10} height={10} />
                    </div>
                    <SelectInput
                      items={AudienceSizes}
                      value={audienceSizeFilter}
                      onChange={(value) => {
                        dispatch(setAudienceSizeFilter(value));
                      }}
                    />
                  </div>
                </div>
                <div className='w-[50%] flex flex-col justify-between'>
                  <div className='flex flex-col w-[70%] justify-around'>
                    <div className='flex flex-col items-start'>
                      <div className='flex flex-row justify-start items-center'>
                        <h3 className='font-semibold text-[12px] text-white capitalize'>
                          By User Name
                        </h3>
                        <BsFillPersonFill
                          size={15}
                          color='#FFFFFFB3'
                          className='mx-1'
                        />
                        <Image src='/icons/info.png' width={10} height={10} />
                      </div>
                      <SelectInput
                        items={users.map((user) => user.name)}
                        value={userNameFilter}
                        placeholder='Search by user name'
                        onChange={(value) => {
                          dispatch(setUserNameFilter(value));
                        }}
                      />
                    </div>
                    <div className='flex flex-col items-start mt-[10px]'>
                      <div className='flex flex-row justify-start items-center'>
                        <h3 className='font-semibold text-[12px] text-white capitalize'>
                          Audience Location
                        </h3>
                        <FaSearchLocation
                          size={15}
                          color='#FFFFFFB3'
                          className='mx-1'
                        />
                        <Image src='/icons/info.png' width={10} height={10} />
                      </div>
                      <SelectInput
                        items={AudienceLocations}
                        value={audienceLocationFilter}
                        placeholder='Where audience located'
                        onChange={(value) => {
                          dispatch(setAudienceLocationFilter(value));
                        }}
                      />
                    </div>
                    <div className='flex flex-col items-start mt-[10px]'>
                      <div className='flex flex-row justify-start items-center'>
                        <h3 className='font-semibold text-[12px] text-white capitalize'>
                          Tags
                        </h3>
                        <div className='mx-1 text-[#FFFFFFB3] text-[15px] font-bold'>
                          #
                        </div>
                        <Image src='/icons/info.png' width={10} height={10} />
                      </div>
                      <SelectInput
                        items={Tags}
                        value={tagsFilter}
                        placeholder='Choose some keywords'
                        onChange={(value) => {
                          dispatch(setTagsFilter(value));
                        }}
                      />
                    </div>
                  </div>
                  <div className='w-full'>
                    <div
                      className='bg-[#10E98C] py-[7px] px-[46px] text-black text-[14px] float-right hover:cursor-pointer'
                      onClick={() => {}}
                    >
                      Find now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center mt-[65px] mb-[45px] px-[23px] md:px-[80px] w-full'>
        <div className='flex-1 h-[1px] bg-[#10E98C4D]' />
        <div className='hidden md:block'>
          <Image src='/images/splitermark.png' width={65} height={61} />
        </div>
        <div className='md:hidden'>
          <Image src='/images/splitermark.png' width={41} height={41} />
        </div>
        <div className='flex-1 h-[1px] bg-[#10E98C4D]' />
      </div>
      <div className='flex flex-col px-[23px]'>
        <InfluenceList influences={influences} />
      </div>
    </div>
  );
}
