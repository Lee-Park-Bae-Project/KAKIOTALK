import React, {
  FC, RefObject,
} from 'react'
import * as S from 'system/Profile/styles'
import Icon from 'Icon/Icon'
import { color } from 'styles/global'
import TextIcon from 'components/TextIcon'
import { Link } from 'react-router-dom'
import Hr from 'atoms/Hr'

interface Prop {
  /** 유져 식별자 */
  uuid: string
  /** 유저 이름 */
  name: string
  /** 상태메시지 */
  statusMessage: string
  /** 프로필닫기 핸들러 */
  onCloseClick: () => void
  /** 프로필 이미지 URL */
  imageUrl: string
  /** 프로필 팝업 ref */
  profileRef: React.RefObject<HTMLDivElement>
  /** 본인 or 친구의 프로필 구별 */
}

/**
 * 친구 목록을 하나 클릭 했을 때 뜨는 Modal 에 들어갈 내용
 */
const Profile: FC<Prop> = ({
  uuid,
  name,
  statusMessage = '',
  onCloseClick,
  imageUrl = null,
  profileRef,
}) => (
  <S.Container ref={profileRef}>
    <S.CloseButton>
      <Icon
        icon='Close'
        size='1.5rem'
        color={color.WHITE}
        onClick={onCloseClick}
      />
    </S.CloseButton>
    <S.ProfileWrapper>
      {imageUrl ? (
        <S.Image src={imageUrl} big={true} />
      ) : (
        <Icon icon='PersonFilled' color={color.GRAY} size='4rem' />
      )}
      <S.NameWrapper>{name}</S.NameWrapper>
      {statusMessage && <S.StatusWrapper>{statusMessage}</S.StatusWrapper>}
      <Hr />
      <S.Footer>
        <Link
          to={{
            pathname: '/chat',
            state: {
              uuid,
              name,
            },
          }}
          style={{ textDecoration: 'none' }}
        >

          <TextIcon
            icon='ChatFilled'
            color={color.GRAY}
            text='1:1 채팅'
            textColor={color.WHITE}
            iconPosition='top'
          />
        </Link>
        <TextIcon
          icon='Delete'
          color={color.WHITE}
          text='삭제'
          textColor={color.WHITE}
          iconPosition='top'
          onClick={onCloseClick}
        />
      </S.Footer>
    </S.ProfileWrapper>
  </S.Container>
)

export default Profile
