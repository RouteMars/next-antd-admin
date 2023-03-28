import axiosClient from '@api/config/AxiosClient';

import { UserModel } from '@type/model/UserModel';

const getUser = async () => {
  return await axiosClient.get<UserModel>('/todos/1');
};

export default {
  getUser,
};
