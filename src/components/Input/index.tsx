import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  classname?:string; 
}

const Input: FC<InputProps> = ({ label,className='', placeholder, ...rest }) => {
  return (
    <div className={`flex flex-col w-full ${className} `}>
      <label className='text-black font-bold text-base'>{label}</label>
      <input className='bg-InputColor text-TextColor  rounded-lg p-4 text-base' placeholder={placeholder} {...rest} required />
    </div>
  );
};

export default Input;