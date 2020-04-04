import React, { FC, useState, useEffect } from 'react';
import * as S from 'pages/main/styles';
import UserList from 'system/UserList';
import NavigationBar from 'components/NavigationBar';
import List from 'system/List';
import shortid from 'shortid';
import faker from 'faker';
import RoomCard from 'components/RoomCard';
import UserCard from 'components/UserCard';
import Hr from 'commons/Hr';

interface Props{

}

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
          {
            tabSelector.friend
              && (
                <List>
                  <UserCard userName={myProfile.userName} />
                  <Hr/>
                  친구 {friendList.length}
                  {
                    friendList.map(({
                      id,
                      statusMessage,
                      userName,
                    }) => {
                      const onUserCardClick = () => {
                        alert(userName);
                      };
                      return (
                        <UserCard
                          key={id}
                          userName={userName}
                          statusMessage={statusMessage}
                          onClick={onUserCardClick}
                        />
                      );
                    })
                  }
                </List>
              )
          }
          {
            tabSelector.chat
            && (
              <List>
                {
                  chatList.map(({
                    userList,
                    lastMessage,
                    lastModified,
                    numOfNewMessage,
                  }) => {
                    const onRoomCardClick = () => {
                      alert(userList.toString());
                    };
                    return (
                      <RoomCard
                        key={shortid.generate()}
                        userList={userList}
                        lastMessage={lastMessage}
                        lastModified={lastModified}
                        numOfNewMessage={numOfNewMessage}
                        onClick={onRoomCardClick}
                      />
                    );
                  })

                }
              </List>
            )
          }
        </S.Wrapper>
      </S.Left>
    </S.Container>
  );
};

export default Main;
