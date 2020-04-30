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
const Friend: FC<Props> = ({ myProfile, friendList }) => {
  const [popup, setPopup] = useState(false);
  const [clickedUser, setClickedUser] = useState({
    id: '',
    userName: '',
    statusMessage: '',
  });
  const onProfileClose = () => {
    setPopup(false);
  };
  return (
    <List>
      <UserCard
        key={myProfile.id}
        userName={myProfile.userName}
        statusMessage={myProfile.statusMessage}
      />
      <Hr />
      친구 {friendList.length}
      {friendList.map(({ id, statusMessage, userName }) => {
        const onUserCardClick = () => {
          setPopup(true);
          setClickedUser({
            id: id,
            userName: userName,
            statusMessage: statusMessage,
          });
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
      {popup ? (
        <Profile
          id={clickedUser.id}
          userName={clickedUser.userName}
          statusMessage={clickedUser.statusMessage}
          onRemoveClick={onProfileClose}
        />
      ) : null}
    </List>
  );
};

export default Friend;
