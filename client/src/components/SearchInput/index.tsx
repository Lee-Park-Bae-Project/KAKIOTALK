import React, { FC } from 'react';
import styled from 'styled-components';
import { color } from 'styles/global';

const S = {
  Container: styled.div`
    display: flex;
    width: 98%;
  `,
  Input: styled.input`
    width: 100%;
    background: #F7F7F7;
    outline: none;
    padding:0.3rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

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
  <S.Container>
    <S.Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </S.Container>
);

export default SearchInpust;
