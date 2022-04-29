import axios from 'axios';
import { SignInTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const postSignUp = async (data: FormData) => {
  const ENDPOINT = 'auth/signup';

  const response = await axios
    .post(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`, data)
    .catch((err) => err.response);
  const axiosResponse = response.data;

  if (axiosResponse?.error === 1) {
    return axiosResponse;
  }
  return axiosResponse.data;
};

export const postSignIn = async (data: SignInTypes) => {
  const ENDPOINT = 'auth/signin';

  const response = await axios
    .post(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`, data)
    .catch((err) => err.response);

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
