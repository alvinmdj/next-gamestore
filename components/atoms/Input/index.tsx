export interface InputProps {
  label: string;
  placeholder: string;
}

const Input = (props: InputProps) => {
  const { label, placeholder, ...nativeProps } = props;

  return (
    <>
      <label className='form-label text-lg fw-medium color-palette-1 mb-10'>
        {label}
      </label>
      <input
        type='text'
        className='form-control rounded-pill text-lg'
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
};

export default Input;