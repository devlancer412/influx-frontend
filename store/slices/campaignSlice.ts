import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type CampaignsState = Campaign[];

const initialState: CampaignsState = [
  {
    id: 0,
    name: 'Text campaign 1',
    influencers: 12,
    averageEngagementRate: 'Good',
    budget: 25.4,
  },
  {
    id: 1,
    name: 'Text campaign 1',
    influencers: 12,
    averageEngagementRate: 'Good',
    budget: 25.4,
  },
  {
    id: 2,
    name: 'Text campaign 1',
    influencers: 12,
    averageEngagementRate: 'Good',
    budget: 25.4,
  },
  {
    id: 3,
    name: 'Text campaign 1',
    influencers: 12,
    averageEngagementRate: 'Good',
    budget: 25.4,
  },
  {
    id: 4,
    name: 'Text campaign 1',
    influencers: 12,
    averageEngagementRate: 'Good',
    budget: 25.4,
  },
  {
    id: 5,
    name: 'Text campaign 1',
    influencers: 12,
    averageEngagementRate: 'Good',
    budget: 25.4,
  },
  {
    id: 6,
    name: 'Text campaign 1',
    influencers: 12,
    averageEngagementRate: 'Good',
    budget: 25.4,
  },
  {
    id: 7,
    name: 'Text campaign 1',
    influencers: 12,
    averageEngagementRate: 'Good',
    budget: 25.4,
  },
  {
    id: 8,
    name: 'Text campaign 1',
    influencers: 12,
    averageEngagementRate: 'Good',
    budget: 25.4,
  },
  {
    id: 7,
    name: 'Text campaign 1',
    influencers: 12,
    averageEngagementRate: 'Good',
    budget: 25.4,
  },
];

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    setCampaigns: (
      state: CampaignsState,
      action: PayloadAction<Campaign[]>
    ): CampaignsState => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCampaigns } = campaignsSlice.actions;

export default campaignsSlice.reducer;
