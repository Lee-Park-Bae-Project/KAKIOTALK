import React, { FC, useState } from 'react';
import * as S from 'components/RoomCard/styles';
import Icon from 'Icon/Icon';
import Circle from 'atoms/Circle';
import moment from 'moment';
import { convertMillToMMDDYYYY } from 'common/utils';

interface Props{
  userList: string[];
  lastMessage: string;
  lastModified: number;
  numOfNewMessages: number;
  onClick?: () => void;
}
const ChatCard: FC<Props> = ({
  userList,
  lastMessage,
  lastModified,
  numOfNewMessages,
  onClick = undefined,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const numOfUser = userList.length;
  moment.locale();
  return (
    <S.Container onClick={onClick}>
      <S.RoomInfoWrapper>
        <S.ImgWrapper>
          <Icon icon="Person"/>
        </S.ImgWrapper>
        <S.InfoWrapper>
          <S.Row>
            <div>
              <S.UserListWrapper>
                {userList.join(', ')}
              </S.UserListWrapper>
            </div>


          </S.Row>

          <S.LastMsgWrapper>
            <span>{lastMessage}</span>
          </S.LastMsgWrapper>
        </S.InfoWrapper>
        <S.NumWrapper>
          {userList.length}
        </S.NumWrapper>
      </S.RoomInfoWrapper>

      <S.SubInfoWrapper>
        <S.Time>{convertMillToMMDDYYYY(lastModified)}</S.Time>
        <Circle num={numOfNewMessages}/>
      </S.SubInfoWrapper>
    </S.Container>
  );
};

export default ChatCard;
