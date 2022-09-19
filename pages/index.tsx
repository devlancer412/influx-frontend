import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { MdOutlinePriceCheck } from 'react-icons/md';
import { FaHeartbeat, FaSearchLocation } from 'react-icons/fa';
import { BsGlobe2, BsPeopleFill, BsFillPersonFill } from 'react-icons/bs';
import Select from 'react-select';

import SocialSelect from '../components/pages/home/SocialSelect';
import {
  Engagements,
  Languages,
  AudienceSizes,
  Tags,
  AudienceLocations,
  initSocialFilters,
} from '../constant';
import RangeSelect from '../components/pages/home/RangeSelect';
import InfluenceList from '../components/pages/home/InfluenceList';
import { desktopSelectStyle, mobileSelectStyle } from './../constant';

const initialInfluences: Influence[] = [
  {
    id: 0,
    campaignId: 0,
    name: 'Alice',
    nickName: 'Influence',
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
    id: 1,
    campaignId: 0,
    name: 'Bob',
    nickName: 'Influence',
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
    id: 2,
    campaignId: 0,
    name: 'Vault',
    nickName: 'Influence',
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
    id: 3,
    campaignId: 0,
    name: 'Alice',
    nickName: 'Influence',
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
    id: 4,
    campaignId: 0,
    name: 'Bob',
    nickName: 'Influence',
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
    id: 5,
    campaignId: 0,
    name: 'Vault',
    nickName: 'Influence',
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
    id: 6,
    campaignId: 0,
    name: 'Alice',
    nickName: 'Influence',
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
    id: 7,
    campaignId: 0,
    name: 'Bob',
    nickName: 'Influence',
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
    id: 8,
    campaignId: 0,
    name: 'Vault',
    nickName: 'Influence',
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
    id: 9,
    campaignId: 0,
    name: 'Alice',
    nickName: 'Influence',
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
    id: 10,
    campaignId: 0,
    name: 'Bob',
    nickName: 'Influence',
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
    id: 11,
    campaignId: 0,
    name: 'Vault',
    nickName: 'Influence',
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

interface FilterProps {
  socialFilters: SocialFilterProps[];
  priceFilter: PriceFilter;
  engagementFilter: EngagementFilter;
  languageFilter: LanguageFilter;
  audienceSizeFilter: AudienceSizeFilter;
  userNameFilter: string;
  audienceLocationFilter: AudienceLocationFilter;
  tagsFilter: TagsFilter[];
}

interface Props {
  filterProps: FilterProps;
  influences: Influence[];
  users: User[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    top,
    bottom,
    engagement,
    language,
    audienceSize,
    userName,
    audienceLocation,
    tags,
  } = context.query;

  let props: Props = {
    filterProps: {
      socialFilters: [],
      priceFilter: {
        top: parseInt(top as string) || 10000,
        bottom: parseInt(bottom as string) || 0,
      },
      engagementFilter: (engagement as string) || Engagements[0],
      languageFilter: (language as string) || Languages[0],
      audienceSizeFilter: (audienceSize as string) || AudienceSizes[0],
      userNameFilter: (userName as string) || '',
      audienceLocationFilter:
        (audienceLocation as string) || AudienceLocations[0],
      tagsFilter: [],
    },
    influences: initialInfluences,
    users: [],
  };

  props.filterProps.socialFilters = initSocialFilters.map((filter) =>
    context.query[filter.title] === 'true'
      ? { ...filter, selected: true }
      : filter
  );

  if (typeof tags === 'string') {
    props.filterProps.tagsFilter = [tags];
  } else if (typeof tags === 'object') {
    props.filterProps.tagsFilter = tags as string[];
  }

  return { props };
};

export default function Home({ filterProps, influences, users }: Props) {
  const router = useRouter();

  const [socialFilters, setSocialFilter] = useState<SocialFilterProps[]>(
    filterProps.socialFilters
  );
  const [priceFilter, setPriceFilter] = useState<PriceFilter>(
    filterProps.priceFilter
  );
  const [engagementFilter, setEngagementFilter] = useState<EngagementFilter>(
    filterProps.engagementFilter
  );
  const [languageFilter, setLanguageFilter] = useState<LanguageFilter>(
    filterProps.languageFilter
  );
  const [audienceSizeFilter, setAudienceSizeFilter] =
    useState<AudienceSizeFilter>(filterProps.audienceSizeFilter);
  const [userNameFilter, setUserNameFilter] = useState<string>(
    filterProps.userNameFilter
  );
  const [audienceLocationFilter, setAudienceLocationFilter] =
    useState<AudienceLocationFilter>(filterProps.audienceLocationFilter);
  const [tagsFilter, setTagsFilter] = useState<TagsFilter>(
    filterProps.tagsFilter
  );

  const updateUrl = () => {
    let url = `/?top=${priceFilter.top}&bottom=${priceFilter.bottom}&engagement=${engagementFilter}&language=${languageFilter}&audienceSize=${audienceSizeFilter}&userName=${userNameFilter}&audienceLocation=${audienceLocationFilter}`;

    for (const socialFilter of socialFilters) {
      url += `&${socialFilter.title}=${socialFilter.selected}`;
    }

    tagsFilter.forEach((tag) => (url += `&tags=${tag}`));
    router.push(url);
  };

  useEffect(() => {
    updateUrl();
  }, [
    socialFilters,
    priceFilter,
    engagementFilter,
    languageFilter,
    audienceSizeFilter,
    audienceLocationFilter,
    userNameFilter,
    tagsFilter,
  ]);

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
                <p className='mb-[9px] text-white font-bold text-[12px] leading-[18px]'>
                  Platform
                </p>
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
                      <div className='flex-1 text-start lg:text-center text-white text-[16px] pl-10 lg:px-0 capitalize'>
                        {filter.title}
                      </div>
                      <SocialSelect
                        selected={filter.selected}
                        onToggle={(value: boolean) =>
                          setSocialFilter(
                            socialFilters.map((item) =>
                              item.title !== filter.title
                                ? item
                                : { ...filter, selected: value }
                            )
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <p className='w-fpl text-white font-bold text-[12px] leading-[18px]'>
                    Price Range For promo
                  </p>
                  <MdOutlinePriceCheck
                    size={15}
                    color='#FFFFFFB3'
                    className='mx-1'
                  />
                </div>
                <RangeSelect
                  value0={priceFilter.bottom}
                  value1={priceFilter.top}
                  top={10000}
                  onChange={(top, bottom) => {
                    setPriceFilter({ top, bottom });
                  }}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <p className='w-full text-white font-bold text-[12px] leading-[18px]'>
                    Engagement Rate
                  </p>
                  <FaHeartbeat size={15} color='#FFFFFFB3' className='mx-1' />
                </div>
                <Select
                  styles={mobileSelectStyle}
                  options={Engagements.map((item) => {
                    return { value: item, label: item };
                  })}
                  value={{
                    value: engagementFilter,
                    label: engagementFilter,
                  }}
                  onChange={(item: any) => {
                    setEngagementFilter(item.value);
                  }}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <p className='w-full text-white font-bold text-[12px] leading-[18px]'>
                    Language
                  </p>
                  <BsGlobe2 size={15} color='#FFFFFFB3' className='mx-1' />
                </div>
                <Select
                  styles={mobileSelectStyle}
                  options={Languages.map((item) => {
                    return { value: item, label: item };
                  })}
                  value={{
                    value: languageFilter,
                    label: languageFilter,
                  }}
                  onChange={(item: any) => {
                    setLanguageFilter(item.value);
                  }}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <p className='w-full text-white font-bold text-[12px] leading-[18px]'>
                    Audience Size
                  </p>
                  <BsPeopleFill size={15} color='#FFFFFFB3' className='mx-1' />
                </div>
                <Select
                  styles={mobileSelectStyle}
                  options={AudienceSizes.map((item) => {
                    return { value: item, label: item };
                  })}
                  value={{
                    value: audienceSizeFilter,
                    label: audienceSizeFilter,
                  }}
                  onChange={(item: any) => {
                    setAudienceSizeFilter(item.value);
                  }}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <p className='w-full text-white font-bold text-[12px] leading-[18px]'>
                    Audience Location
                  </p>
                  <FaSearchLocation
                    size={15}
                    color='#FFFFFFB3'
                    className='mx-1'
                  />
                </div>
                <Select
                  styles={mobileSelectStyle}
                  placeholder='Where Audiece located'
                  options={AudienceLocations.map((item) => {
                    return { value: item, label: item };
                  })}
                  value={{
                    value: audienceLocationFilter,
                    label: audienceLocationFilter,
                  }}
                  onChange={(item: any) => {
                    setAudienceLocationFilter(item.value);
                  }}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <p className='w-full text-white font-bold text-[12px] leading-[18px]'>
                    User Name
                  </p>
                  <BsFillPersonFill
                    size={15}
                    color='#FFFFFFB3'
                    className='mx-1'
                  />
                </div>
                <Select
                  styles={mobileSelectStyle}
                  placeholder='Search by user name'
                  options={users.map((item) => {
                    return { value: item.name, label: item.name };
                  })}
                  value={{
                    value: userNameFilter,
                    label: userNameFilter,
                  }}
                  onChange={(item: any) => {
                    setUserNameFilter(item.value);
                  }}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <p className='w-full text-white font-bold text-[12px] leading-[18px]'>
                    Tags
                  </p>
                  <div className='mx-1 text-[#FFFFFFB3] text-[15px] font-bold'>
                    #
                  </div>
                </div>
                <Select
                  styles={desktopSelectStyle}
                  placeholder='Choose some key words'
                  options={Tags.map((item) => {
                    return { value: item, label: item };
                  })}
                  value={tagsFilter.map((item) => {
                    return { value: item, label: item };
                  })}
                  isMulti
                  onChange={(item: any) => {
                    setTagsFilter(item.map((subitem) => subitem.value));
                  }}
                />
              </div>
            </div>
            <div
              className='w-[280px] max-w-full rounded-[5px] bg-[#10E98C] py-[7px] text-center text-[14px] leading-[21px] text-black hover:cursor-pointer'
              onClick={updateUrl}
            >
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
                  <div className='flex-1 text-center text-white text-[16px] capitalize'>
                    {filter.title}
                  </div>
                  <SocialSelect
                    selected={filter.selected}
                    onToggle={(value: boolean) =>
                      setSocialFilter(
                        socialFilters.map((item) =>
                          item.title !== filter.title
                            ? item
                            : { ...filter, selected: value }
                        )
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
                        setPriceFilter({ top, bottom });
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
                    <Select
                      styles={desktopSelectStyle}
                      options={Engagements.map((item) => {
                        return { value: item, label: item };
                      })}
                      value={{
                        value: engagementFilter,
                        label: engagementFilter,
                      }}
                      onChange={(item: any) => {
                        setEngagementFilter(item.value);
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
                    <Select
                      styles={desktopSelectStyle}
                      options={Languages.map((item) => {
                        return { value: item, label: item };
                      })}
                      value={{
                        value: languageFilter,
                        label: languageFilter,
                      }}
                      onChange={(item: any) => {
                        setLanguageFilter(item.value);
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
                    <Select
                      styles={desktopSelectStyle}
                      options={AudienceSizes.map((item) => {
                        return { value: item, label: item };
                      })}
                      value={{
                        value: audienceSizeFilter,
                        label: audienceSizeFilter,
                      }}
                      onChange={(item: any) => {
                        setAudienceSizeFilter(item.value);
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
                      <Select
                        styles={desktopSelectStyle}
                        placeholder='Search by user name'
                        options={users.map((item) => {
                          return { value: item.name, label: item.name };
                        })}
                        value={{
                          value: userNameFilter,
                          label: userNameFilter,
                        }}
                        onChange={(item: any) => {
                          setUserNameFilter(item.value);
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
                      <Select
                        styles={desktopSelectStyle}
                        placeholder='Where Audiece located'
                        options={AudienceLocations.map((item) => {
                          return { value: item, label: item };
                        })}
                        value={{
                          value: audienceLocationFilter,
                          label: audienceLocationFilter,
                        }}
                        onChange={(item: any) => {
                          setAudienceLocationFilter(item.value);
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
                      <Select
                        styles={desktopSelectStyle}
                        placeholder='Choose some key words'
                        options={Tags.map((item) => {
                          return { value: item, label: item };
                        })}
                        value={tagsFilter.map((item) => {
                          return { value: item, label: item };
                        })}
                        isMulti
                        onChange={(item: any) => {
                          setTagsFilter(item.map((subitem) => subitem.value));
                        }}
                      />
                    </div>
                  </div>
                  <div className='w-full'>
                    <div
                      className='bg-[#10E98C] py-[7px] px-[46px] text-black text-[14px] float-right hover:cursor-pointer'
                      onClick={updateUrl}
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
