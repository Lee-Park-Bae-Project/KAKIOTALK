import React, { FC, useState, useEffect } from 'react';
import * as S from 'pages/main/styles';
import NavigationBar from 'components/NavigationBar';
import shortid from 'shortid';
import faker from 'faker';
import SearchInput from 'components/SearchInput';
import { chatList, friendList, myProfile } from 'fixture';
import Chat from './Chat';
import Friend from './Friend';

interface Props {}

const Main: FC<Props> = () => {
  const [tabSelector, setTabSelector] = useState({
    friend: true,
    chat: false,
  });
  const [searchKeyword, setSearchKeyword] = useState('');
  const onSearchKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };
  const friendTabOnClick = () => {
    setTabSelector({
      friend: true,
      chat: false,
    });
  };

  const chatTabOnClick = () => {
    setTabSelector({
      friend: false,
      chat: true,
    });
  };
  const addFriendTabOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    alert('hihi');
  };

  return (
    <S.Container id='container'>
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
          { tabSelector.friend && <Friend myProfile={myProfile} friendList={friendList} /> }
          {
            tabSelector.chat && (
              <S.Column>
                <SearchInput
                  value={searchKeyword}
                  onChange={onSearchKeywordChange}
                  placeholder="채팅방 이름, 참여자 검색"
                />
                <Chat
                  searchKeyword={searchKeyword}
                  chatList={chatList}

                />
              </S.Column>
            )
          }
        </S.Wrapper>
      </S.Left>
    </S.Container>
  );
};

export default Main;
