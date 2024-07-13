import { Input } from '@chakra-ui/react';
import React from 'react';

const Inputs = ({ id,label, placeholder, type, name, value, onChange, onBlur, error }) => (
  <div className="px-4 w-[50%] max-lg:w-full mx-auto">
   <label htmlFor={label} className='my-4 inline-block'>{label}</label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      variant="filled" 
      size="sm" 
      required
    />
    {error && <p className="text-red-500">{error}</p>}
  </div>
);

export default Inputs;
