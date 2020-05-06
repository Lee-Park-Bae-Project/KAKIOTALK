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
  searchKeyword: string;
  onSearchKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  cancelAddFriend: ()=>void;
  friendIdToAdd : string;
  onFriendIdChange : (e:React.ChangeEvent<HTMLInputElement>)=>void;
}

const Main: FC<Props> = ({
  searchKeyword,
  onSearchKeywordChange,
  myProfile,
  friendList,
  chatList,
  tabSelector,
  addFriendTabOnClick,
  friendTabOnClick,
  chatTabOnClick,
  popupAddFriend,
  cancelAddFriend,
  friendIdToAdd,
  onFriendIdChange
  
}) => {
  return (
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
              <Chat searchKeyword={searchKeyword} chatList={chatList} />
            </S.Column>
          )}
        </S.Wrapper>
      </S.Left>
      {popupAddFriend ? (
        <PopUp>
          <Dialog
            isVisible={true}
            title="친구추가"
            isHideButton={false}
            canCancel={true}
            cancelText="취소"
            confirmText="확인"
            onCancel={cancelAddFriend}
            onConfirm={() => null}
          >
            <SearchInput value={friendIdToAdd} onChange={onFriendIdChange} placeholder='친구 아이디 입력'/>
          </Dialog>
        </PopUp>
      ) : null}
    </S.Container>
  );
};

export default Main;
