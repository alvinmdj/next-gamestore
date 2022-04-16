import React from 'react';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionsDetailContent from '../../../components/organisms/TransactionsDetailContent';

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