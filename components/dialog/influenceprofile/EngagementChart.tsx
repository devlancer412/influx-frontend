import React from 'react';
import dynamic from 'next/dynamic';
import { formatNumber } from './../../../services/utils';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type EngagementData = {
  date: string;
  data: number;
};

type Props = {
  data: EngagementData[];
};

const dollarUSLocale = Intl.NumberFormat('en-US');

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip bg-white p-2 rounded text-xs'>
        <p className='intro'>Avg. Engagement</p>
        <p className='label'>{`${label} : ${dollarUSLocale.format(
          payload[0].value
        )}`}</p>
      </div>
    );
  }

  return null;
};

const EngagementChart: React.FC<Props> = ({ data }) => {
  const max = data.reduce((a, b) => (a <= b.data ? b.data : a), 0);
  const min = data.reduce((a, b) => (a >= b.data ? b.data : a), max);
  const options: ApexOptions = {
    chart: {
      id: 'realtime',
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    xaxis: {
      title: {
        style: {
          color: 'white',
        },
        text: 'Date',
      },
      labels: {
        style: {
          colors: 'white',
        },
        formatter: (value) => {
          return value
            ? parseInt(value.split(' ')[0]) % 2 == 1
              ? value
              : ''
            : '';
        },
      },
      categories: data.map((item) => item.date),
    },
    yaxis: {
      title: {
        text: 'Engagement',
        style: {
          color: 'white',
        },
      },
      labels: {
        style: {
          colors: 'white',
        },
        formatter: (val) => {
          return formatNumber(val);
        },
      },
    },
  };
  const series = [
    {
      name: 'Avg. Engagement',
      data: data.map((item) => item.data),
    },
  ];

  return (
    <div className='mb-[15px] bg-[#324951] rounded-[10px] pt-[16px] px-[2px] flex flex-col items-center'>
      <div className='flex flex-row justify-center items-center w-full'>
        <h3 className='text-white text-[11px] mx-1 capitalize'>
          Average Engagements per Post
        </h3>
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
        <Chart
          options={options}
          series={series}
          type='line'
          width={400}
          height={250}
        />
      </div>
      <div className='md:hidden'>
        <Chart
          options={options}
          series={series}
          type='line'
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

export default EngagementChart;
