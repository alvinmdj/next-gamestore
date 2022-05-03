import { GetServerSideProps } from 'next';
import React from 'react';
import MemberOverview from '../../components/organisms/MemberOverview';
import Sidebar from '../../components/organisms/Sidebar';

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
  return {
    props: {},
  };
};

const Member = () => {
  return (
    <section className='overview overflow-auto'>
      <Sidebar activeMenu='overview' />
      <MemberOverview />
    </section>
  );
};

export default Member;