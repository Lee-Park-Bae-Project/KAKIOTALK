import React, { FC, useState, useEffect } from 'react';
import * as S from './styles';
import FriendTab from './FriendTab';
import ChatTab from './ChatTab';
import AddFriend from './AddFriendTab';

interface NavigationBarProp{
  /** 친구목록이 선택되었는지 */
  friendSelected: boolean;
  /** 채팅목록이 선택되었는지 */
  chatSelected: boolean;
  /** 친구목록을 클릭 했을 때 핸들러 */
  friendTabOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /** 채팅목록을 클릭 했을 때 핸들러 */
  chatTabOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /** 친구추가를 클릭 했을 때 핸들러 */
  addFriendTabOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
/**
 * - 네비게이션바
 * - 친구목록, 채팅목록, 친구추가 기능이 가능
 * - 친구목록, 채팅목록은 둘중 하나만 렌더링 가능
 */
const NavigationBar: FC<NavigationBarProp> = ({
  friendSelected = true,
  chatSelected = false,
  friendTabOnClick,
  chatTabOnClick,
  addFriendTabOnClick,
}) => (
    <S.Container>
      <FriendTab selected={friendSelected} onClick={friendTabOnClick}/>
      <ChatTab selected={chatSelected} onClick={chatTabOnClick}/>
      <AddFriend onClick={addFriendTabOnClick}/>
    </S.Container>
);
export default NavigationBar;
