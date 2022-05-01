import jwtDecode from 'jwt-decode';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionsDetailContent from '../../../components/organisms/TransactionsDetailContent';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';
import { getMemberTransactionDetail } from '../../../services/member';

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    trxId: string;
  };
};

export const getServerSideProps = async ({ req, params }: GetServerSideProps) => {
  const { trxId } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  // get user data from token
  const jwtToken = Buffer.from(token, 'base64').toString('utf-8');

  // get transactions data
  const response = await getMemberTransactionDetail(trxId, jwtToken);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
};

const TransactionsDetail = ({ transactionDetail }) => {
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
