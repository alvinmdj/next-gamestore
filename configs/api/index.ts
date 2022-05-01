import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
};

export default async function callAPI ({
  url, method, data, token, serverToken,
}: CallAPIProps) {
  let headers = {};

  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    const tokenCookies = Cookies.get('token');
    if (tokenCookies) {
      const jwtToken = Buffer.from(tokenCookies, 'base64').toString('utf-8');
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (response?.status > 300) {
    return {
      error: true,
      message: response.data.message,
      data: null,
    };
  }

  const { length } = Object.keys(response.data);

  return {
    error: false,
    message: 'success',
    data: length > 1 ? response.data : response.data.data,
  };
};
