import callAPI from '../configs/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getMemberOverview = async () => {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
};

export const getMemberTransactions = async (paramsValue: string) => {
  let params = '';
  if (paramsValue === 'all') {
    params = '';
  } else {
    params = `?status=${paramsValue}`;
  }

  const url = `${ROOT_API}/${API_VERSION}/players/history${params}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
};

export const getMemberTransactionDetail = async (id: string, token: string) => {
  const url = `${ROOT_API}/${API_VERSION}/players/history/${id}/detail`;

  return callAPI({
    url,
    method: 'GET',
    serverToken: token,
  });
};

export const putMemberUpdateProfile = async (data: FormData) => {
  const url = `${ROOT_API}/${API_VERSION}/players/profile`;

  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
};
