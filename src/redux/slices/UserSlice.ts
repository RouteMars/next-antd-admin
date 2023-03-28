import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import UserAction from '@redux/action/UserAction';

import { ActionUserType } from '@type/ActionType';
import { UserModel } from '@type/model/UserModel';

interface UserState {
  user?: UserModel;
  id: string;
}

const initialState: UserState = {
  id: 'test123',
};

const userSlice = createSlice({
  name: ActionUserType.NAME,
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UserAction.getUser.pending, (state) => {
      // 'pending';
      console.log('pending');
    });
    builder.addCase(UserAction.getUser.fulfilled, (state, action) => {
      // 'succeeded';
      console.log('succeeded');
      state.user = action.payload;
    });
    builder.addCase(UserAction.getUser.rejected, (state) => {
      // 'failed';
      console.log('failed');
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
