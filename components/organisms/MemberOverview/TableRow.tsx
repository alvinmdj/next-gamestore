/* eslint-disable @next/next/no-img-element */

import classNames from "classnames";

interface TableRowProps {
  title: string;
  category: string;
  item: number;
  price: number;
  status: 'Pending' | 'Success' | 'Failed';
  image: string;
}

const TableRow = (props: TableRowProps) => {
  const { title, category, item, price, status, image } = props;

  const statusClass = classNames({
    'float-start icon-status': true,
    'pending': status === 'Pending',
    'success': status === 'Success',
    'failed': status === 'Failed',
  });

  return (
    <tr className='align-middle'>
      <th scope='row'>
        <img className='float-start me-3 mb-lg-0 mb-3' src={`/img/${image}.png`}
          width={80} height={60} alt='game thumbnail'
        />
        <div className='game-title-header'>
          <p className='game-title fw-medium text-start color-palette-1 m-0'>
            {title}Mobile Legends: The New Battle 2021
          </p>
          <p className='text-xs fw-normal text-start color-palette-2 m-0'>{category}Desktop</p>
        </div>
      </th>
      <td>
        <p className='fw-medium color-palette-1 m-0'>{item} Gold</p>
      </td>
      <td>
        <p className='fw-medium text-start color-palette-1 m-0'>{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className='fw-medium text-start color-palette-1 m-0 position-relative'>
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;