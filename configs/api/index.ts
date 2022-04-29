import axios, { AxiosRequestConfig } from 'axios';

export default async function callAPI ({ url, method, data }: AxiosRequestConfig) {
  const response = await axios({
    url,
    method,
    data,
  }).catch((err) => err.response);

  if (response?.status > 300) {
    return {
      error: true,
      message: response.data.message,
      data: null,
    };
  }
  return {
    error: false,
    message: 'Login Success',
    data: response.data.data,
  };
};
