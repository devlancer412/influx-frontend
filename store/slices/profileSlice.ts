import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Languages } from './../../constant/index';

type BrandState = BrandProfile;

const initialState: BrandState = {
  id: -1,
  account: {
    id: 0,
    name: '',
    avatar: '',
    email: '',
    verified: false,
    language: Languages[0],
  },
  website: '',
  description: '',
  channels: {
    twitter: 'https://fakeurl',
    instagram: 'https://fakeurl',
    discord: 'https://fakeurl',
    youtube: 'https://fakeurl',
  },
  mainTgChannel: '',
  category: '',
  region: '',
  chain: '',
  attribute: '',
  esBudget: 0,
  launchSettings: [
    {
      name: 'Pre-Launch',
      setted: true,
      value: '',
      placeholder: 'Presale / Launch In',
    },
    {
      name: 'Presale',
      setted: true,
      value: '',
      placeholder: 'Presale Link',
    },
    {
      name: 'Launched',
      setted: false,
      value: '',
      placeholder: 'Contract Address',
    },
  ],
  isWL: false,
  isAirdrop: false,
  isPremint: false,
  loggedin: false,
  isListed: false,
};

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    setBrand: (
      state: BrandState,
      action: PayloadAction<BrandProfile>
    ): BrandState => {
      return action.payload;
    },
    setUser: (
      state: BrandState,
      action: PayloadAction<UserProfile>
    ): BrandState => {
      return { ...state, account: action.payload };
    },
    addCampaign: (
      state: BrandState,
      action: PayloadAction<Campaign>
    ): BrandState => {
      return { ...state, campaigns: [...state.campaigns, action.payload] };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBrand, setUser, addCampaign } = brandSlice.actions;

export default brandSlice.reducer;
