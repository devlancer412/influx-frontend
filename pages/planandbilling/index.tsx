import { NextPage } from 'next';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import BillingCard from './../../components/pages/planandbilling/BillingCard';

const plans: Billing[] = [
  {
    name: 'Trial',
    price: 0,
    per: 'per month',
    benifits: ['Limited Platform access', 'Management Module'],
    onPay: () => {},
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
    onPay: () =>
      window.open(`https://buy.depay.com/2AuycbpzBDZLzJBKMBGVsb`, '_blank'),
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
    onPay: () =>
      window.open(`https://buy.depay.com/1kXNYPwNdfAzoWqRusRWEW`, '_blank'),
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
    <div className='w-full px-[44px] lg:px-[68px] py-10 flex flex-col font-poppins'>
      <h1 className='w-full font-extrabold text-[40px] leading-[60px] text-white mb-1 text-center lg:text-start'>
        Upgrade Your Plan!
      </h1>
      <p className='w-full text-[16px] leading-[24px] text-[#CCCCCC] text-center lg:text-start'>
        Viral hub influencers management plans
      </p>
      <div className='mx-auto w-[90%] max-w-[480px] bg-[#FFB318] rounded-[10px] my-[39px] py-1 flex flex-row justify-center items-center hover:cursor-pointer'>
        <Image src='/icons/star.svg' width={19} height={19} />
        <h3 className='text-[16px] leading-[24px] text-black uppercase font-semibold mx-[17px]'>
          LIMITED INTRO OFFER
        </h3>
        <Image src='/icons/star.svg' width={19} height={19} />
      </div>
      <div className='w-full flex flex-col lg:flex-row justify-between'>
        {plans.map((plan, index) => (
          <div key={index} className='w-full lg:w-[30%] mb-[40px] lg:mb-0'>
            <BillingCard {...plan} />
          </div>
        ))}
      </div>
      <div className='flex-row items-center mt-[63px] w-full hidden lg:flex'>
        <div className='flex-1 h-[1px] bg-[#10E98C4D]' />
        <Image src='/images/splitermark.png' width={65} height={61} />
        <div className='flex-1 h-[1px] bg-[#10E98C4D]' />
      </div>
      <div className='w-full bg-[#304146] border border-white px-[51px] py-[34px] flex-col items-center my-[62px] hidden lg:flex'>
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
          <div className='bg-[#10E98C] rounded-[5px] w-52 hover:cursor-pointer py-2 text-black text-[15px] leading-[22px] text-center hover:bg-[#11C176] transition-all'>
            Get Listed
          </div>
          <div className='border border-[#10E98C] rounded-[5px] w-52 hover:cursor-pointer py-2 text-white text-[15px] leading-[22px] text-center'>
            Contact Us
          </div>
        </div>
      </div>
      <div className='w-full flex-col items-center my-[62px] flex lg:hidden'>
        <h1 className='w-full font-extrabold text-[24px] leading-[36px] text-white mb-1 text-center'>
          Optional Services
        </h1>
        <p className='w-full text-[11px] leading-[16px] text-[#CCCCCC] text-center'>
          List in the exclusive VIP club
        </p>
        <div className='w-full mt-[14px] mb-10 bg-[#304146] rounded-[10px] px-[23px] py-[17px] flex flex-col items-center'>
          <h1 className='font-semibold text-[24px] leading-[36px] text-[#10E98C] mb-1'>
            $500
          </h1>
          <div className='w-full grid grid-cols-1 gap-x-0 gap-y-[20px] mb-8'>
            {optionalServices.map((service, index) => (
              <div
                key={service}
                className={`pl-[10px] py-[11px] border-b border-[#FFFFFF80] flex flex-row justify-between items-center last:border-b-0`}
              >
                <ul className='list-disc list-inside'>
                  <li className='font-bold text-[14px] leading-[21px] flex-1 text-white ml-4'>
                    {service}
                  </li>
                </ul>
                <Image src='/icons/filledcheck.svg' width={17} height={17} />
              </div>
            ))}
          </div>
          <div className='grid grid-cols-1 gap-[15px] mb-[23px]'>
            <div className='bg-[#10E98C] rounded-[5px] w-52 hover:cursor-pointer py-2 text-black text-[15px] leading-[22px] text-center hover:bg-[#11C176] transition-all'>
              Get Listed
            </div>
            <div className='border border-[#10E98C] rounded-[5px] w-52 hover:cursor-pointer py-2 text-white text-[15px] leading-[22px] text-center'>
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanAndBilling;
