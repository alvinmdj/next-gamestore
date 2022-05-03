import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';
import { useRouter } from 'next/router';

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ avatar: '' });

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = Buffer.from(token, 'base64').toString('utf-8'); // atob is deprecated
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      if (userFromPayload.avatar) {
        const IMG_ROOT = process.env.NEXT_PUBLIC_IMG;
        userFromPayload.avatar = `${IMG_ROOT}/${userFromPayload.avatar}`;
      }
      setIsLoggedIn(true);
      setUser(userFromPayload);
    }
  }, []);

  const handleSignOut = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  if (isLoggedIn) {
    return (
      <li className='nav-item my-auto dropdown d-flex'>
        <div className='vertical-line d-lg-block d-none'></div>
        <div>
          <a className='dropdown-toggle ms-lg-40' href='#' role='button' id='dropdownMenuLink'
            data-bs-toggle='dropdown' aria-expanded='false'>
            <Image
              src={user.avatar ? user.avatar : '/img/avatar-1.png'}
              className='rounded-circle'
              width='40'
              height='40'
              alt='avatar'
            />
          </a>
          <ul className='dropdown-menu border-0' aria-labelledby='dropdownMenuLink'>
            <li><Link href='/member'><a className='dropdown-item text-lg color-palette-2'>My Dashboard</a></Link></li>
            <li><Link href='/member/edit-profile'><a className='dropdown-item text-lg color-palette-2'>Account Settings</a></Link></li>
            <li onClick={handleSignOut}><button type='button' className='dropdown-item text-lg color-palette-2'>Log Out</button></li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className='nav-item my-auto'>
      <Link href='/sign-in'>
        <a className='btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill'>
          Sign In
        </a>
      </Link>
    </li>
  );
};

export default Auth;
