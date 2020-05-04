import React, { FC, useState, useEffect } from 'react';
import List from 'system/List';
import UserCard from 'components/UserCard';
import Hr from 'atoms/Hr';
import * as S from './style';
import Profile from 'system/Profile';

interface User {
  id: string;
  userName: string;
  statusMessage: string;
}

interface Props {
  myProfile: User;
  friendList: User[];
}

const Friend: FC<Props> = ({ myProfile, friendList }) => (
  <List>
    <UserCard
      key={myProfile.id}
      userName={myProfile.userName}
      statusMessage={myProfile.statusMessage}
    />
    <Hr />
    {myProfile.userName}'s friends {friendList.length}
    {friendList.map(({ id, statusMessage, userName }) => {
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
    })}
  </List>
);

export default Friend;
