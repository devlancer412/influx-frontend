import React from 'react';
import { formatNumber } from './../../../services/utils';

import {
  ResponsiveContainer,
  BarChart,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Line,
  Tooltip,
} from 'recharts';

type EngagementData = {
  date: string;
  data: number;
};

type Props = {
  data: EngagementData[];
};

const EngagementChart: React.FC<Props> = ({ data }) => {
  const max = data.reduce((a, b) => (a <= b.data ? b.data : a), 0);
  const min = data.reduce((a, b) => (a >= b.data ? b.data : a), max);
  return (
    <div className='mb-[15px] bg-[#324951] rounded-[10px] pt-[16px] px-[2px] pb-[21px] flex flex-col items-center'>
      <div className='flex flex-row justify-center items-center w-full nb-[15px]'>
        <div className='bg-white w-1 h-1 rounded-full' />
        <h3 className='text-white text-[11px] mx-1'>
          Engagement per recent post
        </h3>
        <div className='bg-white w-1 h-1 rounded-full' />
      </div>
      {/* <div className='hidden lg:block'>
        <ResponsiveContainer width={685} aspect={2}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke='#FFFFFF80' vertical={false} />
            <XAxis dataKey='month' stroke='#FFFFFF80' />
            <YAxis dataKey='engagement' unit='K' stroke='#FFFFFF80' />
            <Tooltip />
            <Bar
              type='monotone'
              dataKey='engagement'
              fill='#00A0B0'
              width={35}
            />
          </BarChart>
        </ResponsiveContainer>
      </div> */}
      <div className='hidden md:block'>
        <ResponsiveContainer width={320} aspect={2}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke='#FFFFFF80' vertical={false} />
            <XAxis dataKey='date' stroke='#FFFFFF80'
              tick={{ fontSize: '12px' }} />
            <YAxis
              dataKey='engagement'
              stroke='#FFFFFF80'
              type='number'
              domain={[min, max]}
              tick={{ fontSize: '12px' }}
              tickFormatter={(tick) => formatNumber(tick)}
            />
            <Tooltip />
            <Line type='monotone' dataKey='data' fill='#00A0B0' dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className='md:hidden'>
        <ResponsiveContainer width={280} aspect={2}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke='#FFFFFF80' vertical={false} />
            <XAxis dataKey='date' stroke='#FFFFFF80' fontSize={12}
              tick={{ fontSize: '12px' }} />
            <YAxis
              dataKey='data'
              stroke='#FFFFFF80'
              type='number'
              domain={[min, max]}
              tick={{ fontSize: '12px' }}
              tickFormatter={(tick) => formatNumber(tick)}
            />
            <Tooltip />
            <Line type='monotone' dataKey='data' fill='#00A0B0' dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EngagementChart;
