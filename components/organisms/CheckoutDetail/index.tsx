import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

const CheckoutDetail = () => {
  const [topUpData, setTopUpData] = useState({
    verifyID: '',
    nominalItem: {
      _id: '',
      coinName: '',
      coinQuantity: 0,
      price: 0,
    },
    paymentItem: {
      payment: {
        _id: '',
        type: '',
      },
      bank: {
        _id: '',
        bankName: '',
        accountNumber: '',
        name: '',
      },
    },
    bankAccountName: '',
  });

  useEffect(() => {
    const dataFromLocal = localStorage.getItem('top-up-data');
    const localTopUpData = JSON.parse(dataFromLocal!);
    setTopUpData(localTopUpData);
  }, []);

  const itemPrice = topUpData.nominalItem.price;
  const tax = topUpData.nominalItem.price * (10 / 100);
  const totalPrice = itemPrice + tax;

  return (
    <>
      <div className='purchase pt-md-50 pt-30'>
        <h2 className='fw-bold text-xl color-palette-1 mb-20'>
          Purchase Details
        </h2>
        <p className='text-lg color-palette-1 mb-20'>
          Your Game ID
          <span className='purchase-details'>
            {topUpData.verifyID}
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Order ID
          <span className='purchase-details'>#GG001</span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Item
          <span className='purchase-details'>
            {topUpData.nominalItem.coinQuantity}
            {' '}
            {topUpData.nominalItem.coinName}
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Price
          <span className='purchase-details'>
            <NumberFormat
              value={itemPrice}
              displayType='text'
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix='Rp '
            />
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Tax (10%)
          <span className='purchase-details'>
            <NumberFormat
              value={tax}
              displayType='text'
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix='Rp '
            />
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Total
          <span className='purchase-details color-palette-4'>
            <NumberFormat
              value={totalPrice}
              displayType='text'
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix='Rp '
            />
          </span>
        </p>
      </div>
      <div className='payment pt-md-50 pb-md-50 pt-10 pb-10'>
        <h2 className='fw-bold text-xl color-palette-1 mb-20'>
          Payment Informations
        </h2>
        <p className='text-lg color-palette-1 mb-20'>
          Your Account Name
          <span className='purchase-details'>
            {topUpData.bankAccountName}
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Type
          <span className='payment-details'>
            {topUpData.paymentItem.payment.type}
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Bank Name
          <span className='payment-details'>
            {topUpData.paymentItem.bank.bankName}
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Bank Account Name
          <span className='payment-details'>
            {topUpData.paymentItem.bank.name}
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Bank Number
          <span className='payment-details'>
            {topUpData.paymentItem.bank.accountNumber}
          </span>
        </p>
      </div>
    </>
  );
};

export default CheckoutDetail;
