import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { postSignUp } from '../services/auth';
import { getAllCategory } from '../services/player';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPhoto = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [favorite, setFavorite] = useState('');
  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState('/icon/upload.svg');
  const [localForm, setLocalForm] = useState({ name: '', email: '' });

  const router = useRouter();

  const getAllCategoryAPI = useCallback(async () => {
    const response = await getAllCategory();
    if (response.error) {
      toast.error('Internal server error. Failed to get categories');
    } else {
      setCategories(response.data);
      setFavorite(response.data[0]._id);
    }
  }, []);

  useEffect(() => {
    getAllCategoryAPI();
  }, [getAllCategoryAPI]);

  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form');
    if (getLocalForm) {
      setLocalForm(JSON.parse(getLocalForm!));
    } else {
      router.push('/sign-up');
    }
  }, [router]);

  const handleSubmit = async () => {
    const getLocalForm = localStorage.getItem('user-form');
    const userForm = JSON.parse(getLocalForm!);
    const data = new FormData();

    data.append('name', userForm.name);
    data.append('email', userForm.email);
    data.append('password', userForm.password);
    data.append('image', image as Blob);
    data.append('favorite', favorite);
    data.append('username', userForm.name);
    data.append('phoneNumber', '08123456789');

    const result = await postSignUp(data);
    if (result?.error) {
      toast.error(result.message);
    } else {
      toast.success('Your account has been created!');
      localStorage.removeItem('user-form');
      router.push('/sign-up-success');
    }
  };

  return (
    <section className='sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50'>
      <div className='container mx-auto'>
        <form action=''>
          <div className='form-input d-md-block d-flex flex-column'>
            <div>
              <div className='mb-20'>
                <div className='image-upload text-center'>
                  <label htmlFor='avatar'>
                    <Image
                      style={{ borderRadius: '50%' }}
                      src={imagePreview}
                      width={120}
                      height={120}
                      alt='upload'
                    />
                  </label>
                  <input
                    id='avatar'
                    name='avatar'
                    type='file'
                    accept='image/png, image/jpeg'
                    onChange={(e) => {
                      const img = e.target.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      return setImage(img);
                    }}
                  />
                </div>
              </div>
              <h2 className='fw-bold text-xl text-center color-palette-1 m-0'>
                {localForm.name}
              </h2>
              <p className='text-lg text-center color-palette-1 m-0'>
                {localForm.email}
              </p>
              <div className='pt-50 pb-50'>
                <label
                  htmlFor='category'
                  className='form-label text-lg fw-medium color-palette-1 mb-10'
                >
                  Favorite Game
                </label>
                <select
                  className='form-select d-block w-100 rounded-pill text-lg'
                  aria-label='Favorite Game'
                  value={favorite}
                  onChange={(e) => setFavorite(e.target.value)}
                >
                  {categories.map((category) => {
                    return (
                      <option
                        key={category._id}
                        value={category._id}
                      >
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className='button-group d-flex flex-column mx-auto'>
              <button
                className='btn btn-create fw-medium text-lg text-white rounded-pill mb-16'
                type='button'
                onClick={handleSubmit}
              >
                Create My Account
              </button>
              <Link href='/terms-and-conditions'>
                <a className='btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15'
                  role='button'>
                  Terms & Conditions
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignUpPhoto;