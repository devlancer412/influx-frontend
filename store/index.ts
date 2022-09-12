import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './slices/filterSlice';
import usersSlice from './slices/usersSlice';
import campaignSlice from './slices/campaignSlice';
import influencesSlice from './slices/influencesSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    users: usersSlice,
    campaigns: campaignSlice,
    influences: influencesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
