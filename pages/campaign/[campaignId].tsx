import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { RootState } from '../../store';
import CampaignInfluenceCard from '../../components/pages/campaign/CampaignInfluenceCard';

const subMenus = ['Actions', 'Change status', 'Template'] as const;
type SubMenu = typeof subMenus[number];

const CampaignProfile: React.FC = () => {
  const router = useRouter();
  const { campaignId } = router.query;

  const [current, setCurrent] = useState<SubMenu>('Actions');

  const influences = useSelector((store: RootState) => store.influences).filter(
    (influence) => influence.campaignId === parseInt(campaignId as string)
  );
  const campaign = useSelector((store: RootState) => store.campaigns).filter(
    (item) => item.id === parseInt(campaignId as string)
  )[0];

  return (
    <div className='py-[68px] flex flex-col font-poppins'>
      <div className='w-full flex justify-center items-center px-[110px]'>
        <div className='flex flex-row w-full items-stretch bg-[#243034]'>
          <div className='w-4 rounded-r-[5px] bg-[#10E98CD9]' />
          <div className='flex-1 flex flex-col'>
            <div className='py-[27px] px-[94px] flex flex-row'>
              <h1 className='font-bold text-[32px] text-white mr-[20px]'>
                {campaign?.name}
              </h1>
              <Image src='/icons/campaignwhite.svg' width={30} height={30} />
            </div>
            <div className='w-full flex flex-row justify-center items-center pb-[22px]'>
              <div className='flex flex-col w-[220px]'>
                <h5 className='w-full pb-[25px] border-b border-[#FFFFFFCC] text-[16px] leading-[24px] text-center text-[#FFFFFFCC]'>
                  Avarage ER
                </h5>
                <h3 className='w-full pb-[25px] font-bold text-[24px] leading-[36px] text-center text-[#10E98C] py-[18px]'>
                  {campaign?.averageEngagementRate}
                </h3>
              </div>
              <div className='flex flex-col w-[220px]'>
                <h5 className='w-full pb-[25px] border-b border-[#FFFFFFCC] text-[16px] leading-[24px] text-center text-[#FFFFFFCC]'>
                  Negociated Budget
                </h5>
                <h3 className='w-full pb-[25px] font-bold text-[24px] leading-[36px] text-center text-[#10E98C] py-[18px]'>
                  ${campaign?.budget}K
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col py-[35px] px-[68px]'>
        <div className='w-full py-[64px] px-[22px]'>
          <div className='w-full bg-[#243034] border border-[#CCCCCC80] py-3 flex flex-row justify-center items-center'>
            {subMenus.map((menu: SubMenu) => (
              <h3
                className={`text-[16px] leading-[24px] border-b mx-[50px] px-[10px] hover:cursor-pointer ${
                  menu === current
                    ? 'text-[#10E98C] border-[#10E98C]'
                    : 'text-white border-transparent'
                }`}
                key={menu}
                onClick={() => setCurrent(menu)}
              >
                {menu}
              </h3>
            ))}
          </div>
        </div>
        <div className='w-full grid grid-cols-1 gap-16'>
          {influences.map((influence) => (
            <CampaignInfluenceCard influence={influence} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignProfile;
