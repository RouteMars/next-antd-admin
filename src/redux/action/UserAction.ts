import { createAsyncThunk } from '@reduxjs/toolkit';

import UserAPI from '@api/UserAPI';

import { ActionUserType } from '@type/ActionType';

const getUser = createAsyncThunk(ActionUserType.GET, async () => {
  const res = await UserAPI.getUser();
  return res.data;
});

export default {
  getUser,
};
