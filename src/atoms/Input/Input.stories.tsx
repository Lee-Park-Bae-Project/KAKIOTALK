import React, { useState } from 'react';
import Input from 'atoms/Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const Default = () => (<Input/>);

export const OnChange = () => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <p>{value}</p>
      <Input onChange={onChange}/>
    </>
  );
};
