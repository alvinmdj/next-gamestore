import React from 'react';
import MemberOverview from '../../components/organisms/MemberOverview';
import Sidebar from '../../components/organisms/Sidebar';

const Member: React.FC = () => {
  return (
    <section className='overview overflow-auto'>
      <Sidebar activeMenu='overview' />
      <MemberOverview />
    </section>
  );
};

export default Member;