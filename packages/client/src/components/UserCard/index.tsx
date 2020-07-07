import React, {
  FC, useCallback, useState,
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
  onClick?: () => void
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
  onClick = undefined,
}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isOverflow, setIsOverflow] = useState(false)
  const handlePopUpClick = () => {
    setIsClicked(!isClicked)
  }
  const profileRef = React.useRef(null)
  useOutsideClick(profileRef, () => {
    if (isClicked) setIsClicked(false)
  })
  const setOverflow = useCallback((node: HTMLDivElement) => {
    if (node && node.getBoundingClientRect().bottom < 300) {
      setIsOverflow(true)
    }
  }, [])
  return (
    <S.Container ref={setOverflow} onClick={onClick}>
      <S.ProfileWrapper>
        <TextIcon
          icon='Account'
          color={color.GRAY}
          text={name}
          onClick={handlePopUpClick}
          imageUrl={imageUrl}
          statusMessage={statusMessage}
          textSize="15px"
        >
          {isClicked && (
            <React.Fragment>
            <S.Tri/>
            <Profile
              uuid={uuid}
              name={name}
              statusMessage={statusMessage}
              handleCloseClick={handlePopUpClick}
              imageUrl={imageUrl || ''}
              profileRef={profileRef}
              isMyProfile={isMyProfile}
              isOverflow={isOverflow}
            />
            </React.Fragment>
          )}
        </TextIcon>

      </S.ProfileWrapper>
    </S.Container>
  )
}

export default UserCard
