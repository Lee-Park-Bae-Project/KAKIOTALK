import React, {
  forwardRef,
  useCallback,
  useRef,
  useState,
} from 'react'
import { convertTimeForMsgFormat } from 'common/utils'
import { useOutsideClick } from 'hooks'
import { Profile } from 'system'
import { ApiChat } from 'types'
import shortid from 'shortid'
import * as S from './style'

type Props = {
  chat: ApiChat
  isMine: boolean
  ref?: React.Ref<HTMLDivElement>;
}

// eslint-disable-next-line react/display-name
const ChatBox: React.ForwardRefExoticComponent<Props> = forwardRef(({
  chat, isMine,
}, ref) => {
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
                uuid={chat.uuid}
                name={chat.metaInfo.sender.name}
                statusMessage={chat.metaInfo.sender.statusMessage}
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
      <S.Body ref={ref}>
        <S.Name isMine={isMine}>{chat.metaInfo.sender.name}</S.Name>
        <S.ChatGroup isMine={isMine}>
          <S.ContentWrapper key={shortid.generate()}>
            {
              <S.ContentBorder isMine={isMine}>
                <S.Content key={chat.uuid} isMine={isMine}>
                  {chat.content}
                </S.Content>
                <S.Time>{convertTimeForMsgFormat(chat.createdAt)}</S.Time>
              </S.ContentBorder>
            }
          </S.ContentWrapper>
        </S.ChatGroup>
      </S.Body>
    </S.Container>
  )
})

export default React.memo(ChatBox)

