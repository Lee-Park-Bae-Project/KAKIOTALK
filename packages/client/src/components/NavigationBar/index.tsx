import React, { FC } from 'react'
import * as S from 'components/NavigationBar/styles'
import FriendTab from 'components/NavigationBar/FriendTab'
import ChatTab from 'components/NavigationBar/ChatTab'
import AddFriendTab from 'components/NavigationBar/AddFriendTab'
import LogoutTab from 'components/NavigationBar/LogoutTab'
import { useHistory } from 'react-router-dom'
/**
 * - 네비게이션바
 * - 친구목록, 채팅목록, 친구추가 기능이 가능
 * - 친구목록, 채팅목록은 둘중 하나만 렌더링 가능
 */
const NavigationBar: FC = () => {
  const history = useHistory()
  const { pathname } = history.location
  const isRouted = {
    friendList: pathname === '/main/friend-list',
    chatList: pathname === '/main/chat-list',
  }

  return (
  <S.Container>
    <S.ItemWrapper>
      <FriendTab isRouted={isRouted.friendList}/>
      <ChatTab isRouted={isRouted.chatList}/>
      <AddFriendTab/>
      <LogoutTab/>
    </S.ItemWrapper>
  </S.Container>
  )
}
export default NavigationBar
