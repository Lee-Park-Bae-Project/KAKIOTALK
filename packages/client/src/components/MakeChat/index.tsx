import React, { FC } from 'react'
import TextIcon from 'components/TextIcon'
import { color } from 'styles/global'
import * as S from './styles'

interface Props{
  uuid?: string
  /** user card 에 표시할 유저 네임 */
  name: string
  /** 유저 상태메시지 */
  statusMessage?: string
  /** 클릭핸들러 */
  handleFriendToAdd?: (uuid: string, name: string) => void
  /** 유저 프로필사진 URL */
  imageUrl?: string
  /** 본인 or 친구 중 누구의 프로필인지 판별 */

}

const MakeChat: FC<Props> = ({
  uuid, name, handleFriendToAdd, imageUrl,
}) => {
  const handleFriendToAddClick = () => {
    if (handleFriendToAdd && uuid) {
      handleFriendToAdd(uuid, name)
    }
  }
  return (
    <S.Container >
      <S.UserCardContainer onClick={handleFriendToAddClick}>
        <TextIcon
          icon='Account'
          color={color.GRAY}
          text={name}
          onClick={handleFriendToAddClick}
          imageUrl={imageUrl}
          textSize="15px"
        />
        </S.UserCardContainer>
      <S.Input type="checkbox" />
      <S.Checkmark onClick={handleFriendToAddClick} />
    </S.Container>
  )
}

export default MakeChat
