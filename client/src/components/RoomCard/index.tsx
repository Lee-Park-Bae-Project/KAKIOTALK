import React, { FC } from 'react';
import * as S from 'components/RoomCard/styles';
import Icon from 'Icon/Icon';
import Circle from 'atoms/Circle';
import { convertMillToMMDDYYYY } from 'common/utils';

interface Props{
  participantsName: string;
  lastMessage?: string;
  lastModified?: number;
  numOfNewMessages?: number;
  onClick?: () => void;
}
const ChatCard: FC<Props> = ({
  participantsName,
  lastMessage = 'this is last message',
  lastModified = Date.now(),
  numOfNewMessages = 99,
  onClick = undefined,
}) => (
    <S.Container onClick={onClick}>
      <S.RoomInfoWrapper>
        <S.ImgWrapper>
          <Icon icon="Person"/>
        </S.ImgWrapper>
        <S.InfoWrapper>
          <S.Row>
            <div>
              <S.UserListWrapper>
                {participantsName}
              </S.UserListWrapper>
            </div>
          </S.Row>
          <S.LastMsgWrapper>
            <span>{lastMessage}</span>
          </S.LastMsgWrapper>
        </S.InfoWrapper>
        <S.NumWrapper>
          {participantsName.length}
        </S.NumWrapper>
      </S.RoomInfoWrapper>

      <S.SubInfoWrapper>
        <S.Time>{convertMillToMMDDYYYY(lastModified)}</S.Time>
        <Circle num={numOfNewMessages}/>
      </S.SubInfoWrapper>
    </S.Container>
);

export default ChatCard;
