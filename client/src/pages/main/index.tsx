import React, { FC } from 'react';
import * as S from 'pages/main/styles';
import NavigationBar from 'components/NavigationBar';
import SearchInput from 'components/SearchInput';
import { User, ChatRoom } from 'types';
import Chat from './Chat';
import Friend from './Friend';
import { useState } from 'react';
import { PopUp, Dialog } from 'components';
interface TabSelector {
  friend: boolean;
  chat: boolean;
}
interface Props {
  searchChatKeyword: string;
  onChatKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchFriendKeyword: string;
  onFriendKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  myProfile: User;
  friendList: User[];
  chatList: ChatRoom[];
  tabSelector: TabSelector;
  friendTabOnClick: () => void;
  chatTabOnClick: () => void;
  addFriendTabOnClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  popupAddFriend: boolean;
  confirmAddFriend: () => void;
  cancelAddFriend: () => void;
  friendIdToAdd: string;
  onFriendIdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  logoutTabOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Main: FC<Props> = ({
  searchChatKeyword,
  onChatKeywordChange,
  searchFriendKeyword,
  onFriendKeywordChange,
  myProfile,
  friendList,
  chatList,
  tabSelector,
  addFriendTabOnClick,
  friendTabOnClick,
  chatTabOnClick,
  popupAddFriend,
  confirmAddFriend,
  cancelAddFriend,
  friendIdToAdd,
  onFriendIdChange,
  logoutTabOnClick,
}) => {
  return (
    <S.Container>
      <S.Left>
        <S.NavigationBarWrapper>
          <NavigationBar
            logoutTabOnClick={logoutTabOnClick}
            tabSelector={tabSelector}
            friendTabOnClick={friendTabOnClick}
            chatTabOnClick={chatTabOnClick}
            addFriendTabOnClick={addFriendTabOnClick}
          />
        </S.NavigationBarWrapper>
        <S.Wrapper>
          {tabSelector.friend && (
            <S.Column>
              <SearchInput
                value={searchFriendKeyword}
                onChange={onFriendKeywordChange}
                placeholder="이름 검색"
              />
              <Friend
                myProfile={myProfile}
                friendList={friendList}
                searchFriendKeyword={searchFriendKeyword}
              />
            </S.Column>
          )}
          {tabSelector.chat && (
            <S.Column>
              <SearchInput
                value={searchChatKeyword}
                onChange={onChatKeywordChange}
                placeholder="채팅방 이름, 참여자 검색"
              />
              <Chat searchChatKeyword={searchChatKeyword} chatList={chatList} />
            </S.Column>
          )}
        </S.Wrapper>
      </S.Left>
      {popupAddFriend ? (
        <PopUp>
          <Dialog
            isVisible={true}
            title="친구 추가"
            isHideButton={false}
            canCancel={true}
            cancelText="취소"
            confirmText="확인"
            onCancel={cancelAddFriend}
            onConfirm={confirmAddFriend}
          >
            <SearchInput
              value={friendIdToAdd}
              onChange={onFriendIdChange}
              placeholder="이메일을 입력해주세요"
            />
          </Dialog>
        </PopUp>
      ) : null}
    </S.Container>
  );
};

export default Main;
