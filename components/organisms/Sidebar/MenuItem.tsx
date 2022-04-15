import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  icon: 'ic-menu-overview' | 'ic-menu-transactions' | 'ic-menu-messages' | 'ic-menu-card' | 'ic-menu-rewards' | 'ic-menu-settings' | 'ic-menu-logout';
  active?: boolean;
  href: string;
}

const MenuItem = (props: Partial<MenuItemProps>) => {
  const { title, icon, active, href = '/member' } = props;

  const classItem = classNames({
    'item': true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classItem}>
      <div className='me-3'>
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt={title} />
      </div>
      <p className='item-title m-0'>
        <Link href={href}>
          <a className='text-lg text-decoration-none'>{title}</a>
        </Link>
      </p>
    </div>
  );
};

export default MenuItem;