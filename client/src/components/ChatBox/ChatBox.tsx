import React, { FC, useState } from 'react';
import { ApiChat } from 'types';
import { convertDBTimeTohhmmA } from 'common/utils';
import * as S from './style';

type Props = ApiChat & {
  userUuid: string;
}
const ChatBox: FC<Props> = ({
  uuid,
  userUuid,
  content,
  metaInfo,
  createdAt,
  updatedAt,
}) => (
    <S.Container isMine={metaInfo.sender.uuid == userUuid}>
      <S.Wrapper>
        {content}
      </S.Wrapper>
      <S.Time>
        {convertDBTimeTohhmmA(createdAt)}
      </S.Time>
    </S.Container>
);

export default ChatBox;
