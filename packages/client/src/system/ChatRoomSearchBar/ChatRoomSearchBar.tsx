import React from 'react'
import Icon from 'Icon/Icon'
import * as S from './styles'

const {
  useState, useEffect, useRef,
} = React
interface Props{
  open: boolean,
}
const SearchAccordion: React.FC<Props> = ({ open }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (open && inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  return (
    <S.Container open={open}>
      <S.Wrapper>
        <S.Input type='text' ref={inputRef}/>
        <Icon icon="ArrowUp" size="1.5rem"/>
        <Icon icon="ArrowDown" size="1.5rem"/>
        <Icon icon="Close" size="1rem"/>
      </S.Wrapper>
    </S.Container>

  )
}

export default SearchAccordion
