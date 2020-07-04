import React, { FC } from 'react'
import { WithAuthProps } from 'hocs/withAuth'
import { ChatStateGroupByTime } from 'containers/ChatRoomContainer'
import SearchAccordion from 'system/ChatRoomSearchBar'
import * as S from './style'
import Header from './Header'
import TextArea from './TextArea'
import ChatArea from './ChatArea'

const {
  useEffect, useRef, useState, useCallback,
} = React

interface Props extends WithAuthProps{
  roomUuid: string
  roomName: string
  chatStateGroupByTime: ChatStateGroupByTime,
}

const ChatRoom: FC<Props> = ({
  uuid,
  roomUuid,
  roomName,
  chatStateGroupByTime,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearchBar = useCallback(() => {
    setIsSearchOpen(!isSearchOpen)
  }, [isSearchOpen, setIsSearchOpen])

  return (
    <S.Container>
      <Header roomName={roomName} toggleSearchBar={toggleSearchBar}/>
      <SearchAccordion
        open={isSearchOpen}
        toggleSearchBar={toggleSearchBar}
      />
      <ChatArea roomUuid={roomUuid} userUuid={uuid}/>
      <TextArea roomUuid={roomUuid} userUuid={uuid}/>
    </S.Container>
  )
}

export default ChatRoom
