import React, { FC } from 'react';
import * as S from 'components/Profile/styles';
import Icon from 'Icon/Icon';
import { color } from 'styles/global';
import TextIcon from 'components/TextIcon';

interface Prop {
  /** 유저 이름 */
  name: string;
  /** 상태메시지 */
  statusMessage?: string;
  /** 1:1 채팅 버튼 클릭 핸들러 */
  onChatClick?: () => void;
  /** 삭제 버튼 클릭 핸들러 */
  onRemoveClick?: () => void;
}

/**
 * 친구 목록을 하나 클릭 했을 때 뜨는 Modal 에 들어갈 내용
 */
const Profile: FC<Prop> = ({
  name,
  statusMessage,
  onChatClick = undefined,
  onRemoveClick = undefined,
}) => (
    <S.Container>
      <Icon icon='PersonFilled' color={color.GRAY} size='4rem'/>
      <S.NameWrapper>{name}</S.NameWrapper>
      {
        statusMessage
        && <S.StatusWrapper>{statusMessage}</S.StatusWrapper>
      }
      <S.Footer>
        <TextIcon
          icon='Send'
          color={color.GRAY}
          text='1:1 채팅'
          textColor={color.BLACK}
          iconPosition='top'
          onClick={onChatClick}
        />
        <TextIcon
          icon='Close'
          color={color.GRAY}
          text='삭제'
          textColor={color.BLACK}
          iconPosition='top'
          onClick={onRemoveClick}
        />
      </S.Footer>
    </S.Container>
);

export default Profile;
