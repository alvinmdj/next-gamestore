import { ChangeEvent } from "react";

export interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Partial<InputProps>) => {
  const { label, placeholder, value, disabled, onChange } = props;

  return (
    <>
      <label className='form-label text-lg fw-medium color-palette-1 mb-10'>
        {label}
      </label>
      <input
        type='text'
        className='form-control rounded-pill text-lg'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
};

export default Input;