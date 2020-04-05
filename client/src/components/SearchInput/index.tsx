import React, { FC } from 'react';
import styled from 'styled-components';
import { color } from 'styles/global';

const S = {
  Input: styled.input`
    width: 100%;
    background: #F7F7F7;
    outline: none;
  `,
};

interface Props{
  value: string | number | string[] | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string | undefined;
}
const SearchInpust: FC<Props> = ({
  value,
  onChange,
  placeholder,
}) => (
    <S.Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
);

export default SearchInpust;
