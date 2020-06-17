import React, {
  FC, useCallback, useRef, useState,
} from 'react'
import {
  convertTimeForMsgFormat, useOutsideClick,
} from 'common/utils'
import Profile from 'system/Profile'
import { ApiChat } from 'types'
import * as S from './style'

type Props = {
  createdAt: string
  chatGroup: ApiChat[]
  isMine: boolean
}
const ChatBox: FC<Props> = ({
  createdAt,
  chatGroup,
  isMine,
}) => {
  const [isProfileClicked, setIsProfileClicked] = useState(false)
  const [isOverflow, setIsOverflow] = useState(false)
  const handlePopUpClick = () => {
    setIsProfileClicked(!isProfileClicked)
  }
  const profileRef = useRef(null)
  useOutsideClick(profileRef, () => {
    if (isProfileClicked) setIsProfileClicked(false)
  })
  const setOverflow = useCallback((node: HTMLDivElement) => {
    if (node && node.getBoundingClientRect().bottom < 300) {
      setIsOverflow(true)
    }
  }, [])

  return (
    <S.Container ref={setOverflow}>
      <S.ProfileThumbnailWrapper isMine={isMine} onClick={handlePopUpClick}>
        <S.ProfileThumbnail src={'https://images.unsplash.com/photo-1591369376214-b9f91924f10d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}/>
        {
          isProfileClicked && (
            <>
              <Profile
                uuid={chatGroup[0].uuid}
                name={chatGroup[0].metaInfo.sender.name}
                statusMessage={chatGroup[0].metaInfo.sender.statusMessage}
                handleCloseClick={handlePopUpClick}
                imageUrl='https://images.unsplash.com/photo-1591369376214-b9f91924f10d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                profileRef={profileRef}
                isMyProfile={isMine}
                isOverflow={isOverflow}
              />
            </>
          )
        }
      </S.ProfileThumbnailWrapper>
      <S.Body>
        <S.Name isMine={isMine}>{chatGroup[0].metaInfo.sender.name}</S.Name>
        <S.ChatGroup isMine={isMine}>
          {
            chatGroup.map((chat, idx) => (
              <S.ContentWrapper key={chat.uuid}>
                {
                  <S.ContentBorder isMine={isMine}>
                    <S.Content key={chat.uuid} isMine={isMine}>
                      {chat.content}
                    </S.Content>
                    {
                      idx === chatGroup.length - 1 && <S.Time>{convertTimeForMsgFormat(createdAt)}</S.Time>
                    }
                  </S.ContentBorder>
                }
              </S.ContentWrapper>
            ))
          }
        </S.ChatGroup>
      </S.Body>
    </S.Container>
  )
}

export default ChatBox
