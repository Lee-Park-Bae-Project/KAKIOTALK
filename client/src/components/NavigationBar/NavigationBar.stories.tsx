import React, { useState, useEffect } from 'react';
import NavigationBar from './index';

export default {
  title: 'NavigationBar',
  component: NavigationBar,
};

export const NavigationBarBasic = () => {
  const [friendSelected, setFriendSelected] = useState(true);
  const [chatSelected, setChatSelected] = useState(false);
  const friendTabOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setFriendSelected(!friendSelected);
  };

  const chatTabOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setChatSelected(!chatSelected);
  };

  const addFriendTabOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    alert('hihi');
  };
  useEffect(() => {
    if (friendSelected) {
      setChatSelected(false);
    }
  }, [friendSelected]);

  useEffect(() => {
    if (chatSelected) {
      setFriendSelected(false);
    }
  }, [chatSelected]);
  return <NavigationBar
    friendSelected={friendSelected}
    chatSelected={chatSelected}
    friendTabOnClick={friendTabOnClick}
    chatTabOnClick={chatTabOnClick}
    addFriendTabOnClick={addFriendTabOnClick}
  />;
};
