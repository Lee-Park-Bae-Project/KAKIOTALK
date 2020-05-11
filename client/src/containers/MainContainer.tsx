import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import Main from 'pages/main';
import { getFriends,addFriend } from 'modules/friends';
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
  const history = useHistory();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getFriends());
    dispatch(getChatRoom());
    console.log(name, email, uuid);
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

  const [addFriendPopUp, setAddFriendPopUp] = useState(false);
  const [friendIdToAdd,setFriendIdToAdd] = useState('');

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
  const onFriendIdChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFriendIdToAdd(e.target.value);
  }

  const confirmAddFriend = ()=>{
    dispatch(addFriend(friendIdToAdd))
    onPopUpClose()
  }

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
      popupAddFriend={addFriendPopUp}
      confirmAddFriend={confirmAddFriend}
      cancelAddFriend={onPopUpClose}
      friendIdToAdd={friendIdToAdd}
      onFriendIdChange={onFriendIdChange}
      logoutTabOnClick={logoutTabOnClick}
    />
  );
};

export default withAuth(MainContainer);
