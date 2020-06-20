import React, { FC } from 'react'
import { UserCard } from 'components'
import * as S from './styles'

interface Props{

  uuid?: string
  /** user card 에 표시할 유저 네임 */
  name: string
  /** 유저 상태메시지 */
  statusMessage?: string
  /** 클릭핸들러 */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  /** 유저 프로필사진 URL */
  imageUrl?: string
  /** 본인 or 친구 중 누구의 프로필인지 판별 */
  isMyProfile: boolean
}

const MakeChat: FC<Props> = ({
  uuid, name, statusMessage, onClick, imageUrl, isMyProfile,
}) => (
    <S.Container>
       <UserCard
        key={uuid}
        uuid={uuid}
        name={name}
        statusMessage={statusMessage}
        imageUrl={imageUrl}
        isMyProfile={false}
        />
      <S.Input type="checkbox" />
      <S.Checkmark />
    </S.Container>
)

export default MakeChat
