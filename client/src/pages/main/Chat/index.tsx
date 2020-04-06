import React, { FC, useState, useEffect } from 'react';
import List from 'system/List';
import shortid from 'shortid';
import RoomCard from 'components/RoomCard';
import { ChatRoom } from 'modules/ChatRoomList';

interface Props {
  searchKeyword: string;
  chatList: ChatRoom[];
}


const Chat: FC<Props> = ({
  searchKeyword,
  chatList,
}) => (
    <List>
      {
        searchKeyword.length > 0
          ? chatList.filter((chat) => chat.userList.some((user) => user.toLowerCase().indexOf(searchKeyword.toLowerCase()) >= 0)).map(({
            userList,
            lastMessage,
            lastModified,
            numOfNewMessages,
          }) => {
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
          })
          : chatList.map(({
            userList,
            lastMessage,
            lastModified,
            numOfNewMessages,
          }) => {
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
          })


      }
    </List>
);

export default Chat;
