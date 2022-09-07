import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type SocialFilterProps = {
  iconUrl: string;
  title: string;
  selected: boolean;
};

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

type FilterState = {
  socialFilters: SocialFilterProps[];
};

const initialState: FilterState = {
  socialFilters: initSocialFilters,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSocialFilter: (
      state: FilterState,
      action: PayloadAction<SetSocialFilterPayload>
    ) => {
      return {
        ...state,
        socialFilters: state.socialFilters.map((filter: SocialFilterProps) =>
          filter.title == action.payload.filterTitle
            ? { ...filter, selected: action.payload.value }
            : { ...filter }
        ),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSocialFilter } = userSlice.actions;

export default userSlice.reducer;
