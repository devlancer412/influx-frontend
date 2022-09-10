import React from 'react';

type Props = {
  selected: boolean;
  onToggle: (value: boolean) => void;
};

const SocialSelect: React.FC<Props> = ({ selected, onToggle }) => {
  return (
    <div
      className='border-[2px] border-[#10E98C] rounded-[5px] w-[15px] h-[15px] flex flex-row justify-center items-center hover:cursor-pointer'
      onClick={() => onToggle(!selected)}
    >
      {selected ? (
        <div className='w-[7px] h-[7px] rounded-full bg-white' />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SocialSelect;
