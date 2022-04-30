import callAPI from '../configs/api';
import { SignInTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const postSignUp = async (data: FormData) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: false,
  });
};

export const postSignIn = async (data: SignInTypes) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: false,
  });
};
