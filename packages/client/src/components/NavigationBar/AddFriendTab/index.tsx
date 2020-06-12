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
  ` }

interface AddFriendProp {
  size?: string
}

const AddFriendTab: FC<AddFriendProp> = ({ size = '1.5rem' }) => {
  const [isClicked, setClicked] = useState(false)
  const [email, setEmail] = useState('')
  const onClick = () => {
    setClicked(!isClicked)
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const dispatch = useDispatch()
  const onConfirm = () => {
    dispatch(addFriend(email))
    setEmail('')
    onClick()
  }
  const onEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onConfirm()
    }
  }
  const dialogRef = React.createRef<HTMLDivElement>()
  return (
    <S.Container>
      <Icon icon='AddFriend' color={color.WHITE} size={size} onClick={onClick} />
      {isClicked ? (
        <PopUp refs={dialogRef} onClose={onClick}>
          <Dialog
            isVisible={true}
            title='친구 추가'
            isHideButton={false}
            canCancel={true}
            cancelText='취소'
            confirmText='확인'
            onCancel={onClick}
            onConfirm={onConfirm}
            dialogRef={dialogRef}
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
