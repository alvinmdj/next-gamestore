import Sidebar from '../../../components/organisms/Sidebar';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';
import { TransactionHistoryTypes } from '../../../services/data-types';
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

interface TransactionDetailProps {
  transactionDetail: TransactionHistoryTypes;
}

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

const TransactionsDetail = (props: TransactionDetailProps) => {
  const { transactionDetail } = props;

  return (
    <>
      <Sidebar activeMenu='transactions' />
      <section className='transactions-detail overflow-auto'>
        <TransactionDetailContent data={transactionDetail} />
      </section>
    </>
  );
};

export default TransactionsDetail;
