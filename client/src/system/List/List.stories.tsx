import React from 'react';
import List from 'system/List';
import Profile from 'system/Profile';
import UserCard from 'components/UserCard';
import RoomCard from 'components/RoomCard';

export default {
  title: 'Systems/List',
  component: List,
};

export const Default = () => (
    <List>
      <Profile
        id='asd'
        statusMessage='asd'
        userName='asd'
      />
      <Profile
        id='asd'
        statusMessage='asd'
        userName='asd'
      />
      <Profile
        id='asd'
        statusMessage='asd'
        userName='asd'
      />
    </List>
);

export const UserCardList = () => (
    <List>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
  </List>
);

export const RoomCardList = () => {
  const userList = ['user1',
    'user2',
    'user3'];
  const lastMessage = 'lastMessage';
  const numOfNewMessages = 1;
  const lastModified = Date.now();
  return (
    <List>
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={numOfNewMessages}
      />
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={numOfNewMessages}
      />
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={numOfNewMessages}
      />
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={numOfNewMessages}
      />
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={numOfNewMessages}
      />
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={numOfNewMessages}
      />
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={numOfNewMessages}
      />
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={numOfNewMessages}
      />
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={numOfNewMessages}
      />
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={numOfNewMessages}
      />
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={numOfNewMessages}
      />
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={numOfNewMessages}
      />
    </List>
  );
};
