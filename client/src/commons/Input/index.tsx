import React from 'react';
import styled from 'styled-components';

const S = {
  Input: styled.input`
    text-decoration: none;
    outline: none;
    height: 1rem;
    width: 100%;
    line-height: 2;
    text-indent: 0.3rem;
    padding: 0.3rem;
  `,
};

interface Props{
  /** onChange 핸들러 함수 */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 기본적인 텍스트 input
 */
const Input = ({
  onChange = undefined,
}: Props) => (
  <S.Input onChange={onChange}/>
);

export default Input;
