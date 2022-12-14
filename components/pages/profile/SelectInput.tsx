import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

type Props = {
  items: readonly string[];
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const SelectInput: React.FC<Props> = ({
  items,
  value,
  placeholder,
  onChange,
}) => {
  const [subMenu, setSubMenu] = useState<Boolean>(false);
  const [search, setSearch] = useState<string>('');

  return (
    <div className='relative w-full bg-[#243034] border-[0.5px] border-[#CCCCCC80] rounded-[5px] py-[14px] px-[27px] text-[#CCCCCCAF] text-[13px] leading-[20px]'>
      <div
        className='w-full hover:cursor-pointer'
        onClick={() => setSubMenu(true)}
      >
        {value ? value : placeholder}
      </div>
      <FaAngleDown
        size={11}
        className='absolute top-1/2 -translate-y-1/2 right-[16px] hover:cursor-pointer'
        onClick={() => setSubMenu(true)}
      />
      {subMenu ? (
        <>
          <div
            className='fixed w-[100vw] h-screen top-0 left-0'
            onClick={() => setSubMenu(false)}
          />
          <div className='absolute top-full translate-y-1 w-full left-0 bg-[#243034] border border-[#CCCCCC80] rounded-[5px] max-h-[195px] overflow-x-hidden overflow-y-auto z-20'>
            <div className='flex flex-col w-full'>
              <div className='w-full py-[5px] px-3 border-b border-[#CCCCCC80]'>
                <input
                  className='bg-transparent'
                  type='string'
                  value={search}
                  placeholder='Search'
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className='flex flex-col w-full py-[11px] px-[13px]'>
                {items
                  .filter(
                    (item: string) =>
                      item.toLowerCase().indexOf(search.toLowerCase()) >= 0
                  )
                  .map((item: string) =>
                    item !== '' ? (
                      <div
                        className='w-full flex flex-row items-center my-[10px] hover:cursor-pointer'
                        onClick={() => {
                          onChange(item);
                          setSubMenu(false);
                        }}
                      >
                        <div className='w-[8px] h-[8px] border border-[#10E98C] rounded-full flex justify-center items-center'>
                          {item === value ? (
                            <div className='w-1 h-1 bg-[#FFFFFFD1] rounded-full'></div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <p className='text-[12px] text-white capitalize text-start ml-[10px]'>
                          {item}
                        </p>
                      </div>
                    ) : (
                      <></>
                    )
                  )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SelectInput;
