import React, { FC } from 'react'
import styled from 'styled-components'
import Flex from 'atoms/Flex'
import { color } from 'styles/global'

const S = { Input: styled.input`
    width: 100%;
    background: #f7f7f7;
    outline: none;
    padding: 0.3rem;
    border-radius: 0.5rem;
  ` }

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
    <S.Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
    />
)

export default SearchInpust
