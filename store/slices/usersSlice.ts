import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type User = {
  name: string;
};

type UsersState = User[];

const initialState: UsersState = [
  {
    name: 'Alice',
  },
  {
    name: 'Bob',
  },
  {
    name: 'Vault',
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (
      state: UsersState,
      action: PayloadAction<User[]>
    ): UsersState => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
