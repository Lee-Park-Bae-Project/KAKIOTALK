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
  onClick?: () => void;
}
const ChatCard: FC<Props> = ({
  userList,
  lastMessage,
  lastModified,
  numOfNewMessage,
  onClick = undefined,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const numOfUser = userList.length;
  return (
    <S.Container onClick={onClick}>
      <S.RoomInfoWrapper>
        <S.ImgWrapper>
          <Icon icon="Person"/>
        </S.ImgWrapper>
        <S.InfoWrapper>
          <S.Row>
            <S.UserListWrapper>
              {userList.join(', ')}
            </S.UserListWrapper>
            <S.NumWrapper>
              {userList.length}
            </S.NumWrapper>
          </S.Row>

          <S.LastMsgWrapper>
            <span>{lastMessage}</span>
          </S.LastMsgWrapper>
      </S.InfoWrapper>
      </S.RoomInfoWrapper>

      <S.SubInfoWrapper>
        <S.Time>{moment(lastModified).format('LT')}</S.Time>
        <Circle num={numOfNewMessage}/>
      </S.SubInfoWrapper>
    </S.Container>
  );
};

export default ChatCard;
