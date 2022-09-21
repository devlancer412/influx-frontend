import { NextPage, GetServerSideProps } from 'next';
import CampaignCard from '../../components/pages/campaign/CampaignCard';

type Props = {
  campaigns: Campaign[];
};

const CampaignList: NextPage = ({ campaigns = [] }: Props) => {
  return (
    <div className='px-[30px] md:pl-[48px] md:pr-[33px] py-[75px] flex flex-col font-poppins'>
      <ul className='font-semibold text-[20px] leading-[30px] md:text-[24px] md:leading-[36px] text-white capitalize md:list-disc list-inside mb-[43px]'>
        <li>Manage your Campaigns</li>
      </ul>
      <div className='w-full md:hidden flex flex-row justify-start items-center mb-[46px]'>
        <div className='w-2 h-2 rounded-full bg-[#D9D9D964]' />
        <h1 className='mx-[9px] font-semibold text-[40px] leading-[60px] text-[#D9D9D964]'>
          Campaigns
        </h1>
        <div className='w-2 h-2 rounded-full bg-[#D9D9D964]' />
      </div>
      <div className='w-full grid grid-cols-1 gap-[60px] px-[13px]'>
        {campaigns.map((campaign, index) => (
          <CampaignCard key={index} {...campaign} />
        ))}
      </div>
    </div>
  );
};

export default CampaignList;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let props: Props = {
    campaigns: [],
  };

  return { props };
};
