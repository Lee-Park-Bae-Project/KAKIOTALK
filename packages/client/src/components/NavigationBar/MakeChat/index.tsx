import React, {
  FC, useState,
} from 'react'
import styled from 'styled-components'
import { color } from 'styles/global'
import Icon from 'Icon/Icon'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  Dialog, PopUp,
} from 'components'
import ChatRoomStartContainer from '../../../containers/ChatRoomStartContainer'

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
      <Icon icon='ChatStart' color={color.WHITE} size={size}
      onClick={handlePopUpClick}/>
      {isClicked ? (
        <PopUp refs={dialogRef} onClose={handlePopUpClick}>
          <Dialog
          isVisible={true}
          title='대화상대 선택'
          isHideButton={false}
          canCancel={true}
          cancelText='취소'
          confirmText='확인'
          onCancel={handlePopUpClick}
          onConfirm={onConfirm}
          dialogRef={dialogRef}
          >
          <ChatRoomStartContainer />
          </Dialog>
        </PopUp>
      ) : null}

    </S.Container>

  )
}

export default MakeChatTab
