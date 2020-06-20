import React, {
  FC, useState,
} from 'react'
import styled from 'styled-components'
import { color } from 'styles/global'
import Icon from 'Icon/Icon'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const S = { Container: styled.div`
width: fit-content;
height: fit-content;
` }

interface MakeChatProp{
  size?: string;
}

const MakeChatTab: FC<MakeChatProp> = ({ size = '1.5rem' }) => {
  const [isClicked, setClicked] = useState(false)
  const [email, setEmail] = useState('')
  const handlePopUpClick = () => {
    setClicked(!isClicked)
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const dispatch = useDispatch()
  const onConfirm = () => {
    setEmail('')
    handlePopUpClick()
  }
  const onEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onConfirm()
    }
  }
  const dialogRef = React.useRef(null)
  return (
    <S.Container>

    </S.Container>

  )
}

export default MakeChatTab
