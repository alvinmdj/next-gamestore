/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Link from 'next/link';
import NumberFormat from 'react-number-format';

interface TableRowProps {
  id: string;
  image: string;
  title: string;
  category: string;
  item: string;
  price: number;
  status: string;
}

const TableRow = (props: TableRowProps) => {
  const { id, image, title, category, item, price, status } = props;

  const statusClass = classNames({
    'float-start icon-status': true,
    'pending': status === 'pending',
    'success': status === 'success',
    'failed': status === 'failed',
  });

  return (
    <tr data-category='pending' className='align-middle'>
      <th scope='row'>
        <img
          className='float-start me-3 mb-lg-0 mb-3 img-fluid'
          src={image}
          width='80'
          height='60'
          alt={title}
        />
        <div className='game-title-header'>
          <p className='game-title fw-medium text-start color-palette-1 m-0'>
            {title}
          </p>
          <p className='text-xs fw-normal text-start color-palette-2 m-0'>{category}</p>
        </div>
      </th>
      <td>
        <p className='fw-medium color-palette-1 m-0'>{item}</p>
      </td>
      <td>
        <p className='fw-medium color-palette-1 m-0'>
          <NumberFormat
            value={price}
            displayType='text'
            thousandSeparator={'.'}
            decimalSeparator={','}
            prefix='Rp '
          />
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p
            className='fw-medium text-start color-palette-1 m-0 position-relative'
            style={{ textTransform: 'capitalize' }}
          >
            {status}
          </p>
        </div>
      </td>
      <td>
        <Link href={`/member/transactions/${id}`}>
          <a className='btn btn-status rounded-pill text-sm'>Details</a>
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;