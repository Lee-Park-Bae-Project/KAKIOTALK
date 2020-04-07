import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import Main from 'pages/main';
import { initFriends } from 'modules/friends';
import { initChatRoom } from 'modules/chatRoomList';
import { initProfile } from 'modules/profile';
import {
  Axios, getChatList, getFriendList, getProfile,
} from '../common/request';

const { useState, useEffect } = React;

const MainContainer: React.FC = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state: RootState) => state.profile);
  const friendList = useSelector((state: RootState) => state.friends);
  const chatList = useSelector((state: RootState) => state.chatRoomList);

  useEffect(() => {
    Axios(getProfile)
      .then((res) => dispatch(initProfile(res.data.data)))
      .catch((e) => console.log(e));
    Axios(getFriendList)
      .then((res) => dispatch(initFriends(res.data.data)))
      .catch((e) => console.log(e));

    Axios(getChatList)
      .then((res) => dispatch(initChatRoom(res.data.data)))
      .catch((e) => console.log(e));
  }, []);
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
  const addFriendTabOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    alert('hihi');
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
    />
  );
};

export default MainContainer;
