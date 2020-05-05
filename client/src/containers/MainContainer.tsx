import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import Main from 'pages/main';
import { getFriends } from 'modules/friends';
import { getChatRoom } from 'modules/chatRoom';
import { getProfile } from 'modules/profile';
import request from 'common/request';
import { useHistory } from 'react-router-dom';
import withAuth, { Props } from 'hocs/withAuth';

const { useState, useEffect } = React;
const MainContainer: React.FC<Props> = ({ name, email, uuid }) => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state: RootState) => state.profile);
  const friendList = useSelector((state: RootState) => state.friends);
  const chatList = useSelector((state: RootState) => state.chatRoomList);
  const loginState = useSelector((state: RootState) => state.login);
  const history = useHistory();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getFriends());
    dispatch(getChatRoom());
    console.log(name, email, uuid);
  }, []);

  useEffect(() => {
    console.log(name, email, uuid);
  }, [name, email, uuid]);

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
  const addFriendTabOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {};

  const logoutTabOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    request
      .getLogout()
      .then(response => {
        console.log(response);
        history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const [searchKeyword, setSearchKeyword] = useState('');
  const onSearchKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <Main
      searchKeyword={searchKeyword}
      onSearchKeywordChange={onSearchKeywordChange}
      myProfile={myProfile}
      friendList={friendList}
      chatList={chatList}
      tabSelector={tabSelector}
      friendTabOnClick={friendTabOnClick}
      chatTabOnClick={chatTabOnClick}
      addFriendTabOnClick={addFriendTabOnClick}
      logoutTabOnClick={logoutTabOnClick}
    />
  );
};

export default withAuth(MainContainer);
