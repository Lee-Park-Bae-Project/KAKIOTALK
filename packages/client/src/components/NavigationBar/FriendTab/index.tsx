import React, { FC } from 'react'
import styled from 'styled-components'
import Icon from 'Icon/Icon'
import { color } from 'styles/global'
import { Link } from 'react-router-dom'

const S = { Container: styled.div`
    width: fit-content;
    height: fit-content;
  ` }

interface FriendTabProp{
  /** 크기 */
  size?: string;
  /** 현재 선택중인지 */
  isRouted: boolean;
}

/**
 * 클릭 했을 때 선택된 것 처럼 filled 된 이미지가 나타남
 */
const FriendTab: FC<FriendTabProp> = ({
  size = '1.5rem',
  isRouted,
}) => (
    <S.Container>
      <Link to='/main/friend-list'>
      {
        isRouted
          ? <Icon icon='PersonFilled' color={color.WHITE} size={size} />
          : <Icon icon='Person' color={color.WHITE} size={size} />
      }
      </Link>
    </S.Container>
)

export default FriendTab
