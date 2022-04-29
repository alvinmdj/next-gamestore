import axios from 'axios';

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

export const postSignIn = async () => {
  return null;
};