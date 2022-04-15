import Image from 'next/image';
import Link from 'next/link';
import CompanyList from './CompanyList';
import ConnectList from './ConnectList';
import SupportList from './SupportList';

const Footer = () => {
  return (
    <section className='footer pt-50'>
      <footer>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4 text-lg-start text-center'>
              <Link href='/'>
                <a className='mb-30'>
                  <Image src='/icon/logo.svg' width={60} height={60} alt='logo' />
                </a>
              </Link>
              <p className='mt-30 text-lg color-palette-1 mb-30'>
                Game Store help gamers
                <br/>
                {' '}
                become the best
              </p>
              <p className='mt-30 text-lg color-palette-1 mb-30'>Copyright 2022. All Rights Reserved.</p>
            </div>
            <div className='col-lg-8 mt-lg-0 mt-20'>
              <div className='row gap-sm-0'>
                <CompanyList />
                <SupportList />
                <ConnectList />
              </div>
            </div>
          </div>
        </div>
      </footer>
		</section>
  );
};

export default Footer;
