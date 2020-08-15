import React, {
  FC, useEffect, useState,
} from 'react'
import TextIcon from 'components/TextIcon'
import { color } from 'styles/global'
import { InviteUser } from 'types'
import * as S from './styles'

interface Props{
  uuid: string
  /** user card 에 표시할 유저 네임 */
  name: string
  /** 유저 상태메시지 */
  statusMessage?: string
  /** 클릭핸들러 */
  handleFriendToAdd?: (uuid: string, name: string) => void
  /** 유저 프로필사진 URL */
  imageUrl?: string
  /** 본인 or 친구 중 누구의 프로필인지 판별 */
  isCheck: boolean

}

const MakeChat: FC<Props> = ({
  uuid, name, handleFriendToAdd, imageUrl, isCheck,
}) => {
  const [checkFriend, setCheckFriend] = useState<boolean>(false)
  const handleFriendToAddClick = () => {
    if (handleFriendToAdd) {
      handleFriendToAdd(uuid, name)
    }
  }

  return (
    <S.Container >
      <S.UserCardContainer>
        <TextIcon
          icon='Account'
          color={color.GRAY}
          text={name}
          imageUrl={imageUrl}
          textSize="15px"
        />
        </S.UserCardContainer>
      <S.Input type="checkbox" onClick={handleFriendToAddClick} checked = {isCheck}/>

    </S.Container>
  )
}

export default MakeChat
