import { useCallback, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import { TransactionHistoryTypes } from "../../../services/data-types";
import { getMemberTransactions } from "../../../services/member";
import ButtonTab from "./ButtonTab";
import TableRow from "./TableRow";

const TransactionContent = () => {
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [currentTab, setCurrentTab] = useState('all');

  const getMemberTransactionsAPI = useCallback(async (value: string) => {
		const response = await getMemberTransactions(value);
    if (response.error) {
      toast.error(response.message);
    } else {
      setTotal(response.data.total);
      setTransactions(response.data.data);
    }
	}, []);

  useEffect(() => {
    getMemberTransactionsAPI(currentTab);
  }, [getMemberTransactionsAPI, currentTab]);

  const tabClickHandler = (value: string) => {
    setCurrentTab(value);
    getMemberTransactionsAPI(value);
  };

  const ROOT_IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <section className="transactions overflow-auto">
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
          <div className="mb-30">
            <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
            <h3 className="text-5xl fw-medium color-palette-1">
              <NumberFormat
                value={total}
                displayType='text'
                thousandSeparator={'.'}
                decimalSeparator={','}
                prefix='Rp '
              />
            </h3>
          </div>
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <div id="list_status_title">
                <ButtonTab onClick={() => tabClickHandler('all')} title='All Trx' active={currentTab === 'all'} />
                <ButtonTab onClick={() => tabClickHandler('success')} title='Success' active={currentTab === 'success'} />
                <ButtonTab onClick={() => tabClickHandler('pending')} title='Pending' active={currentTab === 'pending'} />
                <ButtonTab onClick={() => tabClickHandler('failed')} title='Failed' active={currentTab === 'failed'} />
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="" scope="col">Game</th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="list_status_item">
                  {transactions.map((trx: TransactionHistoryTypes) => {
                    return (
                      <TableRow
                        key={trx._id}
                        id={trx._id}
                        image={`${ROOT_IMG}/${trx.topUpHistory.thumbnail}`}
                        title={trx.topUpHistory.gameName}
                        category={trx.topUpHistory.category}
                        item={`${trx.topUpHistory.coinQuantity} ${trx.topUpHistory.coinName}`}
                        price={trx.value}
                        status={trx.status}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TransactionContent;
