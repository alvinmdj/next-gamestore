import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
const CheckoutItem = () => {
  const [voucherData, setVoucherData] = useState({
    thumbnail: '',
    name: '',
    category: {
      name: '',
    },
  });

  const IMG_ROOT = process.env.NEXT_PUBLIC_IMG;

  useEffect(() => {
    const dataFromLocal = localStorage.getItem('voucher-data');
    const localVoucherData = JSON.parse(dataFromLocal!);
    setVoucherData(localVoucherData);
  }, []);

  return (
    <div className='game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30'>
      <div className='pe-4'>
        <div className='cropped'>
          <img src={`${IMG_ROOT}/${voucherData.thumbnail}`} className='img-fluid' alt={voucherData.name} />
        </div>
      </div>
      <div>
        <p className='fw-bold text-xl color-palette-1 mb-10'>
          {voucherData.name}
        </p>
        <p className='color-palette-2 m-0'>
          Category:
          {' '}
          {voucherData.category.name}
        </p>
      </div>
    </div>
  );
};

export default CheckoutItem;