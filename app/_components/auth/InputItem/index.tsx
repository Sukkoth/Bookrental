import React, { HTMLInputTypeAttribute } from "react";

type Props = {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  onChange?: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
};
function InputItem({
  id,
  name,
  placeholder,
  label,
  onChange,
  type,
  required = false,
}: Props) {
  return (
    <div className='py-2'>
      <label htmlFor={id} className='ps-1'>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className='outline-none rounded-lg py-3 px-4 border border-gray-300 focus:border-gray-600 w-full text-xl mt-1'
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default InputItem;
