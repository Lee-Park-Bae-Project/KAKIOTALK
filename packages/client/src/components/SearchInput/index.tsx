import React, { FC } from 'react'
import styled from 'styled-components'

const S = {
  Container: styled.div`
    display: flex;
    width: 98%;
  `,
  Input: styled.input`
    width: 100%;
    background: #f7f7f7;
    outline: none;
    padding: 0.3rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
  `,
}

interface Props {
  value: string | number | string[] | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string | undefined;
}
const SearchInpust: FC<Props> = ({
  value,
  onChange,
  onKeyPress,
  placeholder,
}) => (
  <S.Container>
    <S.Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
    />
  </S.Container>
)

export default SearchInpust
