import React, { FC } from 'react';
import * as S from 'pages/main/styles';
import NavigationBar from 'components/NavigationBar';
import SearchInput from 'components/SearchInput';
import { User } from 'types';
import Room from 'system/Room';
import { RoomState } from 'modules/room';
import Friend from './Friend';

interface TabSelector {
  friend: boolean;
  chat: boolean;
}
interface Props {
  searchKeyword: string;
  onSearchKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  myProfile: User;
  friendList: User[];
  tabSelector: TabSelector;
  friendTabOnClick: () => void;
  chatTabOnClick: () => void;
  addFriendTabOnClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  roomState: RoomState;
}

const Main: FC<Props> = ({
  searchKeyword,
  onSearchKeywordChange,
  myProfile,
  friendList,
  tabSelector,
  addFriendTabOnClick,
  friendTabOnClick,
  chatTabOnClick,
  roomState,
}) => (
  <S.Container>
    <S.Left>
      <S.NavigationBarWrapper>
        <NavigationBar
          tabSelector={tabSelector}
          friendTabOnClick={friendTabOnClick}
          chatTabOnClick={chatTabOnClick}
          addFriendTabOnClick={addFriendTabOnClick}
        />
      </S.NavigationBarWrapper>
      <S.Wrapper>
        {tabSelector.friend && (
          <Friend myProfile={myProfile} friendList={friendList} />
        )}
        {tabSelector.chat && (
          <S.Column>
            <SearchInput
              value={searchKeyword}
              onChange={onSearchKeywordChange}
              placeholder="채팅방 이름, 참여자 검색"
            />
            <Room searchKeyword={searchKeyword} roomState={roomState}/>
          </S.Column>
        )}
      </S.Wrapper>
    </S.Left>
  </S.Container>
);

export default Main;
