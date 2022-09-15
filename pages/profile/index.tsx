import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import SelectInput from '../../components/pages/profile/SelectInput';
import { RootState } from '../../store';
import { Attributes, Categories, Regions } from '../../constant';
import { Chains, EsBudgets } from './../../constant/index';
import { setBrand } from '../../store/slices/profileSlice';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const _profile = useSelector((store: RootState) => store.brandProfile);
  const [profile, setProfile] = useState<BrandProfile>();

  useEffect(() => {
    setProfile(_profile);
  }, [_profile]);

  return (
    <div className='w-full px-[40px] lg:px-[70px] py-[23px] flex justify-center items-center font-poppins'>
      <div className='w-full max-w-[980px] flex flex-col items-center overflow-hidden'>
        <h1 className='w-full font-semibold text-[32px] leading-[42px] capitalize text-white text-start lg:text-center mb-5'>
          Brand Profile
        </h1>
        <div className='flex flex-col w-full items-center bg-[url("/images/profileback.svg")] bg-cover bg-center'>
          <Image src={profile?.avatar} width={170} height={170} />
          <div className='w-[90%] max-w-[640px] mt-7 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 mb-[18px]'>
            <div className='flex flex-col items-start'>
              <p className='text-[15px] leading-[22px] pl-[5px] text-[#CCCCCC] mb-[10px]'>
                Brand Name
              </p>
              <input
                className='w-full rounded-[3px] border-[0.5px] border-[#CCCCCC80] bg-[#243034] text-[#CCCCCCB3] text-[11px] leading-[16px] py-5 px-4'
                value={profile?.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                placeholder='Type your brand name'
              />
            </div>
            <div className='flex flex-col items-start'>
              <p className='text-[15px] leading-[22px] pl-[5px] text-[#CCCCCC] mb-[10px]'>
                Website
              </p>
              <input
                className='w-full rounded-[3px] border-[0.5px] border-[#CCCCCC80] bg-[#243034] text-[#CCCCCCB3] text-[11px] leading-[16px] py-5 px-4'
                value={profile?.website}
                onChange={(e) =>
                  setProfile({ ...profile, website: e.target.value })
                }
                placeholder='Type your website url'
              />
            </div>
            <div className='flex flex-col items-start lg:col-span-2'>
              <p className='text-[15px] leading-[22px] pl-[5px] text-[#CCCCCC] mb-[10px]'>
                Description
              </p>
              <textarea
                className='w-full rounded-[3px] border-[0.5px] border-[#CCCCCC80] bg-[#243034] text-[#CCCCCCB3] text-[13px] leading-[20px] py-5 px-4 h-[140px]'
                value={profile?.description}
                onChange={(e) =>
                  setProfile({ ...profile, description: e.target.value })
                }
                placeholder='Write a Short Description about your brand'
              />
            </div>
          </div>
          <div className='w-[90%] max-w-[580px] flex flex-col items-start mb-9'>
            <ul className='font-semibold text-[17px] leading-[26px] text-white capitalize list-disc list-inside mb-[25px]'>
              <li>Channels</li>
            </ul>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-[29px] px-[10px]'>
              {profile?.channels.twitter ? (
                <Link href={profile?.channels.twitter}>
                  <div className='border-[0.5px] border-[#CCCCCC80] bg-[#243034] flex flex-row justify-center rounded-[3px] text-white py-3 hover:cursor-pointer'>
                    <FaTwitter size={22} />
                    <h5 className='text-[15px] leading-[22px] font-semibold ml-4'>
                      Twitter
                    </h5>
                  </div>
                </Link>
              ) : (
                <></>
              )}
              {profile?.channels.youtube ? (
                <Link href={profile?.channels.youtube}>
                  <div className='border-[0.5px] border-[#CCCCCC80] bg-[#243034] flex flex-row justify-center rounded-[3px] text-white py-3 hover:cursor-pointer'>
                    <FaYoutube size={22} />
                    <h5 className='text-[15px] leading-[22px] font-semibold ml-4'>
                      Youtube
                    </h5>
                  </div>
                </Link>
              ) : (
                <></>
              )}
              {profile?.channels.discord ? (
                <Link href={profile?.channels.discord}>
                  <div className='border-[0.5px] border-[#CCCCCC80] bg-[#243034] flex flex-row justify-center rounded-[3px] text-white py-3 hover:cursor-pointer'>
                    <FaDiscord size={22} />
                    <h5 className='text-[15px] leading-[22px] font-semibold ml-4'>
                      Discord
                    </h5>
                  </div>
                </Link>
              ) : (
                <></>
              )}
              {profile?.channels.instagram ? (
                <Link href={profile?.channels.instagram}>
                  <div className='border-[0.5px] border-[#CCCCCC80] bg-[#243034] flex flex-row justify-center rounded-[3px] text-white py-3 hover:cursor-pointer'>
                    <FaInstagram size={22} />
                    <h5 className='text-[15px] leading-[22px] font-semibold ml-4'>
                      Instagram
                    </h5>
                  </div>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className='w-[90%] max-w-[580px] flex flex-col items-start mb-[55px]'>
            <ul className='font-semibold text-[17px] leading-[26px] text-white capitalize list-disc list-inside mb-[25px]'>
              <li>Main Telegram channel</li>
            </ul>
            <div className='w-full px-[10px]'>
              <input
                className='w-full rounded-[3px] border-[0.5px] border-[#CCCCCC80] bg-[#243034] text-[#CCCCCCB3] text-[13px] leading-[20px] py-[14px] px-[19px]'
                value={profile?.mainTgChannel}
                onChange={(e) =>
                  setProfile({ ...profile, mainTgChannel: e.target.value })
                }
                placeholder='Enter Channel name or URL'
              />
            </div>
          </div>
          <div className='w-[90%] max-w-[580px] grid grid-cols-1 gap-[10px] mb-[77px]'>
            <div className='w-full flex-col items-start'>
              <h5 className='pl-[7px] text-[16px] leading-[24px] text-[#CCCCCC] mb-[9px]'>
                Category
              </h5>
              <SelectInput
                items={Categories}
                value={profile?.category}
                placeholder='Choose a category'
                onChange={(value) =>
                  setProfile({ ...profile, category: value as Category })
                }
              />
            </div>
            <div className='w-full flex-col items-start'>
              <h5 className='pl-[7px] text-[16px] leading-[24px] text-[#CCCCCC] mb-[9px]'>
                Target Region
              </h5>
              <SelectInput
                items={Regions}
                value={profile?.region}
                placeholder='Choose your target region'
                onChange={(value) =>
                  setProfile({ ...profile, region: value as Region })
                }
              />
            </div>
            <div className='w-full flex-col items-start'>
              <h5 className='pl-[7px] text-[16px] leading-[24px] text-[#CCCCCC] mb-[9px]'>
                Chain
              </h5>
              <SelectInput
                items={Chains}
                value={profile?.chain}
                placeholder='Choose chain'
                onChange={(value) =>
                  setProfile({ ...profile, chain: value as Chain })
                }
              />
            </div>
            <div className='w-full flex-col items-start'>
              <h5 className='pl-[7px] text-[16px] leading-[24px] text-[#CCCCCC] mb-[9px]'>
                Attributes
              </h5>
              <SelectInput
                items={Attributes}
                value={profile?.attribute}
                placeholder='Choose attributes'
                onChange={(value) =>
                  setProfile({ ...profile, attribute: value as Attribute })
                }
              />
            </div>
            <div className='w-full flex-col items-start'>
              <h5 className='pl-[7px] text-[16px] leading-[24px] text-[#CCCCCC] mb-[9px]'>
                Estimate Compaign budget
              </h5>
              <SelectInput
                items={EsBudgets}
                value={profile?.esBudget}
                placeholder='Determine your budget'
                onChange={(value) =>
                  setProfile({ ...profile, esBudget: value as ExBudget })
                }
              />
            </div>
          </div>
          <div className='w-[90%] max-w-[580px] grid grid-cols-1 gap-[34px] mb-[48px]'>
            {profile?.launchSettings.map((setting) => (
              <div
                key={setting.name}
                className='flex flex-row justify-between items-center flex-wrap lg:flex-nowrap'
              >
                <div
                  className='flex justify-center items-center w-[15px] h-[15px] rounded-[1px] border-2 border-[#10E98C] mr-[35px] lg:mx-[35px] hover:cursor-pointer mb-[10px] lg:mb-0'
                  onClick={() =>
                    setProfile({
                      ...profile,
                      launchSettings: profile.launchSettings.map((item) =>
                        item.name == setting.name
                          ? { ...setting, setted: !setting.setted }
                          : item
                      ),
                    })
                  }
                >
                  {setting.setted ? (
                    <div className='w-[7px] h-[7px] rounded-full bg-white' />
                  ) : (
                    <></>
                  )}
                </div>
                <h3 className='font-medium text-[20px] leading-[30px] text-white flex-1 mb-[10px] lg:mb-0'>
                  {setting.name}
                </h3>
                <input
                  className='rounded-[3px] border-[0.5px] border-[#CCCCCC80] bg-[#243034] text-[#CCCCCCB3] text-[12px] leading-[18px] py-[9px] px-[19px] w-full lg:w-auto'
                  value={setting.value}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      launchSettings: profile.launchSettings.map((item) =>
                        item.name == setting.name
                          ? { ...setting, value: e.target.value }
                          : item
                      ),
                    })
                  }
                  placeholder={setting.placeholder}
                />
              </div>
            ))}
          </div>
          <div className='w-[90%] max-w-[450px] flex flex-col items-center mb-[68px]'>
            <h3 className='font-semibold text-[22px] leading-[33px] text-white mb-[38px]'>
              For Great Partners I can offer :
            </h3>
            <div className='grid w-full grid-cols-1 gap-[28px]'>
              <div className='flex flex-row w-full justify-between items-center'>
                <div
                  className='flex justify-center items-center w-[15px] h-[15px] rounded-[1px] border-2 border-[#10E98C] mr-[35px] lg:mx-[35px] hover:cursor-pointer'
                  onClick={() =>
                    setProfile({
                      ...profile,
                      isWL: !profile.isWL,
                    })
                  }
                >
                  {profile?.isWL ? (
                    <div className='w-[7px] h-[7px] rounded-full bg-white' />
                  ) : (
                    <></>
                  )}
                </div>
                <h5 className='flex-1 text-[16px] leading-[24px] text-white'>
                  WL Spots For Strategic Partners / Influencers
                </h5>
              </div>
              <div className='flex flex-row w-full justify-between items-center'>
                <div
                  className='flex justify-center items-center w-[15px] h-[15px] rounded-[1px] border-2 border-[#10E98C] mr-[35px] lg:mx-[35px] hover:cursor-pointer'
                  onClick={() =>
                    setProfile({
                      ...profile,
                      isAirdrop: !profile.isAirdrop,
                    })
                  }
                >
                  {profile?.isAirdrop ? (
                    <div className='w-[7px] h-[7px] rounded-full bg-white' />
                  ) : (
                    <></>
                  )}
                </div>
                <h5 className='flex-1 text-[16px] leading-[24px] text-white'>
                  Airdrops For Strategic Partners / Influencers
                </h5>
              </div>
              <div className='flex flex-row w-full justify-between items-center'>
                <div
                  className='flex justify-center items-center w-[15px] h-[15px] rounded-[1px] border-2 border-[#10E98C] mr-[35px] lg:mx-[35px] hover:cursor-pointer'
                  onClick={() =>
                    setProfile({
                      ...profile,
                      isPremint: !profile.isPremint,
                    })
                  }
                >
                  {profile?.isPremint ? (
                    <div className='w-[7px] h-[7px] rounded-full bg-white' />
                  ) : (
                    <></>
                  )}
                </div>
                <h5 className='flex-1 text-[16px] leading-[24px] text-white'>
                  Premint NFTs For Strategic partners / Imfluencers
                </h5>
              </div>
            </div>
          </div>
          <div className='w-[90%] max-w-[368px] grid grid-cols-1 gap-[30px] mb-[29px]'>
            <div
              className='w-full text-center bg-[#10E98C] py-[12px] text-[#243034] text-[22px] leading-[33px] font-medium hover:cursor-pointer'
              onClick={() => dispatch(setBrand(profile))}
            >
              Save
            </div>
            <div className='w-full text-center border border-[#10E98C] py-[12px] text-white text-[22px] leading-[33px] font-medium hover:cursor-pointer'>
              List your Brand
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
