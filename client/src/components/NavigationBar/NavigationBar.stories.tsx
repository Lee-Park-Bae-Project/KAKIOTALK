import React, { useState } from 'react';
import NavigationBar from 'components/NavigationBar';

export default {
  title: 'NavigationBar',
  component: NavigationBar,
};

export const NavigationBarBasic = () => {
  const [tabSelector, setTabSelector] = useState({
    friend: true,
    chat: false,
  });
  const friendTabOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setTabSelector({
      friend: true,
      chat: false,
    });
  };

  const chatTabOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setTabSelector({
      friend: false,
      chat: true,
    });
  };

  const addFriendTabOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    alert('hihi');
  };

  return <NavigationBar
    tabSelector={tabSelector}
    friendTabOnClick={friendTabOnClick}
    chatTabOnClick={chatTabOnClick}
    addFriendTabOnClick={addFriendTabOnClick}
  />;
};
