import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFriends } from 'modules/friends';
import { RootState } from 'modules';
import Friend from 'pages/main/Friend';
import { SearchInput } from 'components';
const FriendContainer: React.FC = () => {
  const { useState, useEffect } = React;
  const myProfile = useSelector((state: RootState) => state.profile);
  const friendList = useSelector((state: RootState) => state.friends);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriends());
  }, [friendList]);

  const [searchFriendKeyword, setSearchFriendKeyword] = useState('');
  const onFriendKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFriendKeyword(e.target.value);
  };

  return (
    <React.Fragment>
      <SearchInput
        value={searchFriendKeyword}
        onChange={onFriendKeywordChange}
        placeholder="이름 검색"
      />
      <Friend
        myProfile={myProfile}
        friendList={friendList}
        searchFriendKeyword={searchFriendKeyword}
      />
    </React.Fragment>
  );
};

export default FriendContainer;
