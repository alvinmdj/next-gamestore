import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TopUpCategoryTypes, TransactionHistoryTypes } from "../../../services/data-types";
import { getMemberOverview } from "../../../services/member";
import Category from "./Category";
import TableRow from "./TableRow";

const MemberOverview = () => {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const getMemberOverviewAPI = useCallback(async () => {
		const response = await getMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      setCount(response.data.count);
      setData(response.data.data);
    }
	}, []);

	useEffect(() => {
		getMemberOverviewAPI();
	}, [getMemberOverviewAPI]);

  const ROOT_IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <main className='main-wrapper'>
      <div className='ps-lg-0'>
        <h2 className='text-4xl fw-bold color-palette-1 mb-30'>Overview</h2>
        <div className='top-up-categories mb-30'>
          <p className='text-lg fw-medium color-palette-1 mb-14'>Top Up Categories</p>
          <div className='main-content'>
            <div className='row'>
              {count.map((item: TopUpCategoryTypes) => {
                return (
                  <Category
                    key={item._id}
                    nominal={item.value}
                    icon='ic-desktop'
                  >
                    {item.name}
                  </Category>
                );
              })}
            </div>
          </div>
        </div>
        <div className='latest-transaction'>
          <p className='text-lg fw-medium color-palette-1 mb-14'>Latest Transactions</p>
          <div className='main-content main-content-table overflow-auto'>
            <table className='table table-borderless'>
              <thead>
                <tr className='color-palette-1'>
                  <th className='text-start' scope='col'>Game</th>
                  <th scope='col'>Item</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: TransactionHistoryTypes) => {
                  return (
                    <TableRow
                      key={item._id}
                      title={item.topUpHistory.gameName}
                      category={item.topUpHistory.category}
                      item={`${item.topUpHistory.coinQuantity} ${item.topUpHistory.coinName}`}
                      price={item.value}
                      status={item.status}
                      image={`${ROOT_IMG}/${item.topUpHistory.thumbnail}`}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MemberOverview;