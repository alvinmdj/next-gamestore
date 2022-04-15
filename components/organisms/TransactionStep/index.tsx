import StepItem from "../../molecules/StepItem";

const TransactionStep = () => {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
      <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
        It’s Really That
        <br/>
        Easy to Win the Game
      </h2>
      <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem
            icon='step-1'
            title='1. Start'
            desc1='Choose the game'
            desc2='you want to top up'
          />
          <StepItem
            icon='step-2'
            title='2. Fill Up'
            desc1='Top up according to'
            desc2='the available nominal'
          />
          <StepItem
            icon='step-3'
            title='3. Be a Winner'
            desc1='All good and ready'
            desc2='to step up your game'
          />
        </div>
      </div>
    </section>
  );
};

export default TransactionStep;