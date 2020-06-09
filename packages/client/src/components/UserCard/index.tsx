import React, {
  FC, useEffect, useRef, useState,
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
  isMyProfile: boolean
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
  isMyProfile,
}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isOverflow, setIsOverflow] = useState(false)
  const onClick = () => {
    setIsClicked(!isClicked)
  }
  const profileRef = React.createRef<HTMLDivElement>()
  useOutsideClick(profileRef, () => {
    if (isClicked) setIsClicked(false)
  })
  const userCardRef = React.createRef<HTMLDivElement>()
  useEffect(() => {
    if (userCardRef.current && userCardRef.current?.getBoundingClientRect().bottom < 300) {
      setIsOverflow(true)
    }
  })
  return (
    <S.Container ref={userCardRef}>
      <S.ProfileWrapper>
        <TextIcon
          icon='Account'
          color={color.GRAY}
          text={name}
          onClick={onClick}
          imageUrl={imageUrl}
        >
          {isClicked && (
            <React.Fragment>
            <S.Tri/>
            <Profile
              uuid={uuid}
              name={name}
              statusMessage={statusMessage}
              onCloseClick={onClick}
              imageUrl={imageUrl || ''}
              profileRef={profileRef}
              isMyProfile={isMyProfile}
              isOverflow={isOverflow}
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
