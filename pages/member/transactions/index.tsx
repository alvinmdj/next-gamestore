import { GetServerSideProps } from 'next';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionContent from '../../../components/organisms/TransactionContent';

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
    props: {
      user: {},
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
