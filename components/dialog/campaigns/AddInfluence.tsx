import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import Select from 'react-select';
import client from '../../../services/HttpClient';
import useDialog from '../../../hooks/useDialog';
import { desktopSelectStyle, InfluenceStates } from '../../../constant';

type Props = {
  campaignId: number;
};

const AddInfluence: FC<Props> = ({ campaignId }) => {
  const dispatch = useDispatch();
  const { hideDialog } = useDialog();

  const [influenceList, setInfluenceList] = useState<any[]>([]);
  const [influence, setInfluence] = useState<any>();
  const [status, setStatus] = useState<InfluenceStatus>(InfluenceStates[0]);
  const [negoBudget, setNegoBudget] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const response = await client.get(`/influencers`);

      if (!response.success) {
        return;
      }

      console.dir(response.data, { depth: 3 });
      const influencers = response.data
        .filter(
          (data) =>
            data?.campaigns.filter(
              (campaign) => campaign?.campaignId == campaignId
            ).length == 0
        )
        .map((data) => {
          return {
            value: data?.id,
            label: data?.account?.name,
          };
        });

      setInfluenceList(influencers);
    })();
  }, []);

  const addInfluence = async () => {
    console.log(status, typeof status, status.replace(/ /g, ''));
    const body = {
      campaignId: campaignId,
      influencerId: influence?.value,
      status: status.replace(/ /g, ''),
      negotiatedBudget: negoBudget,
    };
    const response = await client.post('/campaigns/addInfluencer', body);
    if (!response.success) {
      console.log(response);
      return;
    }

    window.location.reload();
  };

  return (
    <div className='fixed top-0 left-0 w-[100vw] h-screen overflow-y-auto'>
      <div className='w-full h-full min-h-[800px] flex flex-row items-center'>
        <div className='relative w-screen md:w-[550px] px-[10px] py-[40px] md:p-[40px] bg-[#082129] mx-auto my-[40px]'>
          <div
            className='absolute rounded-[5px] bg-[#15171B] p-2 text-white right-[25px] top-[25px] hover:cursor-pointer'
            onClick={hideDialog}
          >
            <FaTimes />
          </div>
          <div className='flex flex-col items-center font-poppins'>
            <h1 className='font-bold text-[16px] leading-[28px] text-white mb-[20px] text-center md:text-left'>
              Add Influencer
            </h1>
            <div className='w-full relative flex flex-col items-center rounded-[5px]'>
              <div className='w-full flex flex-col items-start mb-5'>
                <div className='flex flex-row justify-start items-center'>
                  <h3 className='font-semibold text-[12px] text-white capitalize mx-1'>
                    Select Influencer
                  </h3>
                </div>
                <Select
                  styles={desktopSelectStyle}
                  options={influenceList}
                  value={influence}
                  onChange={(item: any) => {
                    setInfluence(item);
                  }}
                />
              </div>
              <div className='w-full flex flex-col items-start mb-5'>
                <div className='flex flex-row justify-start items-center'>
                  <h3 className='font-semibold text-[12px] text-white capitalize mx-1'>
                    Status
                  </h3>
                </div>
                <Select
                  styles={desktopSelectStyle}
                  options={InfluenceStates.map((item) => {
                    return { value: item.replace(/ /g, ''), label: item };
                  })}
                  value={{ value: status.replace(/ /g, ''), label: status }}
                  onChange={(item: any) => {
                    setStatus(item.label);
                  }}
                />
              </div>
              <div className='w-full flex flex-col items-start mb-5'>
                <div className='flex flex-row justify-start items-center'>
                  <h3 className='font-semibold text-[12px] text-white capitalize mx-1'>
                    Negotiated Budget
                  </h3>
                </div>
                <input
                  className='w-full bg-[#124B5280] rounded-[5px] text-[#FFFFFF66] mt-2 py-2 px-4 leading-38px text-[14px]'
                  type='number'
                  value={negoBudget}
                  onChange={(e) => setNegoBudget(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div
              className='py-[8px] px-7 border border-black bg-[#10E98C] hover:cursor-pointer text-[#082129] font-poppins text-[12px] leading-[22px] font-bold hover:bg-[#11C176] transition-all'
              onClick={addInfluence}
            >
              Add Influence
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInfluence;
