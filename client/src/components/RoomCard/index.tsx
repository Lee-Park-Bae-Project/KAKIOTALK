import React, { FC, useState } from 'react';
import * as S from 'components/RoomCard/styles';
import Icon from 'Icon/Icon';
import Circle from 'commons/Circle';
import moment from 'moment';

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
  const numOfUser = userList.length;
  return (
    <S.Container>
      <S.ImgWrapper>
        <Icon icon="Person"/>
      </S.ImgWrapper>
      <S.InfoWrapper>
        <span>{userList.join(', ')}</span>
        {lastMessage}
      </S.InfoWrapper>
      <S.SubInfoWrapper>
        <p>{moment(lastModified).format('LT')}</p>
        <Circle num={numOfNewMessage}/>
      </S.SubInfoWrapper>
    </S.Container>
  );
};

export default ChatCard;
