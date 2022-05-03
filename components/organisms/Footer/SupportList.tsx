import List from './List';

const SupportList = () => {
  return (
    <div className='col-md-4 col-6 mb-lg-0 mb-25'>
      <p className='text-lg fw-semibold color-palette-1 mb-12'>Support</p>
      <ul className='list-unstyled'>
        <List label='Refund Policy' href='/refund-policy' />
        <List label='Unlock Rewards' href='/unlock-rewards' />
        <List label='Live Chatting' href='/live-chat' />
      </ul>
    </div>
  );
};

export default SupportList;