import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

const Sidebar = (props: SidebarProps) => {
  const { activeMenu } = props;

  const router = useRouter();

  const handleSignOut = () => {
    Cookies.remove('token');
    router.push('/');
  };

  return (
    <section className='sidebar'>
      <div className='content pt-50 pb-30 ps-30'>
        <Profile />
        <div className='menus'>
          <MenuItem title='Overview' icon='ic-menu-overview' active={activeMenu === 'overview'} href='/member' />
          <MenuItem title='Transactions' icon='ic-menu-transactions' active={activeMenu === 'transactions'} href='/member/transactions' />
          <MenuItem title='Settings' icon='ic-menu-settings' active={activeMenu === 'settings'} href='/member/edit-profile' />
          <MenuItem title='Log Out' icon='ic-menu-logout' onClick={handleSignOut} />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Sidebar;