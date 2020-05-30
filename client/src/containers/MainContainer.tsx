import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Main from 'pages/main';

import { RootState } from 'modules';
import { getRoomRequest } from 'modules/room';
import withAuth, { WithAuthProps } from 'hocs/withAuth';
import { addFriend } from 'modules/friends';

import * as request from 'common/request';
import { useHistory } from 'react-router-dom';
import { afterLogin } from '../socket';

const { useState, useEffect } = React;

const MainContainer: React.FC<WithAuthProps> = ({ name, email, uuid }) => {
  const dispatch = useDispatch();
  const roomState = useSelector((state: RootState) => state.room);

  useEffect(() => {
    dispatch(getRoomRequest());
  }, []);

  useEffect(() => {
    if (uuid.length > 0) {
      afterLogin({ uuid });
    }
  }, [name,
    email,
    uuid]);
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
  const dialogRef: any = React.createRef();
  const onOutsideClicked = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!dialogRef.current.contains(e.target)) setAddFriendPopUp(false);
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
      .then((response) => {
        history.push('/login');
      })
      .catch((error) => {
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
      roomState={roomState}
      onFriendIdChange={onFriendIdChange}
      confirmAddFriend={confirmAddFriend}
      popupAddFriend={addFriendPopUp}
      cancelAddFriend={onFriendPopUpClose}
      friendIdToAdd={friendIdToAdd}
      logoutTabOnClick={logoutTabOnClick}
      onPopupOutClicked = {onOutsideClicked}
      dialogRef = {dialogRef}
      popupLogout={logoutPopUp}
      cancelLogout={onLogoutPopUpClose}
      confirmLogout={confirmLogout}
    ></Main>
  );
};

export default withAuth(MainContainer);
