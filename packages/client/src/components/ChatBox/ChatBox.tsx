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
    <S.Container isMine={isMine}>
      {
        !isMine && (
          <UserCard
            name={metaInfo.sender.name}
          />
        )
      }
      <S.Wrapper>
        {content}
      </S.Wrapper>
      <S.Time>
        {convertDBTimeTohhmmA(createdAt)}
      </S.Time>
    </S.Container>
)

export default ChatBox
