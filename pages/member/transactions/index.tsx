import React from 'react';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionContent from '../../../components/organisms/TransactionContent';

const Transactions: React.FC = () => {
  return (
    <>
      <Sidebar activeMenu='transactions' />
      <TransactionContent />
    </>
  );
};

export default Transactions;