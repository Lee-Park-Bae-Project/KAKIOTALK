import React, { FC } from 'react';
import styled from 'styled-components';
import Chat from '../../../svgs/Chat';
import Flex from '../../../commons/Flex';

const S = {
  Container: styled(Flex)`
    width: fit-content;
    height: fit-content;
  `,
};

interface ChatTabProp {
  /** 사이즈 */
  size: 'small' | 'medium' | 'large';
  /** 현재 선택중인지 */
  selected: boolean;
  /** 클릭 핸들러 */
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/**
 * 클릭 했을 때 선택된 것 처럼 filled 된 이미지가 나타남
 */
const ChatTab: FC<ChatTabProp> = ({
  size = 'medium',
  selected = false,
  onClick = undefined,
}) => (
  <S.Container onClick={onClick}>
    <Chat selected={selected} size={size}/>
  </S.Container>
);

export default ChatTab;
