import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import Main from 'pages/main';
import { getFriends } from 'modules/friends';
import { getProfile } from 'modules/profile';
import { getRoomRequest } from 'modules/room';

import withAuth, { WithAuthProps } from 'hocs/withAuth';
import { afterLogin } from '../socket';

const { useState, useEffect } = React;
const MainContainer: React.FC<WithAuthProps> = ({ name, email, uuid }) => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state: RootState) => state.profile);
  const friendList = useSelector((state: RootState) => state.friends);
  const loginState = useSelector((state: RootState) => state.login);
  const roomState = useSelector((state: RootState) => state.room);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getFriends());
    dispatch(getRoomRequest());
  }, []);

  useEffect(() => {
    if (uuid.length > 0) {
      afterLogin({ uuid });
    }
  }, [
    name,
    email,
    uuid,
  ]);

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
  ): void => {
    console.log(loginState);
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
      tabSelector={tabSelector}
      friendTabOnClick={friendTabOnClick}
      chatTabOnClick={chatTabOnClick}
      addFriendTabOnClick={addFriendTabOnClick}
      roomState={roomState}
    />
  );
};

export default withAuth(MainContainer);
