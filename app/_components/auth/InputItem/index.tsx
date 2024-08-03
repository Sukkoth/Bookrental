"use client";

import React, { HTMLInputTypeAttribute, useState } from "react";

type Props = {
  id: string;
  name: string;
  label: string;
  onChange?: (value: string) => void;
  value?: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
};
function InputItem({
  id,
  name,
  label,
  type,
  required = false,
  value = "",
  onChange,
}: Props) {
  const [focused, setFocused] = useState(false);
  const [data, setData] = useState(value);
  return (
    <div className='py-2'>
      <div
        data-label={label}
        className={`${
          focused
            ? "focusedLabel"
            : data
            ? "focusedLabelDimmed"
            : "unFocusedLabel"
        } relative`}
      >
        <input
          onChange={(e) => {
            onChange && onChange(e.target.value);
            setData(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          id={id}
          name={name}
          type={type}
          className='outline-none rounded-lg py-4 px-4 border-2 border-gray-200 focus:border-picton-400 w-full text-xl mt-1'
          required={required}
        />
      </div>
    </div>
  );
}

export default InputItem;
