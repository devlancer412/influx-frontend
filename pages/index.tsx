import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { MdOutlinePriceCheck } from 'react-icons/md';
import { FaHeartbeat, FaSearchLocation, FaSort } from 'react-icons/fa';
import { BsGlobe2, BsPeopleFill, BsFillPersonFill } from 'react-icons/bs';
import Select from 'react-select';

import SocialSelect from '../components/pages/home/SocialSelect';
import {
  Engagements,
  Languages,
  AudienceSizes,
  Niches,
  AudienceLocations,
  initSocialFilters,
  Sorters,
} from '../constant';
import RangeSelect from '../components/pages/home/RangeSelect';
import InfluenceList from '../components/pages/home/InfluenceList';
import { desktopSelectStyle, mobileSelectStyle } from './../constant';
import client from '../services/HttpClient';

interface FilterProps {
  socialFilters: SocialFilterProps[];
  priceFilter: PriceFilter;
  engagementFilter: EngagementFilter;
  languageFilter: LanguageFilter;
  audienceSizeFilter: AudienceSizeFilter;
  userNameFilter: string;
  audienceLocationFilter: AudienceLocationFilter;
  nichesFilter: NicheFilter[];
  sort: SortFilter;
}

interface Props {
  filterProps: FilterProps;
  influences: Influence[];
  users: string[];
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
    niches,
    sort,
  } = context.query;

  let props: Props = {
    filterProps: {
      socialFilters: [],
      priceFilter: {
        top: parseInt(top as string) || 50000,
        bottom: parseInt(bottom as string) || 0,
      },
      engagementFilter: (engagement as string) || Engagements[0],
      languageFilter: (language as string) || Languages[0],
      audienceSizeFilter: (audienceSize as string) || AudienceSizes[0],
      userNameFilter: (userName as string) || '',
      audienceLocationFilter:
        (audienceLocation as string) || AudienceLocations[0],
      nichesFilter: [],
      sort: (sort as SortFilter) || Sorters[0],
    },
    influences: [],
    users: [],
  };

  props.filterProps.socialFilters = initSocialFilters.map((filter) =>
    context.query[filter.title] === 'true'
      ? { ...filter, selected: true }
      : filter
  );

  if (typeof niches === 'string') {
    props.filterProps.nichesFilter = [niches];
  } else if (typeof niches === 'object') {
    props.filterProps.nichesFilter = niches as string[];
  }

  let url = `/influencers?minPrice=${props.filterProps.priceFilter.bottom}&maxPrice=${props.filterProps.priceFilter.top}`;

  if (props.filterProps.languageFilter != 'None') {
    url += `&language=${props.filterProps.languageFilter}`;
  }
  if (props.filterProps.engagementFilter != 'None') {
    url += `&ER=${props.filterProps.engagementFilter}`;
  }
  if (props.filterProps.nichesFilter.length) {
    url += `&tags=${props.filterProps.nichesFilter.join(',')}`;
  }
  if (props.filterProps.userNameFilter != '') {
    url += `&userName=${props.filterProps.userNameFilter}`;
  }
  if (props.filterProps.audienceSizeFilter != 'All audience sizes') {
    let sizes = props.filterProps.audienceSizeFilter.split(' - ');
    if (sizes.length == 2 && sizes[0] && sizes[1]) {
      url += `&minAudienceSize=${sizes[0].replace(
        /,/g,
        ''
      )}&maxAudienceSize=${sizes[1].replace(/,/g, '')}`;
    } else {
      sizes = props.filterProps.audienceSizeFilter.split('+');
      if (sizes.length == 1 && sizes[0]) {
        url += `&minAudienceSize=${sizes[0].replace(/,/g, '').trim()}`;
      }
    }
  }
  if (props.filterProps.audienceLocationFilter != '') {
    url += `&location=${props.filterProps.audienceLocationFilter}`;
  }

  const response = await client.get(url);
  console.log(response.data);
  if (response.success) {
    props.influences = response.data.map((data) => {
      let followers =
        data?.account?.instagram?.followers > data?.account?.twitter?.followers
          ? data?.account?.instagram?.followers
          : data?.account?.twitter?.followers;

      followers =
        followers > data?.account?.tiktok?.followers
          ? followers
          : data?.account?.tiktok?.followers;

      return {
        id: data?.id,
        accountId: data?.account?.id,
        name: data?.account?.name,
        nickName: data?.account?.name,
        imageUrl: data?.account?.logo,
        mainChannel: data?.mainChannel ?? 'twitter',
        instagram: data?.account?.instagram,
        youtube: data?.account?.youtube,
        telegram: data?.account?.telegram,
        twitter: data?.account?.twitter,
        tiktok: data?.account?.tiktok,
        followers: followers,
        engagement: data?.engagementRate,
        language: data?.account?.language,
        topPrice: data?.priceRange[1],
        bottomPrice: data?.priceRange[0],
        isVIP: data?.isVIP,
        niches: data?.niche || [],
      };
    });
  }

  return { props };
};

