import React, { FC } from 'react'
import * as S from 'components/NavigationBar/styles'
import FriendTab from 'components/NavigationBar/FriendTab'
import ChatTab from 'components/NavigationBar/ChatTab'
import AddFriendTab from 'components/NavigationBar/AddFriendTab'
import LogoutTab from 'components/NavigationBar/LogoutTab'

interface NavigationBarProp {
  /** 친구 목록 | 채팅목록 중 어떤게 선택 되었는지 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tabSelector: any;
  /** 친구목록을 클릭 했을 때 핸들러 */
  friendTabOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /** 채팅목록을 클릭 했을 때 핸들러 */
  chatTabOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
/**
 * - 네비게이션바
 * - 친구목록, 채팅목록, 친구추가 기능이 가능
 * - 친구목록, 채팅목록은 둘중 하나만 렌더링 가능
 */
const NavigationBar: FC<NavigationBarProp> = ({
  tabSelector,
  friendTabOnClick,
  chatTabOnClick,
}) => (
  <S.Container>
    <S.ItemWrapper>
      <FriendTab selected={tabSelector.friend} onClick={friendTabOnClick} />
      <ChatTab selected={tabSelector.chat} onClick={chatTabOnClick} />
      <AddFriendTab/>
      <LogoutTab/>
    </S.ItemWrapper>
  </S.Container>
)
export default NavigationBar
