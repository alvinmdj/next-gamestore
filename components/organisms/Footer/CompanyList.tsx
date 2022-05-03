import List from './List';

const CompanyList = () => {
  return (
    <div className='col-md-4 col-6 mb-lg-0 mb-25'>
      <p className='text-lg fw-semibold color-palette-1 mb-12'>Company</p>
      <ul className='list-unstyled'>
        <List label='About Us' href='/about-us' />
        <List label='Press Release' href='/press-release' />
        <List label='Terms of Use' href='/terms-of-use' />
        <List label='Privacy & Policy' href='/privacy-policy' />
      </ul>
    </div>
  );
};

export default CompanyList;