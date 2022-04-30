import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const className = {
    label: classNames('form-label text-lg fw-medium color-palette-1 mb-10')
  };

  const handleSubmit = () => {
    if (name && email && password) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email)) {
        toast.error('Email is not valid');
      } else {
        const userForm = { name, email, password };
        localStorage.setItem('user-form', JSON.stringify(userForm));
        router.push('/sign-up-photo');
      }
    } else {
      toast.error('Please fill all the form');
    }
  };

  return (
    <>
      <h2 className='text-4xl fw-bold color-palette-1 mb-10'>Sign Up</h2>
      <p className='text-lg color-palette-1 m-0'>Sign up and join our journey</p>
      <div className='pt-50'>
        <label className={className.label}>Full Name</label>
        <input
          type='text'
          className='form-control rounded-pill text-lg'
          aria-describedby='name'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='pt-30'>
        <label className={className.label}>Email Address</label>
        <input
          type='email'
          className='form-control rounded-pill text-lg'
          aria-describedby='email'
          placeholder='Enter your email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='pt-30'>
        <label className={className.label}>Password</label>
        <input
          type='password'
          className='form-control rounded-pill text-lg'
          aria-describedby='password'
          placeholder='Your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='button-group d-flex flex-column mx-auto pt-50'>
        <button
          type='button'
          className='btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16'
          onClick={handleSubmit}
        >
          Continue
        </button>
        <Link href='/sign-in'>
          <a
            className='btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill'
            role='button'
          >
            Sign In
          </a>
        </Link>
      </div>
    </>
  );
};

export default SignUpForm;
