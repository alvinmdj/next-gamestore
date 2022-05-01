import jwtDecode from 'jwt-decode';
import { GetServerSideProps } from 'next';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionContent from '../../../components/organisms/TransactionContent';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies; // get token from cookie (server side)
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, 'base64').toString('utf-8');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  if (userFromPayload.avatar) {
    const IMG_ROOT = process.env.NEXT_PUBLIC_IMG;
    userFromPayload.avatar = `${IMG_ROOT}/${userFromPayload.avatar}`;
  }
  return {
    props: {
      user: userFromPayload,
    },
  };
};

const Transactions = () => {
  return (
    <>
      <Sidebar activeMenu='transactions' />
      <TransactionContent />
    </>
  );
};

export default Transactions;
