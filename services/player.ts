import callAPI from '../configs/api';
import { CheckoutTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getFeaturedGames = async () => {
  const url = `${ROOT_API}/${API_VERSION}/players/landing-page`;
  return callAPI({ url, method: 'GET' });
};

export const getVoucherDetail = async (id: string) => {
  const url = `${ROOT_API}/${API_VERSION}/players/${id}/detail`;
  return callAPI({ url, method: 'GET' });
};

export const getAllCategory = async () => {
  const url = `${ROOT_API}/${API_VERSION}/players/category`;
  return callAPI({ url, method: 'GET' });
};

export const postCheckout = async (data: CheckoutTypes) => {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`;
  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
};
