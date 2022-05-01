import jwtDecode from 'jwt-decode';
import { GetServerSideProps } from 'next';
import React from 'react';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionsDetailContent from '../../../components/organisms/TransactionsDetailContent';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;
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

const TransactionsDetail: React.FC = () => {
  return (
    <>
      <Sidebar activeMenu='transactions' />
      <section className='transactions-detail overflow-auto'>
        <TransactionsDetailContent />
      </section>
    </>
  );
};

export default TransactionsDetail;