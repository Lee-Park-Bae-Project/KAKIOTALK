import React, {
  FC, useEffect, useState,
} from 'react'
import styled from 'styled-components'
import { color } from 'styles/global'
import Icon from 'Icon/Icon'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { RootState } from 'modules'
import { makeRoomRequest } from 'modules/room'
import {
  Dialog, PopUp,
} from 'components'
import ChatStart from '../../../pages/main/ChatStart'

const S = { Container: styled.div`
width: fit-content;
height: fit-content;
` }
interface InviteUser{
  uuid: string;
  name: string;
}

interface MakeChatProp{
  size?: string;
}

const MakeChatTab: FC<MakeChatProp> = ({ size = '1.5rem' }) => {
  const [isClicked, setClicked] = useState(false)
  const [selectedList, setSelectedList] = useState<InviteUser[]>([])
  const myProfile = useSelector((state: RootState) => state.profile)
  const handlePopUpClick = () => {
    setClicked(!isClicked)
  }
  const dispatch = useDispatch()
  const onConfirm = () => {
    const {
      uuid, name,
    } = myProfile

    dispatch(makeRoomRequest(selectedList.concat({
      uuid, name,
    })))
    setSelectedList([])
    handlePopUpClick()
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
          >
          <ChatStart updateList={setSelectedList}/>
          </Dialog>
        </PopUp>
      ) : null}

    </S.Container>

  )
}

export default MakeChatTab
