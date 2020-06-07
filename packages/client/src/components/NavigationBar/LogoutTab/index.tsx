import React, { FC } from 'react'
import styled from 'styled-components'
import Flex from 'atoms/Flex'
import { color } from 'styles/global'
import Icon from 'Icon/Icon'

const S = { Container: styled(Flex)`
    width: fit-content;
    height: fit-content;
  ` }

interface LogoutProp {
  size?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const LogoutTab: FC<LogoutProp> = ({
  size = '1.5rem',
  onClick = undefined,
}) => (
  <S.Container onClick={onClick}>
    <Icon icon="logout" color={color.WHITE} size={size} />
  </S.Container>
)
export default LogoutTab
