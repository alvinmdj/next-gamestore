import { useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutConfirmation = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = () => {
    const localVoucherData = localStorage.getItem('voucher-data');
    const localTopUpData = localStorage.getItem('top-up-data');

    const voucherData = JSON.parse(localVoucherData!);
    const topUpData = JSON.parse(localTopUpData!);

    if (!isChecked) {
      toast.error('Please make sure you have transferred the money');
      return;
    }
    const data = {
      'voucher': voucherData._id,
      'nominal': topUpData.nominalItem._id,
      'payment': topUpData.paymentItem.payment._id,
      'bank': topUpData.paymentItem.bank._id,
      'name': topUpData.bankAccountName,
      'userAccount': topUpData.verifyID,
    };
    console.log('data:', data);
  };

  return (
    <>
      <label className='checkbox-label text-lg color-palette-1'>
        I have transferred the money
        {' '}
        <input
          type='checkbox'
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className='checkmark'></span>
      </label>
      <div className='d-md-block d-flex flex-column w-100 pt-50'>
        <button
          type='button'
          className='btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg'
          onClick={handleSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
};

export default CheckoutConfirmation;