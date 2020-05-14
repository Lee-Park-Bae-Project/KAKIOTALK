import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Main from 'pages/main';
import { addFriend } from 'modules/friends';
import request from 'common/request';
import { useHistory } from 'react-router-dom';
import withAuth, { Props } from 'hocs/withAuth';
const { useState, useEffect } = React;
const MainContainer: React.FC<Props> = ({ name, email, uuid }) => {
  const dispatch = useDispatch();
  const history = useHistory();

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

  const [addFriendPopUp, setAddFriendPopUp] = useState(false);
  const [friendIdToAdd, setFriendIdToAdd] = useState('');

  const onPopUpClose = () => {
    setAddFriendPopUp(false);
  };
  const addFriendTabOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    setAddFriendPopUp(true);
  };

  const logoutTabOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    request
      .getLogout()
      .then(response => {
        history.push('/login');
      })
      .catch(error => {
        console.log(error);
      });
  };
  const onFriendIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFriendIdToAdd(e.target.value);
  };

  const confirmAddFriend = () => {
    dispatch(addFriend(friendIdToAdd));
    onPopUpClose();
  };
  return (
    <Main
      tabSelector={tabSelector}
      friendTabOnClick={friendTabOnClick}
      chatTabOnClick={chatTabOnClick}
      addFriendTabOnClick={addFriendTabOnClick}
      popupAddFriend={addFriendPopUp}
      confirmAddFriend={confirmAddFriend}
      cancelAddFriend={onPopUpClose}
      friendIdToAdd={friendIdToAdd}
      onFriendIdChange={onFriendIdChange}
      logoutTabOnClick={logoutTabOnClick}
    ></Main>
  );
};

export default withAuth(MainContainer);
