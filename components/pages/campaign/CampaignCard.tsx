import Link from 'next/link';
import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const CampaignCard: React.FC<Campaign> = ({
  id,
  name,
  influencers,
  avgER,
  price,
  followers,
}) => {
  return (
    <Link href={`/campaign/${id}`}>
      <div className='w-full flex flex-col hover:cursor-pointer'>
        <div className='relative w-full'>
          <h3 className='w-full bg-[#00A0B0] py-[6px] text-[16px] leading-[24px] text-white capitalize font-medium text-center md:rounded-t-[10px]'>
            {name}
          </h3>
          <div className='absolute w-5 h-5 bg-[#41666FB2] rounded-full flex justify-center items-center right-4 top-1/2 -translate-y-1/2'>
            <FaEllipsisV size={12} color='white' />
          </div>
        </div>
        <div className='w-full bg-[#243034] md:bg-[#324951] md:rounded-b-[10px] flex flex-col items-center'>
          <div className='w-full max-w-[980px] py-[42px] md:py-[24px] grid grid-cols-1 lg:grid-cols-4 justify-center items-center md:items-stretch'>
            <div className='flex flex-col justify-between text-center border-b lg:border-b-0 lg:border-r border-[#FFFFFF14]'>
              <h5 className='text-[13px] leading-[20px] text-white'>
                Influencers
              </h5>
              <h5 className='text-[15px] leading-[22px] text-[#10E98C] py-[14px] lg:py-0'>
                {influencers}
              </h5>
            </div>
            <div className='flex flex-col justify-between text-center border-b lg:border-b-0 lg:border-r border-[#FFFFFF14] pt-[60px] lg:pt-0'>
              <h5 className='text-[13px] leading-[20px] text-white mb-[9px]'>
                Avarage Engagement Rate
              </h5>
              <h5 className='text-[15px] leading-[22px] text-[#10E98C] py-[14px] lg:py-0'>
                {avgER}
              </h5>
            </div>
            <div className='flex flex-col justify-between text-center border-b lg:border-b-0 lg:border-r border-[#FFFFFF14] pt-[48px] lg:pt-0'>
              <h5 className='text-[13px] leading-[20px] text-white'>
                Negotiated Price
              </h5>
              <h5 className='text-[15px] leading-[22px] text-[#10E98C] py-[14px] lg:py-0'>
                ${price}K
              </h5>
            </div>
            <div className='flex flex-col justify-between text-center pt-[48px] lg:pt-0'>
              <h5 className='text-[13px] leading-[20px] text-white'>
                Total Followers
              </h5>
              <h5 className='text-[15px] leading-[22px] text-[#10E98C] py-[14px] lg:py-0'>
                {followers}K
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
