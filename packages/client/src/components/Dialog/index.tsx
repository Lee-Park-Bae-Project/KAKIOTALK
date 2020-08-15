import React, { FC } from 'react'
import * as S from 'components/Dialog/styles'
import Button from 'components/Button'
import ButtonGroup from 'components/ButtonGroup'

interface Props{
  /** 렌더링 여부 */
  isVisible: boolean;
  /** 제목 */
  title?: string;
  /** 설명 */
  description?: string;
  /** 하위요소들 */
  children?: React.ReactNode;
  /** 기본 버튼 보일지 안보일지 */
  isHideButton: boolean;
  /** 단순 취소가 가능한지 */
  canCancel: boolean;
  /** 취소 버튼에 들어갈 글자 */
  cancelText: string;
  /** 확인 버튼에 들어갈 글자 */
  confirmText: string;
  /** 취소버튼 클릭 핸들러 */
  onCancel?: () => void;
  /** 확인 버튼 클릭 핸들러 */
  onConfirm?: () => void;
}

/**
 * 다이얼로그 입니다.
 * 기본적으로는 제목과 설명글로 렌더링가능하고
 * 필요한 경우 하위요소를 넘겨서 렌더링 할 수 있습니다.
 */
const Dialog: FC<Props> = ({
  isVisible,
  title,
  description,
  children,
  isHideButton,
  canCancel,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
}) => {
  if (!isVisible) {
    return null
  }
  return (
  <S.Container>
    <S.ContentWrapper>
      <S.Content>
        {title && <S.Title>{title}</S.Title>}
        {description && <S.Description>{description}</S.Description>}
        {children}
        {!isHideButton && (
          <ButtonGroup right>
            {canCancel && (
              <Button
                text={confirmText}
                theme='primary'
                onClick={onConfirm}
              />
            )}
            <Button
              text={cancelText}
              theme='tertiary'
              onClick={onCancel}
            />
          </ButtonGroup>
        )}
      </S.Content>
    </S.ContentWrapper>
  </S.Container>
  )
}

export default Dialog
