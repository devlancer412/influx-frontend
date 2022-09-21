import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { RootState } from '../../store';
import CampaignInfluenceCard from '../../components/pages/campaign/CampaignInfluenceCard';

const subMenus = ['Actions', 'Change status', 'Template'] as const;
type SubMenu = typeof subMenus[number];

type Props = {
  campaign: Campaign;
  influences: Influence[];
};

const CampaignProfile: NextPage = ({ campaign, influences }: Props) => {
  const router = useRouter();
  const { campaignId } = router.query;

  const [current, setCurrent] = useState<SubMenu>('Actions');

  return (
    <div className='py-[34px] lg:py-[68px] flex flex-col font-poppins'>
      <div className='w-full flex justify-center items-center px-[29px] lg:px-[110px]'>
        <div className='flex flex-row w-full items-stretch bg-[#243034]'>
          <div className='w-4 rounded-r-[5px] bg-[#10E98CD9] hidden lg:block' />
          <div className='flex-1 flex flex-col'>
            <div className='py-[27px] md:px-[94px] flex flex-row justify-center md:justify-start items-center'>
              <h1 className='font-bold text-[16px] md:text-[24px] lg:text-[32px] text-white mr-[20px]'>
                {campaign?.name}
              </h1>
              <div className='hidden md:block'>
                <Image src='/icons/campaignwhite.svg' width={30} height={30} />
              </div>
              <div className='md:hidden'>
                <Image src='/icons/campaignwhite.svg' width={19} height={19} />
              </div>
            </div>
            <div className='w-auto mx-auto md:w-full flex flex-col md:flex-row justify-center items-strech pb-[22px]'>
              <div className='flex flex-col max-w-[220px]'>
                <h5 className='w-full pb-[25px] border-b border-[#FFFFFFCC] text-[14px] leading-[12px] md:text-[16px] md:leading-[24px] text-center text-[#FFFFFFCC] px-[10px]'>
                  Avarage ER
                </h5>
                <h3 className='w-full pb-[25px] font-bold text-[11px] leading-[16px] md:text-[24px] md:leading-[36px] text-center text-[#10E98C] py-[18px]'>
                  {campaign?.averageEngagementRate}
                </h3>
              </div>
              <div className='flex flex-col max-w-[220px]'>
                <h5 className='w-full pb-[25px] border-b border-[#FFFFFFCC] text-[14px] leading-[12px] md:text-[16px] md:leading-[24px] text-center text-[#FFFFFFCC] px-[10px]'>
                  Negotiated Price
                </h5>
                <h3 className='w-full pb-[25px] font-bold text-[11px] leading-[16px] md:text-[24px] md:leading-[36px] text-center text-[#10E98C] py-[18px]'>
                  ${campaign?.price}K
                </h3>
              </div>
              <div className='flex flex-col max-w-[220px]'>
                <h5 className='w-full pb-[25px] border-b border-[#FFFFFFCC] text-[14px] leading-[12px] md:text-[16px] md:leading-[24px] text-center text-[#FFFFFFCC] px-[10px]'>
                  Total Followers
                </h5>
                <h3 className='w-full pb-[25px] font-bold text-[11px] leading-[16px] md:text-[24px] md:leading-[36px] text-center text-[#10E98C] py-[18px]'>
                  XXXX
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col py-[35px] px-[29px] md:px-[68px]'>
        <div className='w-full py-[64px] lg:px-[22px]'>
          <div className='w-full bg-[#243034] border border-[#CCCCCC80] py-3 flex flex-row justify-around lg:justify-center items-center rounded-[10px] lg:rounded-none'>
            {subMenus.map((menu: SubMenu) => (
              <h3
                className={`text-[13px] leading-[20px] md:text-[16px] md:leading-[24px] lg:mx-[20px] px-[5px] lg:px-[10px] hover:cursor-pointer ${
                  menu === current
                    ? 'text-[#10E98C] border-[#10E98C]'
                    : 'text-white border-transparent'
                } rounded-[10px] lg:rounded-none border lg:border-0 lg:border-b`}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  let props: Props = {
    campaign: {} as Campaign,
    influences: [],
  };

  return { props };
};
