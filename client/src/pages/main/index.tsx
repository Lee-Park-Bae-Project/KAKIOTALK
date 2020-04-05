import React, { FC, useState, useEffect } from 'react';
import * as S from 'pages/main/styles';
import NavigationBar from 'components/NavigationBar';
import shortid from 'shortid';
import faker from 'faker';
import Chat from './Chat';
import Friend from './Friend';

interface Props {}

const Main: FC<Props> = () => {
  const [tabSelector, setTabSelector] = useState({
    friend: true,
    chat: false,
  });
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
  const myProfile = {
    id: shortid.generate(),
    userName: faker.internet.userName(),
    statusMessage: faker.lorem.lines(),
  };
  const friendList = [
    {
      id: shortid.generate(),
      userName: faker.internet.userName(),
      statusMessage: faker.lorem.lines(),
    },
    {
      id: shortid.generate(),
      userName: faker.internet.userName(),
      statusMessage: faker.lorem.lines(),
    },
    {
      id: shortid.generate(),
      userName: faker.internet.userName(),
      statusMessage: faker.lorem.lines(),
    },
    {
      id: shortid.generate(),
      userName: faker.internet.userName(),
      statusMessage: faker.lorem.lines(),
    },
    {
      id: shortid.generate(),
      userName: faker.internet.userName(),
      statusMessage: faker.lorem.lines(),
    },
    {
      id: shortid.generate(),
      userName: faker.internet.userName(),
      statusMessage: faker.lorem.lines(),
    },
    {
      id: shortid.generate(),
      userName: faker.internet.userName(),
      statusMessage: faker.lorem.lines(),
    },
    {
      id: shortid.generate(),
      userName: faker.internet.userName(),
      statusMessage: faker.lorem.lines(),
    },
    {
      id: shortid.generate(),
      userName: faker.internet.userName(),
      statusMessage: faker.lorem.lines(),
    },
    {
      id: shortid.generate(),
      userName: faker.internet.userName(),
      statusMessage: faker.lorem.lines(),
    },

  ];

  const chatList = [
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },
    {
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessage: Math.round(Math.random() * 100),
    },

  ];
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
            { tabSelector.chat && <Chat chatList={chatList} /> }
          </S.Wrapper>
      </S.Left>
    </S.Container>
  );
};

export default Main;
