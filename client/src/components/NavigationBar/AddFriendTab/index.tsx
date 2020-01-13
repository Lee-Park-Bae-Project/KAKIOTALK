import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../../commons/Flex';
import { color } from '../../../styles/global';
import Icon from '../../../Icon/Icon';

const S = {
  Container: styled(Flex)`
    width: fit-content;
    height: fit-content;
  `,
};

interface AddFriendProp{
  size?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const AddFriendTab: FC<AddFriendProp> = ({
  size = '1.5rem',
  onClick = undefined,
}) => (
    <S.Container onClick={onClick}>
    <Icon icon='AddFriend' color={color.WHITE} size={size}/>
  </S.Container>
);
export default AddFriendTab;
