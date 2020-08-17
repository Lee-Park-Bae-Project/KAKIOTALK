import React, { FC } from 'react'
import * as S from 'components/NavigationBar/styles'
import FriendTab from 'components/NavigationBar/FriendTab'
import ChatTab from 'components/NavigationBar/ChatTab'
import AddFriendTab from 'components/NavigationBar/AddFriendTab'
import LogoutTab from 'components/NavigationBar/LogoutTab'
import Logo from 'components/Logo'
import { useHistory } from 'react-router-dom'
import { url } from 'common/constants'
import MakeChatTab from 'components/NavigationBar/MakeChatTab'

/**
 * - 네비게이션바
 * - 친구목록, 채팅목록, 친구추가 기능이 가능
 * - 친구목록, 채팅목록은 둘중 하나만 렌더링 가능
 */
const NavigationBar: FC = () => {
  const history = useHistory()
  const { pathname } = history.location
  const isRouted = {
    friendList: pathname === url.main.friendList,
    chatList: pathname === url.main.chatList,
  }

  return (
  <S.Container>
    <S.ItemWrapper>
      <Logo size={'2rem'}/>
      <FriendTab isRouted={isRouted.friendList}/>
      <ChatTab isRouted={isRouted.chatList}/>
      <AddFriendTab/>
      <MakeChatTab />
      <LogoutTab/>
    </S.ItemWrapper>
  </S.Container>
  )
}
export default NavigationBar
