import axios from 'axios';

export const getFeaturedGames = async () => {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = 'api/v1';
  const ENDPOINT = 'players/landing-page';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
};

export const getVoucherDetail = async () => {
  return null;
};
