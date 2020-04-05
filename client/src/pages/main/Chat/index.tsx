import React, { FC, useState, useEffect } from 'react';
import List from 'system/List';
import shortid from 'shortid';
import RoomCard from 'components/RoomCard';

interface ChatList {
  userList: string[];
  lastMessage: string;
  lastModified: number;
  numOfNewMessage: number;
}

interface Props {
  searchKeyword: string;
  chatList: ChatList[];
}


const Chat: FC<Props> = ({
  searchKeyword,
  chatList,
}) => (
    <List>
      {
        searchKeyword.length > 0
          ? chatList.filter((chat) => chat.userList.some((user) => user.indexOf(searchKeyword) > 0)).map(({
            userList,
            lastMessage,
            lastModified,
            numOfNewMessage,
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
              numOfNewMessage={numOfNewMessage}
              onClick={onRoomCardClick}
            />
            );
          })
          : chatList.map(({
            userList,
            lastMessage,
            lastModified,
            numOfNewMessage,
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
              numOfNewMessage={numOfNewMessage}
              onClick={onRoomCardClick}
            />
            );
          })


      }
    </List>
);

export default Chat;
