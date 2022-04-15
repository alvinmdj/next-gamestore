import Line from "./Line";
import Text from "./Text";

const Reached = () => {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <Text title='290M+' desc='Players Top Up' />
          <Line />
          <Text title='12.500' desc='Games Available' />
          <Line />
          <Text title='99.9%' desc='Happy Players' />
          <Line />
          <Text title='4.9' desc='Worldwide Rating' />
        </div>
      </div>
		</section>
  );
};

export default Reached;