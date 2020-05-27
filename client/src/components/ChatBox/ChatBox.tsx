import React, { FC, useState } from 'react';
import { ApiChat } from 'types';
import * as S from './style';

type Props = ApiChat
const ChatBox: FC<Props> = (chat) => (
    <S.Container>
      {chat.content}
    </S.Container>
);

export default ChatBox;
