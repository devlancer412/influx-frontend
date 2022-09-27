import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import client from '../../../services/HttpClient';
import useDialog from '../../../hooks/useDialog';
import { Engagements } from '../../../constant';
import SelectInput from './../../pages/profile/SelectInput';
import { RootState } from '../../../store';
import { addCampaign } from '../../../store/slices/profileSlice';

const CreateCampaign = () => {
  const dispatch = useDispatch();
  const { hideDialog } = useDialog();
  const profile = useSelector((store: RootState) => store.brandProfile);

  const [name, setName] = useState<string>('');
  // const [averageER, setAverageER] = useState<EngagementFilter>(Engagements[0]);
  // const [esBudget, setEsBudget] = useState<number>(0);

  const createCampaign = async () => {
    const body = {
      name: name,
      avgER: 'None',
      creator: profile.id,
    };

    let response = await client.post('campaigns', body);
    const newCampaign: Campaign = {
      id: response.data.data.id,
      name: response.data.data.name,
      influencers: 0,
      avgER: response.data.data.avgER,
      price: response.data.data.negoBudget,
      followers: 0,
    };
    dispatch(addCampaign(newCampaign));
    hideDialog();
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
              Create Campaign
            </h1>
            <div className='w-full relative flex flex-col items-center rounded-[5px]'>
              <div className='w-full flex-col items-start mb-10'>
                <h5 className='pl-[7px] text-[16px] leading-[24px] text-[#CCCCCC] mb-[9px]'>
                  Campagin Name
                </h5>
                <input
                  className='w-full rounded-[3px] border-[0.5px] border-[#CCCCCC80] bg-[#243034] text-[#CCCCCCB3] text-[11px] leading-[16px] py-4 px-4'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Type new campaign name'
                />
              </div>
              {/* <div className='w-full flex-col items-start mb-3'>
                <h5 className='pl-[7px] text-[16px] leading-[24px] text-[#CCCCCC] mb-[9px]'>
                  Average Engagement Rate
                </h5>
                <SelectInput
                  items={Engagements}
                  value={averageER}
                  placeholder='Choose average engagement budget'
                  onChange={(value) => setAverageER(value as EngagementFilter)}
                />
              </div> */}
              {/* <div className='w-full flex-col items-start mb-5'>
                <h5 className='pl-[7px] text-[16px] leading-[24px] text-[#CCCCCC] mb-[9px]'>
                  Estimate Compaign budget
                </h5>
                <input
                  className='w-full rounded-[3px] border-[0.5px] border-[#CCCCCC80] bg-[#243034] text-[#CCCCCCB3] text-[11px] leading-[16px] py-4 px-4'
                  value={esBudget}
                  type='number'
                  onChange={(e) => setEsBudget(parseInt(e.target.value))}
                  placeholder='Type your estimate budget($)'
                />
              </div> */}
            </div>
            <div
              className='py-[8px] px-7 border border-black bg-[#10E98C] hover:cursor-pointer text-[#082129] font-poppins text-[12px] leading-[22px] font-bold hover:bg-[#11C176] transition-all'
              onClick={createCampaign}
            >
              Create
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
