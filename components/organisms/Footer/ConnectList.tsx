import List from './List';

const ConnectList = () => {
  return (
    <div className='col-md-4 col-12 mt-lg-0 mt-md-0 mt-25'>
      <p className='text-lg fw-semibold color-palette-1 mb-12'>Connect</p>
      <ul className='list-unstyled'>
        <List label='alvin@gamestore.com' href='mailto: alvin@gamestore.com' />
        <List label='team@gamestore.com' href='mailto: team@gamestore.com' />
        <List label='Pasific 12, Tokyo' href='http://maps.google.com/?q=Pasific 12, Jakarta Selatan' />
        <List label='021 - 1234 - 5678' href='tel: 02112345678' />
      </ul>
    </div>
  );
};

export default ConnectList;