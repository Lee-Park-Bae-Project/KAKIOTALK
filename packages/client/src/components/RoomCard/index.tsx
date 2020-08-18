import React, { FC } from 'react'
import * as S from 'components/RoomCard/styles'
import Icon from 'Icon/Icon'
import {
  convertMillToMMDDYYYY, convertTimeForMsgFormat, getCurTimeDBFormat, getDayDiff,
} from 'common/utils'

interface Props {
  participantsName: string;
  numOfParticipants: number;
  lastMessage?: string | null;
  lastModified?: string;
  numOfNewMessages?: number;
  onClick?: () => void;
}
const RoomCard: FC<Props> = ({
  participantsName,
  numOfParticipants,
  lastMessage = 'this is last message',
  lastModified = getCurTimeDBFormat(),
  numOfNewMessages = 99,
  onClick = undefined,
}) => {
  const dayDiffFromNow = getDayDiff(lastModified)
  return (
  <S.Container onClick={onClick}>
    <S.RoomInfoWrapper>
      <S.ImgWrapper>
        <Icon icon="Person" />
      </S.ImgWrapper>
      <S.InfoWrapper>
        <S.Row>
            <S.UserListWrapper>{participantsName}</S.UserListWrapper>
            <S.NumWrapper>{numOfParticipants}</S.NumWrapper>
        </S.Row>
        <S.LastMsgWrapper>
          {lastMessage}
        </S.LastMsgWrapper>
      </S.InfoWrapper>
    </S.RoomInfoWrapper>
    <S.SubInfoWrapper>
      <S.Time>{ dayDiffFromNow >= 1 ? convertMillToMMDDYYYY(Date.parse(lastModified)) : convertTimeForMsgFormat(lastModified)}</S.Time>
    </S.SubInfoWrapper>
  </S.Container>
  )
}

export default RoomCard
