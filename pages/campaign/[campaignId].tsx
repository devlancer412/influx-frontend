import { NextPage, GetServerSideProps } from 'next';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import CampaignInfluenceCard from '../../components/pages/campaign/CampaignInfluenceCard';
import client from '../../services/HttpClient';
import useDialog from '../../hooks/useDialog';
import AddInfluence from '../../components/dialog/campaigns/AddInfluence';
import { formatNumber } from './../../services/utils';

const RichEditor = dynamic(
  () => import('../../components/pages/campaign/RichEditor'),
  { ssr: false }
);

const subMenus = ['Actions', 'Change status', 'Template'] as const;
type SubMenu = typeof subMenus[number];

type InfluenceState = Influence & {
  selected: boolean;
};

type Props = {
  campaign: Campaign;
  influencers: Influence[];
};

const CampaignProfile: NextPage = ({ campaign, influencers }: Props) => {
  const subMenuRef = useRef(null);
  const { showDialog } = useDialog();
  const [current, setCurrent] = useState<SubMenu>('Actions');
  const [template, setTemplate] = useState<string>(campaign.template);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const [influenceStates, setInfluenceStates] = useState<InfluenceState[]>(
    influencers.map((influence) => {
      return { ...influence, selected: false };
    })
  );
  const [timerId, setTimerId] = useState<NodeJS.Timeout>(null);

  useEffect(() => {
    if (timerId) {
      clearTimeout(timerId);
    }
    const timeout = setTimeout(async () => {
      await client.post('/campaigns', {
        campaignId: campaign.id,
        template: template,
        name: campaign.name,
        avgER: campaign.avgER,
      });
    }, 500);
    setTimerId(timeout);
  }, [template]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!subMenuRef?.current?.contains(event.target)) {
        setShowSubMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, [subMenuRef]);

  const toggleSelection = (index: number) => {
    setInfluenceStates(
      influenceStates.map((state, i) =>
        i === index ? { ...state, selected: !state.selected } : state
      )
    );
  };

  const selectAll = () => {
    setInfluenceStates(
      influenceStates.map((influenceState) => {
        return {
          ...influenceState,
          selected: true,
        };
      })
    );
  };

  const deleteSelected = async () => {
    for (const influence of influenceStates.filter(
      (influenceState) => influenceState.selected
    )) {
      await client.post('/campaigns/removeInfluencer', {
        campaignId: campaign.id,
        influenceId: influence.id,
      });
    }
    setInfluenceStates(
      influenceStates.filter((influenceState) => !influenceState.selected)
    );
  };

  return (
    <div className='py-[34px] lg:py-[68px] flex flex-col font-poppins'>
      <div className='w-full flex justify-center items-center px-[29px] lg:px-[110px]'>
        <div className='flex flex-row w-full items-stretch bg-[#243034]'>
          <div className='w-4 rounded-r-[5px] bg-[#10E98CD9] hidden lg:block' />
          <div className='flex-1 flex flex-col'>
            <div className='py-[27px] md:px-[94px] flex flex-row justify-center md:justify-start items-center'>
              <h1 className='font-bold text-[16px] md:text-[24px] lg:text-[32px] text-white mr-[20px]'>
                {campaign?.name}
              </h1>
              <div className='hidden md:block'>
                <Image src='/icons/campaignwhite.svg' width={30} height={30} />
              </div>
              <div className='md:hidden'>
                <Image src='/icons/campaignwhite.svg' width={19} height={19} />
              </div>
            </div>
            <div className='w-auto mx-auto md:w-full flex flex-col md:flex-row justify-center items-strech pb-[22px]'>
              <div className='flex flex-col max-w-[220px]'>
                <h5 className='w-full pb-[25px] border-b border-[#FFFFFFCC] text-[14px] leading-[12px] md:text-[16px] md:leading-[24px] text-center text-[#FFFFFFCC] px-[10px]'>
                  Avarage ER
                </h5>
                <h3 className='w-full pb-[25px] font-bold text-[11px] leading-[16px] md:text-[24px] md:leading-[36px] text-center text-[#10E98C] py-[18px]'>
                  {campaign?.avgER}
                </h3>
              </div>
              <div className='flex flex-col max-w-[220px]'>
                <h5 className='w-full pb-[25px] border-b border-[#FFFFFFCC] text-[14px] leading-[12px] md:text-[16px] md:leading-[24px] text-center text-[#FFFFFFCC] px-[10px]'>
                  Negotiated Price
                </h5>
                <h3 className='w-full pb-[25px] font-bold text-[11px] leading-[16px] md:text-[24px] md:leading-[36px] text-center text-[#10E98C] py-[18px]'>
                  ${formatNumber(campaign?.price)}
                </h3>
              </div>
              <div className='flex flex-col max-w-[220px]'>
                <h5 className='w-full pb-[25px] border-b border-[#FFFFFFCC] text-[14px] leading-[12px] md:text-[16px] md:leading-[24px] text-center text-[#FFFFFFCC] px-[10px]'>
                  Total Followers
                </h5>
                <h3 className='w-full pb-[25px] font-bold text-[11px] leading-[16px] md:text-[24px] md:leading-[36px] text-center text-[#10E98C] py-[18px]'>
                  {formatNumber(campaign.followers)}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col py-[35px] px-[29px] md:px-[68px]'>
        <div className='w-full py-[64px] lg:px-[22px]'>
          <div className='w-full bg-[#243034] border border-[#CCCCCC80] py-3 flex flex-row justify-around lg:justify-center items-center rounded-[10px] lg:rounded-none mb-[64px]'>
            <h3
              className={`relative text-[13px] leading-[20px] md:text-[16px] md:leading-[24px] lg:mx-[20px] px-[5px] lg:px-[10px] hover:cursor-pointer ${
                'Actions' === current
                  ? 'text-[#10E98C] border-[#10E98C]'
                  : 'text-white border-transparent'
              } rounded-[10px] lg:rounded-none border lg:border-0 lg:border-b`}
              onClick={() => {
                setCurrent('Actions');
                setShowSubMenu('Actions' === current ? !showSubMenu : true);
              }}
              onBlur={() => setShowSubMenu(false)}
            >
              Actions
              {showSubMenu && 'Actions' === current ? (
                <ul
                  ref={subMenuRef}
                  className='absolute top-full bg-[#243034] border border-[#CCCCCC80] py-2 z-10 w-[200px] text-center left-1/2 -translate-x-1/2 translate-y-1'
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowSubMenu(false);
                  }}
                >
                  <li onClick={selectAll}>Select All</li>
                  <li onClick={deleteSelected}>Delete</li>
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      showDialog(<AddInfluence campaignId={campaign.id} />);
                    }}
                  >
                    Add to Campaign
                  </li>
                </ul>
              ) : (
                <></>
              )}
            </h3>
            <h3
              className={`text-[13px] leading-[20px] md:text-[16px] md:leading-[24px] lg:mx-[20px] px-[5px] lg:px-[10px] hover:cursor-pointer ${
                'Change status' === current
                  ? 'text-[#10E98C] border-[#10E98C]'
                  : 'text-white border-transparent'
              } rounded-[10px] lg:rounded-none border lg:border-0 lg:border-b`}
              onClick={() => setCurrent('Change status')}
            >
              Change Status
            </h3>
            <h3
              className={`relative text-[13px] leading-[20px] md:text-[16px] md:leading-[24px] lg:mx-[20px] px-[5px] lg:px-[10px] hover:cursor-pointer ${
                'Template' === current
                  ? 'text-[#10E98C] border-[#10E98C]'
                  : 'text-white border-transparent'
              } rounded-[10px] lg:rounded-none border lg:border-0 lg:border-b`}
              onClick={() => {
                setCurrent('Template');
                showDialog(
                  <RichEditor text={template} onChange={setTemplate} />
                );
              }}
            >
              Template
            </h3>
          </div>
          <div className='w-full grid grid-cols-1 gap-16'>
            {influenceStates.map((influence, index) => (
              <CampaignInfluenceCard
                key={index}
                influence={influence}
                onToggle={() => toggleSelection(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignProfile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { campaignId } = context.query;

  let props: Props = {
    campaign: {} as Campaign,
    influencers: [],
  };

  const response = await client.get(`/campaigns/${campaignId}`);

  if (response.success) {
    props.campaign = {
      id: response.data.id,
      name: response.data.name,
      influencers: response.data.influencers.length,
      avgER: response.data.avgER,
      price: response.data.negoBudget,
      followers: response.data.totalFollowers,
      template: response.data.template,
    };

    props.influencers = response.data.influencers.map((data) => {
      return {
        id: data.influencerId,
        name: data.influencer.account.name,
        nickName: data.influencer.account.name,
        imageUrl: data.influencer.account.logo,
        mainChannel: data.influencer.mainChannel ?? 'twitter',
        instagram: data.influencer.account.instagram,
        youtube: data.influencer.account.youtube,
        telegram: data.influencer.account.telegram,
        twitter: data.influencer.account.twitter,
        tiktok: data.influencer.account.tiktok,
        followers: 0,
        engagement: data.influencer.engagementRate,
        topPrice: data.negotiatedBudget,
        bottomPrice: 0,
        isVIP: data.influencer.isVIP,
        niches: [],
      };
    });
  }

  return { props };
};
