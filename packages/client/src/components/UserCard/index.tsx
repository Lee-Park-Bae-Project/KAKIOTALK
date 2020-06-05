import React, { FC } from 'react'
import * as S from 'components/UserCard/styles'
import { color } from 'styles/global'
import TextIcon from 'components/TextIcon'

interface UserCardProp {
  /** user card 에 표시할 유저 네임 */
  name: string
  /** 유저 상태메시지 */
  statusMessage?: string
  /** 클릭핸들러 */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

/**
 * UserCard
 *
 * - 유저의 프로필 사진과 이름이 표시됩니다.
 */
const UserCard: FC<UserCardProp> = ({
  name, onClick, statusMessage,
}) => (
  <S.Container>
    <S.ProfileWrapper>
      <TextIcon
        icon='Account'
        color={color.GRAY}
        text={name}
        onClick={onClick}
      />
      {statusMessage && (
        <S.StatusMessageWrapper>{statusMessage}</S.StatusMessageWrapper>
      )}
    </S.ProfileWrapper>
  </S.Container>
)

export default UserCard