export default function Home({ filterProps, influences, users }: Props) {
  const router = useRouter();

  const [timerId, setTimerId] = useState<NodeJS.Timeout>(null);

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
  const [nichesFilter, setNichesFilter] = useState<NicheFilter>(
    filterProps.nichesFilter
  );
  const [sortFilter, setSortFilter] = useState<SortFilter>(filterProps.sort);
  const [vipFilter, setVipFilter] = useState<boolean>(false);

  const updateUrl = () => {
    let url = `/?top=${priceFilter.top}&bottom=${priceFilter.bottom}&engagement=${engagementFilter}&language=${languageFilter}&audienceSize=${audienceSizeFilter}&userName=${userNameFilter}&audienceLocation=${audienceLocationFilter}&sort=${sortFilter}`;

    for (const socialFilter of socialFilters) {
      url += `&${socialFilter.title}=${socialFilter.selected}`;
    }

    nichesFilter.forEach((tag) => (url += `&niches=${tag}`));
    router.push(url);
  };

  useEffect(() => {
    if (timerId) {
      clearTimeout(timerId);
    }
    const timeout = setTimeout(() => {
      updateUrl();
    }, 500);
    setTimerId(timeout);
  }, [
    socialFilters,
    priceFilter,
    engagementFilter,
    languageFilter,
    audienceSizeFilter,
    audienceLocationFilter,
    userNameFilter,
    nichesFilter,
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
                  <p className='w-full text-white font-bold text-[12px] leading-[18px]'>
                    Niche
                  </p>
                  <div className='mx-1 text-[#FFFFFFB3] text-[15px] font-bold'>
                    #
                  </div>
                </div>
                <Select
                  styles={desktopSelectStyle}
                  placeholder='Choose some key words'
                  options={Niches.map((item) => {
                    return { value: item, label: item };
                  })}
                  value={nichesFilter.map((item) => {
                    return { value: item, label: item };
                  })}
                  isMulti
                  onChange={(item: any) => {
                    setNichesFilter(item.map((subitem) => subitem.value));
                  }}
                />
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
                  top={50000}
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
                    return { value: item, label: item };
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
              {/* <div className='w-full flex flex-col items-start'>
                <div className='flex flex-row justify-start items-center mb-[9px]'>
                  <p className='w-full text-white font-bold text-[12px] leading-[18px]'>
                    Sort
                  </p>
                  <FaSearchLocation
                    size={15}
                    color='#FFFFFFB3'
                    className='mx-1'
                  />
                </div>
                <Select
                  styles={mobileSelectStyle}
                  options={Sorters.map((item) => {
                    return { value: item, label: item };
                  })}
                  value={{ value: sortFilter, label: sortFilter }}
                  onChange={(item: any) => {
                    setSortFilter(item.value);
                  }}
                />
              </div> */}
            </div>
            <div
              className='w-[280px] max-w-full rounded-[5px] bg-[#10E98C] py-[7px] text-center text-[14px] leading-[21px] text-black hover:cursor-pointer hover:bg-[#11C176] transition-all'
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
                      <div className='mx-1 text-[#FFFFFFB3] text-[15px] font-bold'>
                        #
                      </div>
                      <h3 className='font-semibold text-[12px] text-white capitalize mx-1'>
                        Niche
                      </h3>
                      <Image src='/icons/info.png' width={10} height={10} />
                    </div>
                    <Select
                      styles={desktopSelectStyle}
                      placeholder='Choose some key words'
                      options={Niches.map((item) => {
                        return { value: item, label: item };
                      })}
                      value={nichesFilter.map((item) => {
                        return { value: item, label: item };
                      })}
                      isMulti
                      onChange={(item: any) => {
                        setNichesFilter(item.map((subitem) => subitem.value));
                      }}
                    />
                  </div>
                  <div className='flex flex-col items-start mt-[10px]'>
                    <div className='flex flex-row justify-start items-center'>
                      <MdOutlinePriceCheck
                        size={15}
                        color='#FFFFFFB3'
                        className='mx-1'
                      />
                      <h3 className='font-semibold text-[12px] text-white capitalize mx-1'>
                        Price Range for promo
                      </h3>
                      <Image src='/icons/info.png' width={10} height={10} />
                    </div>
                    <RangeSelect
                      value0={priceFilter.bottom}
                      value1={priceFilter.top}
                      top={50000}
                      onChange={(top, bottom) => {
                        setPriceFilter({ top, bottom });
                      }}
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <div className='flex flex-row justify-start items-center'>
                      <FaHeartbeat
                        size={15}
                        color='#FFFFFFB3'
                        className='mx-1'
                      />
                      <h3 className='font-semibold text-[12px] text-white capitalize mx-1'>
                        Engagement Rate
                      </h3>
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
                      <BsGlobe2 size={15} color='#FFFFFFB3' className='mx-1' />
                      <h3 className='font-semibold text-[12px] text-white capitalize mx-1'>
                        Language
                      </h3>
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
                </div>
                <div className='w-[50%] flex flex-col justify-between'>
                  <div className='flex flex-col w-[70%] justify-around'>
                    <div className='flex flex-col items-start'>
                      <div className='flex flex-row justify-start items-center'>
                        <BsPeopleFill
                          size={15}
                          color='#FFFFFFB3'
                          className='mx-1'
                        />
                        <h3 className='font-semibold text-[12px] text-white capitalize mx-1'>
                          Audience Size
                        </h3>
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
                    <div className='flex flex-col items-start mt-[10px]'>
                      <div className='flex flex-row justify-start items-center'>
                        <BsFillPersonFill
                          size={15}
                          color='#FFFFFFB3'
                          className='mx-1'
                        />
                        <h3 className='font-semibold text-[12px] text-white capitalize mx-1'>
                          By User Name
                        </h3>
                        <Image src='/icons/info.png' width={10} height={10} />
                      </div>
                      <Select
                        styles={desktopSelectStyle}
                        placeholder='Search by user name'
                        options={users.map((item) => {
                          return { value: item, label: item };
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
                        <FaSearchLocation
                          size={15}
                          color='#FFFFFFB3'
                          className='mx-1'
                        />
                        <h3 className='font-semibold text-[12px] text-white capitalize mx-1'>
                          Audience Location
                        </h3>
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
                      <div
                        className='flex flex-row justify-start items-center hover:cursor-pointer'
                        onClick={() => setVipFilter(!vipFilter)}
                      >
                        <div className='w-[12px] h-[12px] flex justify-center items-center border-2 border-[#10E98C] mx-1'>
                          {vipFilter ? (
                            <div className='w-1 h-1 bg-[#10E98C]' />
                          ) : (
                            <></>
                          )}
                        </div>
                        <h3 className='font-semibold text-[12px] text-white capitalize mx-1'>
                          Only show VIP
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className='w-full mt-4'>
                    <div
                      className='bg-[#10E98C] py-[7px] px-[46px] text-black text-[14px] float-right hover:cursor-pointer hover:bg-[#11C176] transition-all'
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
        <InfluenceList
          influences={
            vipFilter
              ? influences.filter((influence) => influence.isVIP)
              : influences
          }
          sortFilter={sortFilter}
          setSortFilter={setSortFilter}
        />
      </div>
    </div>
  );
}
