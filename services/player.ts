import axios from 'axios';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getFeaturedGames = async () => {
  const ENDPOINT = 'players/landing-page';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
};

export const getVoucherDetail = async (id: string) => {
  const ENDPOINT = `players/${id}/detail`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
};
