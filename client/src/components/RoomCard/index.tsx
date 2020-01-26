import React, { FC, useState } from 'react';
import * as S from 'components/RoomCard/styles';

interface Props{
  userList: string[];
  lastMessage: string;
  lastModified: number;
  numOfNewMessage: number;
}
const ChatCard: FC<Props> = ({
  userList,
  lastMessage,
  lastModified,
  numOfNewMessage,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <S.Container>
      {userList}
      {lastMessage}
      {lastModified}
      {numOfNewMessage}
    </S.Container>
  );
};

export default ChatCard;
