import React, { FC } from 'react'
import * as S from 'components/RoomCard/styles'
import Icon from 'Icon/Icon'
import {
  convertToLL, convertToLT, getCurTimeDBFormat, getDayDiff,
} from 'common/utils'

interface Props {
  participantsName: string;
  numOfParticipants: number;
  lastMessage?: string;
  lastModified?: string;
  onClick?: () => void;
}
const RoomCard: FC<Props> = ({
  participantsName,
  numOfParticipants,
  lastMessage = 'this is last message',
  lastModified = getCurTimeDBFormat(),
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
      <S.Time>{ dayDiffFromNow ? convertToLT(lastModified) : convertToLL(lastModified)}</S.Time>
    </S.SubInfoWrapper>
  </S.Container>
  )
}

export default RoomCard
