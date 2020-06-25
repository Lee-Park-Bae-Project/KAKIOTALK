import React, { FC } from 'react'
import Icon from 'Icon/Icon'
import Flex from 'atoms/Flex'
import * as S from './style'

  interface Props{
    uuid: string
    /** user card 에 표시할 유저 네임 */
    name: string
    /** 유저 상태메시지 */
    handleFriendToAdd?: (uuid: string, name: string) => void
  }

const SelectedName: FC<Props> = ({
  name, handleFriendToAdd, uuid,
}) => {
  const handleFriendToAddClick = () => {
    if (handleFriendToAdd) {
      handleFriendToAdd(uuid, name)
    }
    console.log('clicked', uuid, name)
  }
  return (
    <S.Container>
      <S.name onClick={handleFriendToAddClick}>{name}</S.name>
      <Icon icon="Quit" size="1rem" />
    </S.Container>
  )
}

export default SelectedName
