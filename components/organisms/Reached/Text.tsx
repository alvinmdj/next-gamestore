interface TextProps {
  title: string;
  desc: string;
}

const Text = (props: TextProps) => {
  const { title, desc } = props;
  return (
    <div className="me-lg-35 ms-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{title}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc}</p>
    </div>
  );
};

export default Text;