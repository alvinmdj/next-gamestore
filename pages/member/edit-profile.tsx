/* eslint-disable @next/next/no-img-element */
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../../components/atoms/Input';
import Sidebar from '../../components/organisms/Sidebar';
import { JWTPayloadTypes, UserTypes } from '../../services/data-types';
import { putMemberUpdateProfile } from '../../services/member';

const EditProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    avatar: '',
  });
  const [imagePreview, setImagePreview] = useState(null);

  const router = useRouter();

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

  const handleSubmit = async () => {
    console.log('user:', user);
    const data = new FormData();
    data.append('name', user.name);
    data.append('phoneNumber', user.phoneNumber);
    if (imagePreview) {
      data.append('image', user.avatar);
    }

    const response = await putMemberUpdateProfile(data);
    if (response.error) {
      console.log('data:', response); 
      toast.error('Internal server error. Failed to update profile');
    } else {
      toast.success('Your profile has been updated! Please login again.');
      Cookies.remove('token');
      router.push('/sign-in');
    }
  };

  const ROOT_IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <>
      <Sidebar activeMenu='settings' />
      <section className='edit-profile overflow-auto'>
        <main className='main-wrapper'>
          <div className='ps-lg-0'>
            <h2 className='text-4xl fw-bold color-palette-1 mb-30'>Settings</h2>
            <div className='bg-card pt-30 ps-30 pe-30 pb-30'>
              <form action=''>
                <div className='photo d-flex'>
                  {/* <div className='position-relative me-20'>
                    <img src='/img/avatar-1.png' width='90' height='90' className='avatar img-fluid' alt='avatar' />
                    <div className='avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center'>
                      <img src='/icon/ic-trash.svg' alt='delete' />
                    </div>
                  </div> */}
                  <div className='image-upload'>
                    <label htmlFor='avatar'>
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          width={90}
                          height={90}
                          style={{ borderRadius: '50%' }}
                          alt='upload'
                        />
                      ) : (
                        <img
                          src={user.avatar ? user.avatar : '/img/avatar-1.png'}
                          width={90}
                          height={90}
                          style={{ borderRadius: '50%' }}
                          alt='upload'
                        />
                      )}
                    </label>
                    <input
                      id='avatar'
                      type='file'
                      name='avatar'
                      accept='image/png, image/jpeg'
                      onChange={(e) => {
                        const img = e.target.files![0];
                        setImagePreview(URL.createObjectURL(img));
                        return setUser({ ...user, avatar: img });
                      }}
                    />
                  </div>
                </div>
                <div className='pt-30'>
                  <Input
                    label='Full Name'
                    placeholder='Enter your name'
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </div>
                <div className='pt-30'>
                  <Input
                    label='Email Address'
                    placeholder='Enter your email address'
                    value={user.email}
                    disabled
                  />
                </div>
                <div className='pt-30'>
                  <Input
                    label='Phone Number'
                    placeholder='Enter your phone number'
                    value={user.phoneNumber}
                    onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                  />
                </div>
                <div className='button-group d-flex flex-column pt-50'>
                  <button
                    type='button'
                    className='btn btn-save fw-medium text-lg text-white rounded-pill'
                    onClick={handleSubmit}
                  >
                    Update My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default EditProfile;
