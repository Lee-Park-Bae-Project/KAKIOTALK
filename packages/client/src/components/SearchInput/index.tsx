import React, { FC } from 'react'
import styled from 'styled-components'
import { color } from 'styles/global'
import Icon from 'Icon/Icon'

const S = {
  InputWrapper: styled.div`
  display:flex;
  justify-content:flex-start;
  padding:0.3rem;
  background: #F6F6F6;
  border : 0.5px solid ${color.GRAY}
  border-radius: 2rem;
`,
  Input: styled.input`
    padding-left:0.5rem;
    width: 100%;
    outline: none;
    border:none;
    background: none;
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
  <S.InputWrapper>
  <Icon icon="Search" size="1rem"/>
    <S.Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
      autoFocus={true}
    />
  </S.InputWrapper>

)

export default SearchInpust
