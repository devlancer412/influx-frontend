import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BillingCard: React.FC<Billing> = ({
  name,
  price,
  discounted,
  per,
  benifits,
}) => {
  return (
    <div className='w-full lg:border border-white bg-[#304146] py-[23px] flex flex-col items-start rounded-[10px] lg:rounded-none'>
      <div className='w-full flex-col justify-start hidden lg:flex px-[31px]'>
        <h1 className='font-bold text-[32px] leading-[48px] text-white mb-[10px]'>
          {name}
        </h1>
        <h2 className='font-medium text-[36px] leading-[54px] text-[#10E98C]'>
          ${price}
          <span className='ml-[13px] text-[14px] leading-[21px] text-[#CCCCCC]'>
            {per}
          </span>
        </h2>
        {discounted ? (
          <h3 className='font-medium text-[20px] leading-[30px] text-[#CCCCCC] pl-[24px] line-through'>
            ${discounted}
          </h3>
        ) : (
          <></>
        )}
      </div>
      <div className='w-full flex-row justify-start flex lg:hidden border-b border-[#CCCCCC48] px-[20px] md:px-[31px]'>
        <h1 className='font-bold text-[32px] leading-[48px] text-white mb-[10px]'>
          {name}
        </h1>
        <h2 className='font-medium text-[36px] leading-[54px] text-[#10E98C] ml-2'>
          ${price}
          {discounted ? (
            <span className='font-medium text-[20px] leading-[30px] text-[#CCCCCC] pl-[4px] line-through'>
              ${discounted}
            </span>
          ) : (
            <></>
          )}
          <span className='ml-1 text-[14px] leading-[21px] text-[#CCCCCC]'>
            {per}
          </span>
        </h2>
      </div>
      <div className='w-full my-[25px] grid grid-cols-1 gap-[28px] px-[31px]'>
        {benifits.map((benifit) => (
          <div key={benifit} className='flex flex-row items-center'>
            <Image src='/icons/check.svg' width={21} height={21} />
            <p className='flex-1 ml-[12px] text-[13px] leading-[20px] text-white'>
              {benifit}
            </p>
          </div>
        ))}
      </div>
      <div className='mx-auto bg-[#10E98C] rounded-[5px] py-2 px-[30px] flex flex-row items-center text-black hover:cursor-pointer hover:bg-[#11C176] transition-all'>
        <h3 className='text-[15px] leading-[22px] mr-[13px]'>
          Select the Plan
        </h3>
        <FaArrowRight size={20} />
      </div>
    </div>
  );
};

export default BillingCard;
