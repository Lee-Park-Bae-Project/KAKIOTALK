import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Main from 'pages/main';
import { getFriends, addFriend } from 'modules/friends';
import { getChatRoom } from 'modules/chatRoom';
import { getProfile } from 'modules/profile';
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
  const [logoutPopUp, setLogoutPopUp] = useState(false);
  const [friendIdToAdd, setFriendIdToAdd] = useState('');

  const onFriendPopUpClose = () => {
    setAddFriendPopUp(false);
  };

  const onLogoutPopUpClose = () => {
    setLogoutPopUp(false);
  };

  const addFriendTabOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    setAddFriendPopUp(true);
  };

  const logoutTabOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    setLogoutPopUp(true);
  };

  const confirmLogout = () => {
    request
      .getLogout()
      .then(response => {
        history.push('/login');
      })
      .catch(error => {
        console.log(error);
      });
    onLogoutPopUpClose();
  };

  const onFriendIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFriendIdToAdd(e.target.value);
  };

  const confirmAddFriend = () => {
    dispatch(addFriend(friendIdToAdd));
    onFriendPopUpClose();
  };

  return (
    <Main
      tabSelector={tabSelector}
      friendTabOnClick={friendTabOnClick}
      chatTabOnClick={chatTabOnClick}
      addFriendTabOnClick={addFriendTabOnClick}
      popupAddFriend={addFriendPopUp}
      confirmAddFriend={confirmAddFriend}
      cancelAddFriend={onFriendPopUpClose}
      friendIdToAdd={friendIdToAdd}
      onFriendIdChange={onFriendIdChange}
      logoutTabOnClick={logoutTabOnClick}
      popupLogout={logoutPopUp}
      cancelLogout={onLogoutPopUpClose}
      confirmLogout={confirmLogout}
    ></Main>
  );
};

export default withAuth(MainContainer);
