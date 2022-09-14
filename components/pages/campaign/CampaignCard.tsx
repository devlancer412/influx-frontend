import Link from 'next/link';
import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const CampaignCard: React.FC<Campaign> = ({
  id,
  name,
  influencers,
  averageEngagementRate,
  budget,
}) => {
  return (
    <Link href={`/campaign/${id}`}>
      <div className='w-full flex flex-col hover:cursor-pointer'>
        <div className='relative w-full'>
          <h3 className='w-full bg-[#00A0B0] py-[6px] text-[16px] leading-[24px] text-white capitalize font-medium text-center md:rounded-t-[10px]'>
            {name}
          </h3>
        </div>
        <div className='w-full py-[42px] md:py-[24px] flex flex-col md:flex-row justify-center items-center md:items-stretch bg-[#243034] md:bg-[#324951] md:rounded-b-[10px]'>
          <div className='flex flex-col justify-between w-[160px] text-center'>
            <h5 className='text-[13px] leading-[20px] text-white'>
              Influencers
            </h5>
            <h5 className='text-[15px] leading-[22px] text-[#10E98C] py-[14px] md:py-0'>
              {influencers}
            </h5>
          </div>
          <div className='flex flex-col justify-between w-[90%] md:w-[295px] text-center px-[70px] border-y md:border-y-0 md:border-x border-[#FFFFFF14] pt-[60px] md:pt-0'>
            <h5 className='text-[13px] leading-[20px] text-white mb-[9px]'>
              Avarage Engagement Rate
            </h5>
            <h5 className='text-[15px] leading-[22px] text-[#10E98C] py-[14px] md:py-0'>
              {averageEngagementRate}
            </h5>
          </div>
          <div className='flex flex-col justify-between w-[160px] text-center pt-[48px] md:pt-0'>
            <h5 className='text-[13px] leading-[20px] text-white'>
              Negaciated Budget
            </h5>
            <h5 className='text-[15px] leading-[22px] text-[#10E98C] py-[14px] md:py-0'>
              ${budget}K
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
