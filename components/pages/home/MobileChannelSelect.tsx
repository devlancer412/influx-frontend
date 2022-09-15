import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { setSocialFilter } from '../../../store/slices/filterSlice';

const MobileChannelSelect: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector((store: RootState) => store.filter.socialFilters);
  const selectedFilters = filters.filter((item) => item.selected);
  const [current, setCurrent] = useState<SocialFilterProps>();
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      dispatch(setSocialFilter({ filterTitle: filters[0].title, value: true }));
    } else if (selectedFilters.length > 1) {
      for (let i = 1; i < selectedFilters.length; i++) {
        dispatch(
          setSocialFilter({
            filterTitle: selectedFilters[i].title,
            value: false,
          })
        );
      }
    } else {
      setCurrent(selectedFilters[0]);
    }
  }, [selectedFilters, filters]);

  return (
    <div className='w-full flex flex-col items-center'>
      <div
        className='relative w-full flex flex-row justify-center items-center py-[11px] border-b border-[#17906580]'
        onClick={() => setOpen(!isOpen)}
      >
        <Image
          src={current?.iconUrl}
          width={14}
          height={14}
          objectFit='contain'
        />
        <h5 className='ml-[6px] text-[11px] leading-[16px] text-white opacity-50'>
          {current?.title}
        </h5>
        <div className='absolute right-[5px] text-white'>
          {isOpen ? <FaAngleUp size={12} /> : <FaAngleDown size={12} />}
        </div>
      </div>
      {isOpen ? (
        <div className='w-full flex flex-col items-center'>
          {filters
            .filter((item) => item?.title != current?.title)
            .map((item) => (
              <div
                className='relative w-full flex flex-row justify-center items-center py-[11px] border-b border-[#FFFFFF48] last:border-b-0'
                onClick={() => {
                  dispatch(
                    setSocialFilter({
                      filterTitle: current.title,
                      value: false,
                    })
                  );
                  dispatch(
                    setSocialFilter({ filterTitle: item.title, value: true })
                  );
                  setOpen(false);
                }}
              >
                <Image
                  src={item?.iconUrl}
                  width={14}
                  height={14}
                  objectFit='contain'
                />
                <h5 className='ml-[6px] text-[11px] leading-[16px] text-white w-20 text-center'>
                  {item?.title}
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

export default MobileChannelSelect;
