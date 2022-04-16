import Row from "./Row";

/* eslint-disable @next/next/no-img-element */
const TransactionsDetailContent = () => {
  return (
    <main className='main-wrapper'>
      <div className='ps-lg-0'>
        <h2 className='text-4xl fw-bold color-palette-1 mb-30'>Details #PROPLAYER01</h2>
        <div className='details'>
          <div className='main-content main-content-card overflow-auto'>
            <section className='checkout mx-auto'>
              <div className='d-flex flex-row  align-items-center justify-content-between mb-30'>
                <div className='game-checkout d-flex flex-row align-items-center'>
                  <div className='pe-4'>
                    <div className='cropped'>
                      <img src='/img/Thumbnail-3.png' width='200' height='130'
                        className='img-fluid' alt='' />
                    </div>
                  </div>
                  <div>
                    <p className='fw-bold text-xl color-palette-1 mb-10'>
                      Mobile Legends:<br /> The New Battle 2021
                    </p>
                    <p className='color-palette-2 m-0'>Category: Mobile</p>
                  </div>
                </div>
                <div>
                  <p className='fw-medium text-center label pending m-0 rounded-pill'>Pending</p>
                </div>
              </div>
              <hr />
              <div className='purchase pt-30'>
                <h2 className='fw-bold text-xl color-palette-1 mb-20'>Purchase Details</h2>
                <Row label='Your Game ID' value='veiros' />
                <Row label='Order ID' value='#PROPLAYER01' />
                <Row label='Item' value='250 Diamonds' />
                <Row label='Price' value={42000000} />
                <Row label='Tax (10%)' value={42000000} />
                <Row label='Total' value={42000000} className='color-palette-4' />
              </div>
              <div className='payment pt-10 pb-10'>
                <h2 className='fw-bold text-xl color-palette-1 mb-20'>Payment Informations</h2>
                <Row label='Your Account Name' value='Veiros Osv' />
                <Row label='Type' value='Worldwide Transfer' />
                <Row label='Bank Name' value='Mandiri' />
                <Row label='Bank Account Name' value='PT Alvin Game Store' />
                <Row label='Bank Number' value='1234 - 5678 - 9012' />
              </div>
              <div className='d-md-block d-flex flex-column w-100'>
                <a className='btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg' href='#'
                  role='button'>Contact Admin (Whatsapp)</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TransactionsDetailContent;