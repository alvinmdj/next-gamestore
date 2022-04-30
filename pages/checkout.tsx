import jwtDecode from 'jwt-decode'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CheckoutConfirmation from '../components/organisms/CheckoutConfirmation'
import CheckoutDetail from '../components/organisms/CheckoutDetail'
import CheckoutItem from '../components/organisms/CheckoutItem'
import { JWTPayloadTypes, UserTypes } from '../services/data-types'

interface CheckoutProps {
  user: UserTypes;
};

// * note: console.log in getServerSideProps will appear in terminal
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies; // get token from cookie (server side)
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, 'base64').toString('utf-8');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  if (userFromPayload.avatar) {
    const IMG_ROOT = process.env.NEXT_PUBLIC_IMG;
    userFromPayload.avatar = `${IMG_ROOT}/${userFromPayload.avatar}`;
  }
  return {
    props: {
      user: userFromPayload,
    },
  };
};

const Checkout = (props: CheckoutProps) => {
  const { user } = props;

  return (
    <section className='checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30'>
      <div className='container-fluid'>
        <div className='logo text-md-center text-start pb-50'>
          <Link href='/'>
            <a><Image src='/icon/logo.svg' width={60} height={60} alt='logo' /></a>
          </Link>
        </div>
        <div className='title-text pt-md-50 pt-0'>
          <h2 className='text-4xl fw-bold color-palette-1 mb-10'>Checkout</h2>
          <p className='text-lg color-palette-1 mb-0'>Time to step up your game</p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetail />
        <CheckoutConfirmation />
      </div>
    </section>
  )
}

export default Checkout;
