import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

type Props = {
  items: readonly string[];
  value?: string[];
  placeholder?: string;
  onChange: (value: string[]) => void;
};

const MultiSelectInput: React.FC<Props> = ({
  items,
  value,
  placeholder,
  onChange,
}) => {
  const [subMenu, setSubMenu] = useState<Boolean>(false);
  const [search, setSearch] = useState<string>('');

  const itemClick = (item: string) => {
    if (value.indexOf(item) >= 0) {
      onChange(value.filter((iitem) => iitem != item));
      return;
    }

    const newValue = value.map((iitem) => iitem);
    newValue.push(item);
    onChange(newValue);
  };

  return (
    <div className='relative w-full my-[7px] bg-[#124B5280] rounded-[5px] py-[8px] px-[24px] text-[#FFFFFF66] text-[14px]'>
      <div
        className='w-full hover:cursor-pointer flex flex-row items-center flex-wrap justify-around'
        onClick={() => setSubMenu(true)}
      >
        {value.length > 0
          ? value.map((item) => (
              <div
                key={item}
                className='mr-1 border border-[#FFFFFF66] px-2 rounded-[3px] my-1'
                onClick={(e) => {
                  itemClick(item);
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                {item}
              </div>
            ))
          : placeholder}
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
          <div className='absolute top-full translate-y-1 w-full left-0 bg-[#274149] border border-[#00A0B099] rounded-[5px] max-h-[195px] overflow-x-hidden overflow-y-auto z-20 scrollbar'>
            <div className='flex flex-col w-full'>
              <div className='w-full py-[5px] px-3 border-b border-[#8277774D]'>
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
                        key={item}
                        className='w-full flex flex-row items-center my-[10px] hover:cursor-pointer'
                        onClick={() => {
                          itemClick(item);
                          setSubMenu(false);
                        }}
                      >
                        <div className='w-[8px] h-[8px] border border-[#10E98C] rounded-full flex justify-center items-center'>
                          {value.indexOf(item) >= 0 ? (
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

export default MultiSelectInput;
