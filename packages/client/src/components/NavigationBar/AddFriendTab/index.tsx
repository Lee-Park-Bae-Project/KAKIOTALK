import React, {
  FC, useState,
} from 'react'
import styled from 'styled-components'
import Flex from 'atoms/Flex'
import { color } from 'styles/global'
import Icon from 'Icon/Icon'
import {
  Dialog, PopUp, SearchInput,
} from 'components'
import { useDispatch } from 'react-redux'
import { addFriend } from 'modules/friends'

const S = { Container: styled(Flex)`
    width: fit-content;
    height: fit-content;
    padding-left: 1.5rem;
  ` }

interface AddFriendProp {
  size?: string
}

const AddFriendTab: FC<AddFriendProp> = ({ size = '1.5rem' }) => {
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
    dispatch(addFriend(email))
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
      <Icon icon='AddFriend' color={color.WHITE} size={size} onClick={handlePopUpClick} />
      {isClicked ? (
        <PopUp refs={dialogRef} onClose={handlePopUpClick}>
          <Dialog
            isVisible={true}
            title='친구 추가'
            isHideButton={false}
            canCancel={true}
            cancelText='취소'
            confirmText='확인'
            onCancel={handlePopUpClick}
            onConfirm={onConfirm}
          >
            <SearchInput
              value={email}
              onChange={onChange}
              onKeyPress={onEnterPress}
              placeholder='이메일을 입력해주세요'
            />
          </Dialog>
        </PopUp>
      ) : null}
    </S.Container>
  )
}
export default AddFriendTab
