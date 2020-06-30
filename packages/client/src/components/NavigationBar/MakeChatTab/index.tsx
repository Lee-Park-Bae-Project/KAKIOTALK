import React, {
  FC, useEffect, useState,
} from 'react'
import styled from 'styled-components'
import { color } from 'styles/global'
import Icon from 'Icon/Icon'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { makeRoomRequest } from 'modules/room'
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
  interface InviteUser{
    uuid: string;
    name: string;
  }
  const [isClicked, setClicked] = useState(false)
  const [selectedList, setSelectedList] = useState<InviteUser[]>([])
  const handlePopUpClick = () => {
    console.log('Is clicked?')
    setClicked(!isClicked)
  }
  useEffect(() => {
    console.log('parent')
    console.log(selectedList)
  }, [selectedList])
  const handleSelectedList = (selectList: InviteUser[]) => {
    setSelectedList(selectList)
  }
  const dispatch = useDispatch()
  const onConfirm = () => {
    console.log(selectedList)
    dispatch(makeRoomRequest(selectedList))
    setSelectedList([])
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
          <ChatRoomStartContainer updateList={handleSelectedList}/>
          </Dialog>
        </PopUp>
      ) : null}

    </S.Container>

  )
}

export default MakeChatTab
