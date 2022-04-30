import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface CallAPIProps extends AxiosRequestConfig {
  token: boolean;
}

export default async function callAPI ({
  url, method, data, token
}: CallAPIProps) {
  let headers = {};

  if (token) {
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
  return {
    error: false,
    message: 'success',
    data: response.data.data,
  };
};
