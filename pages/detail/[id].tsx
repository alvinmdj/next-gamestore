import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import TopUpForm from '../../components/organisms/TopUpForm';
import TopUpItem from '../../components/organisms/TopUpItem';
import { getVoucherDetail } from '../../services/player';
import { toast } from 'react-toastify';

const Detail: React.FC = () => {
  const { query, isReady } = useRouter();

  const [voucherData, setVoucherData] = useState({
    name: '',
    thumbnail: '',
    category: { name: '' },
  });

  const [nominals, setNominals] = useState([]);
  const [payments, setPayments] = useState([]);

  const getVoucherDetailAPI = useCallback(async (id: string) => {
    const response = await getVoucherDetail(id);
    if (response.error) {
      toast.error('Internal server error. Failed to get voucher detail');
    } else {
      setVoucherData(response.data.voucher);
      localStorage.setItem('voucher-data', JSON.stringify(response.data.voucher));
      setNominals(response.data.voucher.nominals);
      setPayments(response.data.payment);
    }
  }, []);
  
  useEffect(() => {
    if (isReady) {
      getVoucherDetailAPI(query.id as string);
    }
  }, [isReady, query, getVoucherDetailAPI]);

  return (
    <>
      <Navbar />
      <section className='detail pt-lg-60 pb-50'>
        <div className='container-xxl container-fluid'>
          <div className='detail-header pb-50'>
            <h2 className='text-4xl fw-bold color-palette-1 text-start mb-10'>Top Up</h2>
            <p className='text-lg color-palette-1 mb-0'>Perkuat akun dan jadilah pemenang</p>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start'>
              <TopUpItem data={voucherData} type='mobile' />
            </div>
            <div className='col-xl-9 col-lg-8 col-md-7 ps-md-25'>
              <TopUpItem data={voucherData} type='desktop' />
              <hr/>
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Detail;