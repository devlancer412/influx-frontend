import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { setSocialFilter } from '../../../store/slices/filterSlice';

type Props = {
  items: readonly string[];
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const MobileSelectInput: React.FC<Props> = ({
  items,
  value,
  onChange,
  placeholder,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className='w-full flex flex-col items-center'>
      <div
        className='relative w-full flex flex-row justify-center items-center py-[11px] border-b border-[#17906580]'
        onClick={() => setOpen(!isOpen)}
      >
        <h5 className='text-[11px] leading-[16px] text-white opacity-50'>
          {value === '' ? placeholder : value}
        </h5>
        <div className='absolute right-[5px] text-white'>
          {isOpen ? <FaAngleUp size={12} /> : <FaAngleDown size={12} />}
        </div>
      </div>
      {isOpen ? (
        <div className='w-full flex flex-col items-center'>
          {items
            .filter((item) => item != value && item != '')
            .map((item) => (
              <div
                className='relative w-full flex flex-row justify-center items-center py-[11px] border-b border-[#FFFFFF48] last:border-b-0'
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }}
              >
                <h5 className='w-full text-[11px] leading-[16px] text-white text-center'>
                  {item}
                </h5>
              </div>
            ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MobileSelectInput;
