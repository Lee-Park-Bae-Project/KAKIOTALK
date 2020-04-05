import React, { FC, useState, useEffect } from 'react';
import List from 'system/List';
import UserCard from 'components/UserCard';
import Hr from 'commons/Hr';

interface User {
  id: string;
  userName: string;
  statusMessage: string;
}

interface Props {
  myProfile: User;
  friendList: User[];
}
const Friend: FC<Props> = ({
  myProfile,
  friendList,
}) => (
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
);

export default Friend;
