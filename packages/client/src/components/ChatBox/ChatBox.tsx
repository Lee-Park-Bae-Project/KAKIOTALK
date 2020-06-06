import React, {
  FC, useState,
} from 'react'
import { ApiChat } from 'types'
import { convertDBTimeTohhmmA } from 'common/utils'
import { UserCard } from 'components'
import * as S from './style'

type Props = ApiChat & {
  userUuid: string;
  isMine: boolean;
}
const ChatBox: FC<Props> = ({
  uuid,
  userUuid,
  content,
  metaInfo,
  createdAt,
  updatedAt,
  isMine,
}) => (
  <S.Container>
    <S.ProfileThumbnailWrapper isMine={isMine}>
      <S.ProfileThumbnail src={'https://images.unsplash.com/photo-1591369376214-b9f91924f10d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}/>
    </S.ProfileThumbnailWrapper>
    <S.Body>
      <S.Name isMine={isMine}>{metaInfo.sender.name}</S.Name>
      <S.ChatTime isMine={isMine}>
        <S.Content>
          {content}
        </S.Content>
        <S.Time>
          {convertDBTimeTohhmmA(createdAt)}
        </S.Time>
      </S.ChatTime>
    </S.Body>
  </S.Container>
)

export default ChatBox
