import Link from 'next/link';
import { useState } from 'react';
import { postSignIn } from '../../../services/auth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSignIn = async () => {
    const data = { email, password };
    if (!email || !password) {
      toast.error('Please fill all fields');
    } else {
      const response = await postSignIn(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success('Login Successful');
        const { token } = response.data;
        const tokenBase64 = Buffer.from(token, 'utf-8').toString('base64'); // btoa is deprecated
        Cookies.set('token', tokenBase64, { expires: 7 }); // 7 days
        router.push('/');
      }
    }
  };

  return (
    <>
      <h2 className='text-4xl fw-bold color-palette-1 mb-10'>Sign In</h2>
      <p className='text-lg color-palette-1 m-0'>Sign in to proceeds with top up</p>
      <div className='pt-50'>
        <label className='form-label text-lg fw-medium color-palette-1 mb-10'>
          Email Address
        </label>
        <input
          type='email'
          className='form-control rounded-pill text-lg'
          placeholder='Enter your email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='pt-30'>
        <label className='form-label text-lg fw-medium color-palette-1 mb-10'>
          Password
        </label>
        <input
          type='password'
          className='form-control rounded-pill text-lg'
          placeholder='Your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='button-group d-flex flex-column mx-auto pt-50'>
        <button
          type='button'
          className='btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16'
          onClick={handleSignIn}
        >
          Continue to Sign In
        </button>
        <Link href='/sign-up'>
          <a className='btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill'>
            Sign Up
          </a>
        </Link>
      </div>
    </>
  );
};

export default SignInForm;
