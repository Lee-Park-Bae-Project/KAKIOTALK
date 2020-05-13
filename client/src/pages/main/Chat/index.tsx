import React, { FC } from 'react';
import List from 'system/List';
import shortid from 'shortid';
import RoomCard from 'components/RoomCard';
import { ChatRoom } from 'types';

interface Props {
  searchChatKeyword: string;
  chatList: ChatRoom[];
}

const Chat: FC<Props> = ({ searchChatKeyword, chatList }) => (
  <List>
    {chatList
      .filter(chat =>
        chat.userList.some(
          user =>
            user.toLowerCase().indexOf(searchChatKeyword.toLowerCase()) >= 0,
        ),
      )
      .map(({ userList, lastMessage, lastModified, numOfNewMessages }) => {
        const onRoomCardClick = () => {
          alert(userList.toString());
        };
        return (
          <RoomCard
            key={shortid.generate()}
            userList={userList}
            lastMessage={lastMessage}
            lastModified={lastModified}
            numOfNewMessages={numOfNewMessages}
            onClick={onRoomCardClick}
          />
        );
      })}
  </List>
);

export default Chat;
