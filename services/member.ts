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

export const getMemberTransactions = async () => {
  const url = `${ROOT_API}/${API_VERSION}/players/history`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
};
