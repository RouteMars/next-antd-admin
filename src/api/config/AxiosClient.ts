import axios from 'axios';

import Common from '@util/Common';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  // timeout: 1000,
  headers: {
    Accept: 'application/json',
    // 'Authorization': 'XXXXXX'
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    Common.debug('~~~~~ axiosClient interceptors.request');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  function (response) {
    Common.debug('~~~~~ axiosClient interceptors.response');
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosClient;
