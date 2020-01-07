import React, { FC, useState } from 'react';
import * as S from './styles';
import FriendTab from './FriendTab';
import ChatTab from './ChatTab';
import AddFriend from './AddFriendTab';

const NavigationBar: FC = () => {
  const [friendSelected, setFriendSelected] = useState(false);
  const [chatSelected, setChatSelected] = useState(false);

  const friendTabOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setFriendSelected(!friendSelected);
  };

  const chatTabOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setChatSelected(!chatSelected);
  };

  const addFriendAddTabOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    alert('hihi');
  };

  return (
    <S.Container>
      <FriendTab selected={friendSelected} size='small' onClick={friendTabOnClick}/>
      <ChatTab selected={chatSelected} size='small' onClick={chatTabOnClick}/>
      <AddFriend size='small' onClick={addFriendAddTabOnClick}/>
    </S.Container>
  );
};

export default NavigationBar;
