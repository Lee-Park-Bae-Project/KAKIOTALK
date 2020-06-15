import React, { FC } from 'react'
import { convertTimeForMsgFormat } from 'common/utils'
import { ApiChat } from 'types'
import * as S from './style'

type Props = {
  createdAt: string
  chatGroup: ApiChat[]
  isMine: boolean
}
const ChatBox: FC<Props> = ({
  createdAt,
  chatGroup,
  isMine,
}) => (
  <S.Container>
    <S.ProfileThumbnailWrapper isMine={isMine}>
      <S.ProfileThumbnail src={'https://images.unsplash.com/photo-1591369376214-b9f91924f10d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}/>
    </S.ProfileThumbnailWrapper>
    <S.Body>
      <S.Name isMine={isMine}>{chatGroup[0].metaInfo.sender.name}</S.Name>
      <S.ChatGroup isMine={isMine}>
        {
          chatGroup.map((chat, idx) => (
            <S.ContentWrapper key={chat.uuid}>
              {
                <S.ContentBorder isMine={isMine}>
                  <S.Content key={chat.uuid} isMine={isMine}>
                    {chat.content}
                  </S.Content>
                  {
                    idx === chatGroup.length - 1 && <S.Time>{convertTimeForMsgFormat(createdAt)}</S.Time>
                  }
                </S.ContentBorder>
              }
            </S.ContentWrapper>
          ))
        }
      </S.ChatGroup>
    </S.Body>
  </S.Container>
)

export default ChatBox
