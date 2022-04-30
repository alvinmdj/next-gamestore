/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='sidebar-footer pe-30'>
      <div className='footer-card'>
        <div className='d-flex justify-content-between mb-20'>
          <img src='/icon/top-up.svg' width={50} height={50} alt='' />
          <p className='fw-medium color-palette-1'>
            Top Up &
            <br />
            Be The Winner
          </p>
        </div>
        <Link href='/'>
          <a className='btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill'
            role='button'>
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;