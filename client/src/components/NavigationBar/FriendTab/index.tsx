import React, { FC } from 'react';
import styled from 'styled-components';
import Icon from '../../../Icon/Icon';
import Flex from '../../../commons/Flex';
import { color } from '../../../styles/global';

const S = {
  Container: styled(Flex)`
    width: fit-content;
    height: fit-content;
  `,
};

interface FriendTabProp{
  /** 크기 */
  size?: string;
  /** 현재 선택중인지 */
  selected?: boolean;
  /** 클릭 핸들러 */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/**
 * 클릭 했을 때 선택된 것 처럼 filled 된 이미지가 나타남
 */
const FriendTab: FC<FriendTabProp> = ({
  size = '1.5rem',
  selected = false,
  onClick = undefined,
}) => (
    <S.Container onClick={onClick}>
      {
        selected
          ? <Icon icon='PersonFilled' color={color.WHITE} size={size} />
          : <Icon icon='Person' color={color.WHITE} size={size} />
      }
    </S.Container>
);

export default FriendTab;
