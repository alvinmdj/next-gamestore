import NumberFormat from "react-number-format";

interface RowProps {
  label: string;
  value: string | number;
  className?: string;
}

const Row = (props: Partial<RowProps>) => {
  const { label, value, className } = props;

  return (
    <p className='text-lg color-palette-1 mb-20'>
      {label}
      <span className={`purchase-details ${className}`}>
        {typeof value === 'string' ? (
          value
        ) : (
          <NumberFormat
            value={value}
            displayType='text'
            thousandSeparator={'.'}
            decimalSeparator={','}
            prefix='Rp '
          />
        )}
      </span>
    </p>
  );
};

export default Row;