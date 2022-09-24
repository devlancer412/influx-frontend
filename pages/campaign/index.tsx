import { NextPage, GetServerSideProps } from 'next';
import CampaignCard from '../../components/pages/campaign/CampaignCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import useDialog from '../../hooks/useDialog';
import CreateCampaign from '../../components/dialog/campaigns/CreateCampaign';

const CampaignList: NextPage = () => {
  const { showDialog } = useDialog();

  const campaigns = useSelector(
    (store: RootState) => store.brandProfile.campaigns
  );

  return (
    <div className='px-[30px] md:pl-[48px] md:pr-[33px] py-[75px] flex flex-col font-poppins'>
      <ul className='font-semibold text-[20px] leading-[30px] md:text-[24px] md:leading-[36px] text-white capitalize md:list-disc list-inside mb-[43px] flex flex-row justify-between items-center'>
        <li className='flex-1'>Manage your Campaigns</li>
        <div
          className='py-[8px] px-7 border border-black bg-[#10E98C] hover:cursor-pointer text-[#082129] font-poppins text-[12px] leading-[22px] hidden md:block'
          onClick={() => showDialog(<CreateCampaign />)}
        >
          Create Campaign
        </div>
      </ul>
      <div className='w-full md:hidden flex flex-row justify-start items-center mb-[46px]'>
        <div className='w-2 h-2 rounded-full bg-[#D9D9D964]' />
        <h1 className='mx-[9px] font-semibold text-[40px] leading-[60px] text-[#D9D9D964]'>
          Campaigns
        </h1>
        <div className='w-2 h-2 rounded-full bg-[#D9D9D964]' />
      </div>
      <div className='w-full grid grid-cols-1 gap-[60px] px-[13px]'>
        {campaigns
          ? campaigns.map((campaign, index) => (
              <CampaignCard key={index} {...campaign} />
            ))
          : null}
      </div>
    </div>
  );
};

export default CampaignList;
