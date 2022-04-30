import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

interface JwtPayloadTypes {
  player: {
    avatar: string;
  }
}

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ avatar: '' });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = Buffer.from(token, 'base64').toString('utf-8'); // atob is deprecated
      const payload: JwtPayloadTypes = jwt_decode(jwtToken);
      const user = payload.player;
      if (user.avatar) {
        const IMG_ROOT = process.env.NEXT_PUBLIC_IMG;
        user.avatar = `${IMG_ROOT}/${user.avatar}`;
      }
      setIsLoggedIn(true);
      setUser(user);
    }
  }, []);

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
            <li><Link href='/member'><a className='dropdown-item text-lg color-palette-2'>My Profile</a></Link></li>
            <li><Link href='/member/edit-profile'><a className='dropdown-item text-lg color-palette-2'>Account Settings</a></Link></li>
            <li><Link href='/sign-in'><a className='dropdown-item text-lg color-palette-2'>Log Out</a></Link></li>
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