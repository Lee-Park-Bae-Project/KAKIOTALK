import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Main from 'pages/main';
import { RootState } from 'modules';
import { getRoomRequest } from 'modules/room';
import {getProfileSuccess} from 'modules/profile'
import withAuth, { WithAuthProps } from 'hocs/withAuth';
import { afterLogin } from '../socket';
import { addFriend } from 'modules/friends';

import request from 'common/request';
import { useHistory } from 'react-router-dom';

const { useState, useEffect } = React;

const MainContainer: React.FC<WithAuthProps> = ({ name, email, uuid,statusMessage}) => {
  const dispatch = useDispatch();
  const roomState = useSelector((state: RootState) => state.room);
  
  useEffect(() => {
    
    dispatch(getRoomRequest());
  }, []);

  useEffect(() => {
    if (uuid.length>0) {
      afterLogin({ uuid });
      dispatch(getProfileSuccess({name,email,uuid,statusMessage}))
    }
  }, [name, email, uuid,statusMessage]);
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
  const [friendEmailToAdd, setFriendEmailToAdd] = useState('');

  const onFriendPopUpClose = () => {
    setAddFriendPopUp(false);
  };
  const dialogRef= React.createRef<HTMLDivElement>();
  const onOutsideClicked = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const dialogNode = dialogRef.current
    if(dialogNode&&e.target instanceof Node&&!dialogNode.contains(e.target)) setAddFriendPopUp(false)
  }

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

  const onFriendEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFriendEmailToAdd(e.target.value);
  };

  const confirmAddFriend = () => {
    dispatch(addFriend(friendEmailToAdd));
    onFriendPopUpClose();
  };

  return (
    <Main
      tabSelector={tabSelector}
      friendTabOnClick={friendTabOnClick}
      chatTabOnClick={chatTabOnClick}
      addFriendTabOnClick={addFriendTabOnClick}
      roomState={roomState}
      onFriendEmailChange={onFriendEmailChange}
      confirmAddFriend={confirmAddFriend}
      popupAddFriend={addFriendPopUp}
      cancelAddFriend={onFriendPopUpClose}
      friendEmailToAdd={friendEmailToAdd}
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
