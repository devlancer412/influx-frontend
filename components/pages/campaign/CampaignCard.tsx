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
          <h3 className='w-full bg-[#00A0B0] py-[6px] text-[16px] leading-[24px] text-white capitalize font-medium text-center rounded-t-[10px]'>
            {name}
          </h3>
        </div>
        <div className='w-full py-[24px] flex flex-row justify-center items-stretch bg-[#324951] rounded-b-[10px]'>
          <div className='flex flex-col justify-between w-[160px] text-center'>
            <h5 className='text-[13px] leading-[20px] text-white'>
              Influencers
            </h5>
            <h5 className='text-[15px] leading-[22px] text-[#10E98C]'>
              {influencers}
            </h5>
          </div>
          <div className='flex flex-col justify-between w-[295px] text-center px-[70px] border-x border-[#FFFFFF14]'>
            <h5 className='text-[13px] leading-[20px] text-white mb-[9px]'>
              Avarage Engagement Rate
            </h5>
            <h5 className='text-[15px] leading-[22px] text-[#10E98C]'>
              {averageEngagementRate}
            </h5>
          </div>
          <div className='flex flex-col justify-between w-[160px] text-center'>
            <h5 className='text-[13px] leading-[20px] text-white'>
              Negaciated Budget
            </h5>
            <h5 className='text-[15px] leading-[22px] text-[#10E98C]'>
              ${budget}K
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
