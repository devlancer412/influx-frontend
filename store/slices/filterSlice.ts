import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  Engagements,
  Languages,
  AudienceSizes,
  AudienceLocations,
  Tags,
} from '../../constant';

const initSocialFilters: SocialFilterProps[] = [
  {
    iconUrl: '/icons/twitter.png',
    title: 'Twitter',
    selected: true,
  },
  {
    iconUrl: '/icons/instagram.png',
    title: 'Instagram',
    selected: true,
  },
  {
    iconUrl: '/icons/telegram.png',
    title: 'Telegram',
    selected: false,
  },
  {
    iconUrl: '/icons/youtube.png',
    title: 'Youtube',
    selected: true,
  },
  {
    iconUrl: '/icons/tiktok.png',
    title: 'Tiktok',
    selected: false,
  },
];

type SetSocialFilterPayload = {
  filterTitle: string;
  value: boolean;
};

type PriceFilter = {
  top: number;
  bottom: number;
};

type EngagementFilter = typeof Engagements[number];

type LanguageFilter = typeof Languages[number];

type AudienceSizeFilter = typeof AudienceSizes[number];

type AudienceLocationFilter = typeof AudienceLocations[number];

type TagsFilter = typeof Tags[number];

type FilterState = {
  socialFilters: SocialFilterProps[];
  priceFilter: PriceFilter;
  engagementFilter: EngagementFilter;
  languageFilter: LanguageFilter;
  audienceSizeFilter: AudienceSizeFilter;
  userNameFilter: string;
  audienceLocationFilter: AudienceLocationFilter;
  tagsFilter: TagsFilter[];
};

const initialState: FilterState = {
  socialFilters: initSocialFilters,
  priceFilter: {
    top: 9000,
    bottom: 10,
  },
  engagementFilter: 'Ok',
  languageFilter: 'English',
  audienceSizeFilter: '0 - 1000',
  userNameFilter: '',
  audienceLocationFilter: '',
  tagsFilter: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSocialFilter: (
      state: FilterState,
      action: PayloadAction<SetSocialFilterPayload>
    ): FilterState => {
      return {
        ...state,
        socialFilters: state.socialFilters.map((filter: SocialFilterProps) =>
          filter.title == action.payload.filterTitle
            ? { ...filter, selected: action.payload.value }
            : { ...filter }
        ),
      };
    },
    setPriceFilter: (
      state: FilterState,
      action: PayloadAction<PriceFilter>
    ): FilterState => {
      return { ...state, priceFilter: action.payload };
    },
    setEngagementFilter: (
      state: FilterState,
      action: PayloadAction<string>
    ): FilterState => {
      return { ...state, engagementFilter: action.payload as EngagementFilter };
    },
    setLanguageFilter: (
      state: FilterState,
      action: PayloadAction<string>
    ): FilterState => {
      return { ...state, languageFilter: action.payload as LanguageFilter };
    },
    setAudienceSizeFilter: (
      state: FilterState,
      action: PayloadAction<string>
    ): FilterState => {
      return {
        ...state,
        audienceSizeFilter: action.payload as AudienceSizeFilter,
      };
    },
    setUserNameFilter: (
      state: FilterState,
      action: PayloadAction<string>
    ): FilterState => {
      return {
        ...state,
        userNameFilter: action.payload,
      };
    },
    setAudienceLocationFilter: (
      state: FilterState,
      action: PayloadAction<string>
    ): FilterState => {
      return {
        ...state,
        audienceLocationFilter: action.payload as AudienceLocationFilter,
      };
    },
    setTagsFilter: (
      state: FilterState,
      action: PayloadAction<string[]>
    ): FilterState => {
      return {
        ...state,
        tagsFilter: action.payload as TagsFilter[],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSocialFilter,
  setPriceFilter,
  setEngagementFilter,
  setLanguageFilter,
  setAudienceSizeFilter,
  setUserNameFilter,
  setAudienceLocationFilter,
  setTagsFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
