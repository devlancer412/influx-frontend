import { NextPage } from 'next';
import Image from 'next/image';
import BillingCard from './../../components/pages/planandbilling/BillingCard';

const plans: Billing[] = [
  {
    name: 'Trial',
    price: 0,
    per: 'per month',
    benifits: ['Limited Platform access', 'Management Module'],
  },
  {
    name: 'Pro',
    price: 350,
    per: '90 days',
    discounted: 500,
    benifits: [
      'Unlimited Platform access',
      'Management Module',
      'Discover & Manage all Vetted Influencers',
      'Access to agency discount forInfuencer selection',
      'Discover Prices and Performance',
      'Advanced Targeting',
      'Recommended Lists for yourProject & budget',
    ],
  },
  {
    name: 'Pro',
    price: 900,
    per: '365 days',
    discounted: 1500,
    benifits: [
      'Unlimited Platform access',
      'Management Module',
      'Discover & Manage all Vetted Influencers',
      'Access to agency discount forInfuencer selection',
      'Discover Prices and Performance',
      'Advanced Targeting',
      'Recommended Lists for yourProject & budget',
    ],
  },
];

const optionalServices = [
  '1 pinned post in our group',
  'Get big buys & Volume from long- term investors',
  'Multiple Follow ups',
  'Lots of crosspromotion in our partner channels',
  'Detailed project Review',
  'Get Influencer Discount',
  'Direct presentation to our network & Partners',
  'Credibility Boost for your community',
  'Feedback on possible redflags',
  'Open doors to the biggest influencers',
  'Optional : 1HR AMA ( Addtional charges )',
  'Get Free Calls and shoutouts from club members',
];

const PlanAndBilling: NextPage = () => {
  return (
    <div className='w-full px-[68px] py-10 flex flex-col font-poppins'>
      <h1 className='w-full font-extrabold text-[40px] leading-[60px] text-white mb-1'>
        Upgrade Your Plan!
      </h1>
      <p className='w-full text-[16px] leading-[24px] text-[#CCCCCC]'>
        Viral hub influencers management plans
      </p>
      <div className='mx-auto w-[480px] bg-[#FFB318] rounded-[10px] my-[39px] py-1 flex flex-row justify-center items-center hover:cursor-pointer'>
        <Image src='/icons/star.svg' width={19} height={19} />
        <h3 className='text-[16px] leading-[24px] text-black uppercase font-semibold mx-[17px]'>
          LIMITED INTRO OFFER
        </h3>
        <Image src='/icons/star.svg' width={19} height={19} />
      </div>
      <div className='w-full flex flex-row justify-between'>
        {plans.map((plan, index) => (
          <div key={index} className='w-[30%]'>
            <BillingCard {...plan} />
          </div>
        ))}
      </div>
      <div className='flex flex-row items-center mt-[63px] w-full'>
        <div className='flex-1 h-[1px] bg-[#10E98C4D]' />
        <Image src='/images/splitermark.png' width={65} height={61} />
        <div className='flex-1 h-[1px] bg-[#10E98C4D]' />
      </div>
      <div className='w-full bg-[#304146] border border-white px-[51px] py-[34px] flex flex-col items-center my-[62px]'>
        <h1 className='w-full font-extrabold text-[40px] leading-[60px] text-white mb-1 ml-[41px]'>
          Optional Services
          <span className='font-bold text-[40px] leading-[60px] text-[#10E98C] ml-[17px]'>
            $500
          </span>
        </h1>
        <p className='w-full text-[16px] leading-[24px] text-[#CCCCCC] ml-[41px]'>
          List in the exclusive VIP club
        </p>
        <div className='w-full grid grid-cols-2 gap-x-0 gap-y-[22px] my-10'>
          {optionalServices.map((service, index) => (
            <div
              key={service}
              className={`pl-[41px] py-[11px] ${
                index < optionalServices.length - 2 ? 'border-b' : ''
              } border-[#FFFFFF80] flex flex-row items-center`}
            >
              <Image src='/icons/filledcheck.svg' width={17} height={17} />
              <p className='font-bold text-[14px] leading-[21px] flex-1 text-white ml-4'>
                {service}
              </p>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 gap-[25px]'>
          <div className='bg-[#10E98C] rounded-[5px] w-52 hover:cursor-pointer py-2 text-black text-[15px] leading-[22px] text-center'>
            Get Listed
          </div>
          <div className='border border-[#10E98C] rounded-[5px] w-52 hover:cursor-pointer py-2 text-white text-[15px] leading-[22px] text-center'>
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanAndBilling;
