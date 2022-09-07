import React, { useMemo } from 'react';

type Props = {
  top: number;
  bottom: number;
  maxTop: number;
  maxBottom?: number;
  onChange: (top: number, bottom: number) => void;
  unit?: SVGStringList;
};

const RangeSelect: React.FC<Props> = ({
  top,
  bottom,
  maxTop,
  maxBottom = 0,
  onChange,
  unit = '$',
}) => {
  const range = useMemo<number>(() => maxTop - maxBottom, [maxTop, maxBottom]);
  const leftWidth = useMemo(
    () => ((bottom - maxBottom) * 100) / range,
    [bottom, range]
  );
  const rightWidth = useMemo(
    () => ((maxTop - top) * 100) / range,
    [bottom, range]
  );

  return (
    <div className='relative w-full h-2 rounded-full bg-white mt-[14px] mb-[31px] text-[8px]'>
      <div
        className={`absolute left-0 h-2 rounded-full bg-[#134A50] w-[${leftWidth}%] top-1/2 -translate-y-1/2 transition-all`}
      />
      <div
        className={`absolute right-0 h-2 rounded-full bg-[#134A50] w-[${rightWidth}%] top-1/2 -translate-y-1/2 transition-all`}
      />
      <div
        className={`absolute w-[18px] h-[18px] rounded-full bg-[#10E98C] left-[${leftWidth}%] -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all hover:cursor-pointer`}
      />
      <div
        className={`absolute w-[18px] h-[18px] rounded-full bg-[#10E98C] right-[${rightWidth}%] translate-x-1/2 top-1/2 -translate-y-1/2 transition-all hover:cursor-pointer`}
      />
      <div
        className={`absolute border w-fit border-[#CCCCCC] text-[#CCCCCC] rounded-[5px] py-[1px] px-[9px] left-[${leftWidth}%] -translate-x-1/2 -bottom-[12px] translate-y-full transition-all m-0`}
      >
        ${bottom}
      </div>
      <div
        className={`absolute border w-fit border-[#CCCCCC] text-[#CCCCCC] rounded-[5px] py-[1px] px-[9px] right-[${rightWidth}%] translate-x-1/2 -bottom-[12px] translate-y-full transition-all m-0`}
      >
        ${top}
      </div>
    </div>
  );
};

export default RangeSelect;
