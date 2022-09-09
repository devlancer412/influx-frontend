import React from 'react';
import CampaignCard from '../../components/pages/campaign/CampaignCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const CampaignList: React.FC = () => {
  const campaigns = useSelector((store: RootState) => store.campains);
  return (
    <div className='pl-[48px] pr-[33px] py-[75px] flex flex-col font-poppins'>
      <ul className='font-semibold text-[24px] leading-[36px] text-white capitalize list-disc list-inside mb-[43px]'>
        <li>Discover the biggest list of over vetted crypto influencers</li>
      </ul>
      <div className='w-full grid grid-cols-1 gap-[60px] max-h-[1400px] px-[13px] overflow-y-auto scrollbar'>
        {campaigns.map((campaign) => (
          <CampaignCard {...campaign} />
        ))}
      </div>
    </div>
  );
};

export default CampaignList;
