import React, { FC, useState, useEffect } from 'react';
import List from 'system/List';
import UserCard from 'components/UserCard';
import Hr from 'atoms/Hr';
import Profile from 'system/Profile';
import { PopUp } from 'components';
import {User} from 'types'

export interface Props {
  myProfile: User;
  friendList: User[];
  searchFriendKeyword: string;
}
const Friend: FC<Props> = ({ myProfile, friendList, searchFriendKeyword }) => {
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
      {friendList
        .filter(
          friend =>
            friend.userName
              .toLowerCase()
              .indexOf(searchFriendKeyword.toLowerCase()) >= 0,
        )
        .map(({ id, statusMessage, userName }) => {
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
        <PopUp>
          <Profile
            id={clickedUser.id}
            userName={clickedUser.userName}
            statusMessage={clickedUser.statusMessage}
            onRemoveClick={onProfileClose}
          />
        </PopUp>
      ) : null}
    </List>
  );
};

export default Friend;
