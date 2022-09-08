import Image from 'next/image';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SocialSelect from '../components/pages/home/SocialSelect';
import { RootState } from '../store/index';
import {
  Engagements,
  Languages,
  AudienceSizes,
  setEngagementFilter,
  setLanguageFilter,
  setPriceFilter,
  setSocialFilter,
  setAudienceSizeFilter,
  setUserNameFilter,
  setAudienceLocationFilter,
  Tags,
  setTagsFilter,
} from '../store/slices/filterSlice';
import { MdOutlinePriceCheck } from 'react-icons/md';
import { FaHeartbeat, FaSearchLocation } from 'react-icons/fa';
import { BsGlobe2, BsPeopleFill, BsFillPersonFill } from 'react-icons/bs';
import RangeSelect from '../components/pages/home/RangeSelect';
import SelectInput from '../components/pages/home/SelectInput';
import { AudienceLocations } from './../store/slices/filterSlice';
import InfluenceList from '../components/pages/home/InfluenceList';

const testInput = [
  {
    name: 'Alice',
    imageUrl: '/img/user_1.png',
    youtube: 'https://fakeurl/',
    telegram: 'https://fakeurl/',
    twitter: 'https://fakeurl/',
    followers: 22,
    er: 'Good',
    topPrice: 5000,
    bottomPrice: 1000,
    premium: false,
  },
  {
    name: 'Alice',
    imageUrl: '/img/user_2.png',
    youtube: 'https://fakeurl/',
    telegram: 'https://fakeurl/',
    twitter: 'https://fakeurl/',
    followers: 22,
    er: 'Good',
    topPrice: 5000,
    bottomPrice: 1000,
    premium: true,
  },
  {
    name: 'Alice',
    imageUrl: '/img/user_3.png',
    youtube: 'https://fakeurl/',
    telegram: 'https://fakeurl/',
    twitter: 'https://fakeurl/',
    followers: 22,
    er: 'Good',
    topPrice: 5000,
    bottomPrice: 1000,
    premium: false,
  },
  {
    name: 'Alice',
    imageUrl: '/img/user_4.png',
    youtube: 'https://fakeurl/',
    telegram: 'https://fakeurl/',
    twitter: 'https://fakeurl/',
    followers: 22,
    er: 'Good',
    topPrice: 5000,
    bottomPrice: 1000,
    premium: false,
  },
  {
    name: 'Alice',
    imageUrl: '/img/user_5.png',
    youtube: 'https://fakeurl/',
    telegram: 'https://fakeurl/',
    twitter: 'https://fakeurl/',
    followers: 22,
    er: 'Good',
    topPrice: 5000,
    bottomPrice: 1000,
    premium: false,
  },
  {
    name: 'Alice',
    imageUrl: '/img/user_1.png',
    youtube: 'https://fakeurl/',
    telegram: 'https://fakeurl/',
    twitter: 'https://fakeurl/',
    followers: 22,
    er: 'Good',
    topPrice: 5000,
    bottomPrice: 1000,
    premium: false,
  },
  {
    name: 'Alice',
    imageUrl: '/img/user_1.png',
    youtube: 'https://fakeurl/',
    telegram: 'https://fakeurl/',
    twitter: 'https://fakeurl/',
    followers: 22,
    er: 'Good',
    topPrice: 5000,
    bottomPrice: 1000,
    premium: false,
  },
  {
    name: 'Alice',
    imageUrl: '/img/user_2.png',
    youtube: 'https://fakeurl/',
    telegram: 'https://fakeurl/',
    twitter: 'https://fakeurl/',
    followers: 22,
    er: 'Good',
    topPrice: 5000,
    bottomPrice: 1000,
    premium: true,
  },
  {
    name: 'Alice',
    imageUrl: '/img/user_3.png',
    youtube: 'https://fakeurl/',
    telegram: 'https://fakeurl/',
    twitter: 'https://fakeurl/',
    followers: 22,
    er: 'Good',
    topPrice: 5000,
    bottomPrice: 1000,
    premium: false,
  },
  {
    name: 'Alice',
    imageUrl: '/img/user_4.png',
    youtube: 'https://fakeurl/',
    telegram: 'https://fakeurl/',
    twitter: 'https://fakeurl/',
    followers: 22,
    er: 'Good',
    topPrice: 5000,
    bottomPrice: 1000,
    premium: false,
  },
  {
    name: 'Alice',
    imageUrl: '/img/user_5.png',
    youtube: 'https://fakeurl/',
    telegram: 'https://fakeurl/',
    twitter: 'https://fakeurl/',
    followers: 22,
    er: 'Good',
    topPrice: 5000,
    bottomPrice: 1000,
    premium: false,
  },
  {
    name: 'Alice',
    imageUrl: '/img/user_1.png',
    youtube: 'https://fakeurl/',
    telegram: 'https://fakeurl/',
    twitter: 'https://fakeurl/',
    followers: 22,
    er: 'Good',
    topPrice: 5000,
    bottomPrice: 1000,
    premium: false,
  },
];

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
  const users = useSelector((store: RootState) => store.users);
  const [influences, setInfluences] = useState<any[]>(testInput);

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
            <div className='relative w-[70%] bg-[#243034] rounded-[10px] p-4 pl-[43px] pt-[30px] grid grid-cols-1 gap-y-10 shadow-[0_4px_4px_0px_#24303440]'>
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
                      top={priceFilter.top}
                      bottom={priceFilter.bottom}
                      maxTop={10000}
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
      <div className='flex flex-row items-center mt-[65px] mb-[45px] px-[80px] w-full'>
        <div className='flex-1 h-[1px] bg-[#10E98C4D]' />
        <Image src='/images/splitermark.png' width={65} height={61} />
        <div className='flex-1 h-[1px] bg-[#10E98C4D]' />
      </div>
      <div className='flex flex-col px-[23px]'>
        <InfluenceList influences={influences} />
      </div>
    </div>
  );
}
