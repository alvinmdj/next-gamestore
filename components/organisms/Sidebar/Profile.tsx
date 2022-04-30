import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";

/* eslint-disable @next/next/no-img-element */
const Profile = () => {
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    email: '',
  });
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = Buffer.from(token, 'base64').toString('utf-8');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      if (userFromPayload.avatar) {
        const IMG_ROOT = process.env.NEXT_PUBLIC_IMG;
        userFromPayload.avatar = `${IMG_ROOT}/${userFromPayload.avatar}`;
      }
      setUser(userFromPayload);
    }
  }, []);

  return (
    <div className='user text-center pb-50 pe-30'>
      <img
        src={user.avatar ? user.avatar : '/img/avatar-1.png'}
        width='90'
        height='90'
        className='img-fluid mb-20'
        style={{ borderRadius: '50%' }}
        alt='avatar'
      />
      <h2 className='fw-bold text-xl color-palette-1 m-0'>{user.name}</h2>
      <p className='color-palette-2 m-0'>{user.email}</p>
    </div>
  );
};

export default Profile;