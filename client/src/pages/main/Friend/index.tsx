import React, {
  FC,
  useState,
  useEffect,
  HtmlHTMLAttributes,
} from 'react';
import List from 'system/List';
import UserCard from 'components/UserCard';
import Hr from 'atoms/Hr';
import SearchInput from 'components/SearchInput';

interface User {
  id: string;
  userName: string;
  statusMessage: string;
}

interface Props {
  myProfile: User;
  friendList: User[];
  // searchKeyword: string;
  // onSearchKeywordChange: (
  //   e: React.ChangeEvent<
  //     HTMLInputElement
  //   >,
  // ) => void;
}

const Friend: FC<Props> = ({
  myProfile,
  friendList,
  // searchKeyword,
  // onSearchKeywordChange,
}) => (
  <List>
    <UserCard
      key={myProfile.id}
      userName={
        myProfile.userName
      }
      statusMessage={
        myProfile.statusMessage
      }
    />
    {/* <SearchInput
      value={searchKeyword}
      onChange={
        onSearchKeywordChange
      }
      placeholder="?? ?? ??"
    /> */}
    <Hr />
    {myProfile.id}'s friends{' '}
    {friendList.length}
    {friendList.map(
      ({
        id,
        statusMessage,
        userName,
      }) => {
        const onUserCardClick = () => {
          alert(userName);
        };
        return (
          <UserCard
            key={id}
            userName={
              userName
            }
            statusMessage={
              statusMessage
            }
            onClick={
              onUserCardClick
            }
          />
        );
      },
    )}
  </List>
);

export default Friend;
