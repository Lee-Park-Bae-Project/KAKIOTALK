import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import { Route } from 'react-router-dom';
import Main from 'pages/main';
import { getFriends } from 'modules/friends';
import { getChatRoom } from 'modules/chatRoom';
import { getProfile } from 'modules/profile';
<<<<<<< HEAD
import Login from 'pages/login';
=======
import { Cookies, useCookies } from 'react-cookie';
import Login from 'pages/login'
>>>>>>> 7d0d72c133db76bc41bbbb1eb3382de780847f12

const { useState, useEffect } = React;

const MainContainer: React.FC = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state: RootState) => state.profile);
  const friendList = useSelector((state: RootState) => state.friends);
  const chatList = useSelector((state: RootState) => state.chatRoomList);
  const { loginState } = useSelector((state: RootState) => state.login);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getFriends());
    dispatch(getChatRoom());
  }, []);
  const [tabSelector, setTabSelector] = useState({
    friend: true,
    chat: false
  });
  const friendTabOnClick = () => {
    setTabSelector({
      friend: true,
      chat: false
    });
  };

  const chatTabOnClick = () => {
    setTabSelector({
      friend: false,
      chat: true
    });
  };

  const addFriendTabOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    alert('hihi');
    console.log(loginState);
  };

  const [searchKeyword, setSearchKeyword] = useState('');

  const onSearchKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return loginState ? (
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
    />
  ) : (
<<<<<<< HEAD
    <Route path="/" component={Login} />
=======
    <Login/>
>>>>>>> 7d0d72c133db76bc41bbbb1eb3382de780847f12
  );
};

export default MainContainer;
