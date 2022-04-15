interface InputProps {
  label: string;
  name: string;
  placeholder: string;
}

const Input = (props: InputProps) => {
  const { label, name, placeholder, ...nativeProps } = props;

  return (
    <>
      <label htmlFor={name} className='form-label text-lg fw-medium color-palette-1 mb-10'>
        {label}
      </label>
      <input
        type='text'
        className='form-control rounded-pill text-lg'
        id={name}
        name={name}
        aria-describedby={name}
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
};

export default Input;