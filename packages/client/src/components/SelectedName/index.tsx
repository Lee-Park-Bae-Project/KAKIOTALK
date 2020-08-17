import React, { FC } from 'react'
import Icon from 'Icon/Icon'
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
    if (!handleFriendToAdd) return
    handleFriendToAdd(uuid, name)
  }
  return (
    <S.Container onClick={handleFriendToAddClick}>
      <S.name >{name}</S.name>
      <Icon icon="Quit" size="1rem" />
    </S.Container>
  )
}

export default SelectedName
