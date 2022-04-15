import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CheckoutConfirmation from '../components/organisms/CheckoutConfirmation'
import CheckoutDetail from '../components/organisms/CheckoutDetail'
import CheckoutItem from '../components/organisms/CheckoutItem'

const Checkout: React.FC = () => {
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

export default Checkout