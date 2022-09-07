import React, { useMemo } from 'react';

type Props = {
  top: number;
  bottom: number;
  maxTop: number;
  maxBottom: number;
  onChange: (ranges: number[]) => void;
  unit: SVGStringList;
};

const RangeSelect: React.FC<Props> = ({
  top,
  bottom,
  maxTop,
  maxBottom,
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
    <div className='relative w-full h-2 rounded-full bg-white'>
      <div
        className={`absolute left-0 h-2 rounded-full bg-[#134A50] w-[${leftWidth}%]`}
      />
      <div
        className={`absolute right-0 h-2 rounded-full bg-[#134A50] w-[${rightWidth}%]`}
      />
      <div
        className={`absolute w-[18px] h-[18px] rounded-full bg-[#10E98C] left-[${leftWidth}%] -translate-x-1/2`}
      />
      <div
        className={`absolute w-[18px] h-[18px] rounded-full bg-[#10E98C] right-[${rightWidth}%] translate-x-1/2`}
      />
    </div>
  );
};

export default RangeSelect;
