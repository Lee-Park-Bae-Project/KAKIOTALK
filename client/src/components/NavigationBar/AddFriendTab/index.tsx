import React, { FC } from 'react';
import styled from 'styled-components';
import AddFriend from '../../../svgs/AddFriend';
import Flex from '../../../commons/Flex';

const S = {
  Container: styled(Flex)`
    width: fit-content;
    height: fit-content;
  `,
};

interface AddFriendProp{
  size?: 'small' | 'medium' | 'large';
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const AddFriendTab: FC<AddFriendProp> = ({
  size = 'small',
  onClick = undefined,
}) => (
  <S.Container onClick={onClick}>
    <AddFriend size={size}/>
  </S.Container>
);

export default AddFriendTab;
