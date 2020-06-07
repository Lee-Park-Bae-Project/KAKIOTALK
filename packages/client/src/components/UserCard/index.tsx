import React, {
  FC, useRef, useState,
} from 'react'
import * as S from 'components/UserCard/styles'
import { color } from 'styles/global'
import TextIcon from 'components/TextIcon'
import Profile from 'system/Profile'
import { useOutsideClick } from 'common/utils'

interface UserCardProp {
  /** user uuid */
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
  isMyProfile?: boolean
}

/**
 * UserCard
 *
 * - 유저의 프로필 사진과 이름이 표시됩니다.
 */
const UserCard: FC<UserCardProp> = ({
  uuid = '',
  name,
  statusMessage = '',
  imageUrl,
}) => {
  const [clicked, setClicked] = useState(false)
  const onClick = () => {
    setClicked(!clicked)
  }

  const ref = React.createRef<HTMLDivElement>()
  useOutsideClick(ref, () => {
    if (clicked) setClicked(false)
  })

  return (
    <S.Container>
      <S.ProfileWrapper>
        <TextIcon
          icon='Account'
          color={color.GRAY}
          text={name}
          onClick={onClick}
          imageUrl={imageUrl}
        >
          {clicked && (
            <React.Fragment>
            <S.Tri/>
            <Profile
              uuid={uuid}
              name={name}
              statusMessage={statusMessage}
              onCloseClick={onClick}
              imageUrl={imageUrl || ''}
              profileRef={ref}
            />
            </React.Fragment>
          )}
        </TextIcon>
        {statusMessage && (
          <S.StatusMessageWrapper>{statusMessage}</S.StatusMessageWrapper>
        )}
      </S.ProfileWrapper>
    </S.Container>
  )
}

export default UserCard
