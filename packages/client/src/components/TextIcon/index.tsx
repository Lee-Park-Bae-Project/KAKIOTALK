import React, {
  FC, ReactElement,
} from 'react'
import styled from 'styled-components'
import Icon, { IconType } from 'Icon/Icon'

type iconPositionType = 'left' | 'right' | 'top' | 'bottom'

interface ContainerProp {
  /** text에 대한 icon의 상대적 위치 */
  iconPosition?: iconPositionType
  /** 클릭핸들러 */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
interface TextProp {
  /** 아이콘과 함께 표시될 텍스트 */
  text: string
  /** 텍스트 색 지정할 때 이용 */
  textColor?: string
  /** 텍스트 크기 지정할 떄 이용 */
  textSize?: string
}

interface Prop extends TextProp, ContainerProp {
  /** icon 이름 */
  icon: IconType
  /** 색을 지정할 때 이용 */
  color?: string
  /** 크기 지정할 때 이용 */
  size?: string | number
  /** 구글프로필사진 URL */
  imageUrl?: string
  children?: ReactElement | boolean
}

const directionMap = {
  top: 'column',
  bottom: 'column-reverse',
  left: 'row',
  right: 'row-reverse',
}

const S = {
  Container: styled.div<ContainerProp>`
    display: flex;
    flex-direction: ${(props) => {
    if (!props.iconPosition) {
      return 'left'
    }
    return directionMap[props.iconPosition]
  }};
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
  `,
  TextWrapper: styled.span<TextProp>`
    color: ${(props) => props.textColor};
    line-height: 2rem;
    padding: 1rem;
    font-size:${(props) => props.textSize};
  `,
  Image: styled.img`
  width: 2.5rem;
  height : 2.5rem;
  border-radius : 40%;
  cursor: pointer;
`,

}

/**
 * text와 icon 함께 사용할 때 이용
 */
const TextIcon: FC<Prop> = ({
  icon,
  color,
  size,
  iconPosition = 'left',
  onClick = undefined,
  text,
  textColor = 'black',
  textSize = '1rem',
  imageUrl = null,
  children,
}) => (
  <S.Container iconPosition={iconPosition}>
     {
    imageUrl ? <S.Image src ={imageUrl} onClick={onClick} />
      : <Icon icon={icon} color={color} size={size} onClick={onClick} />
    }
  {children && children}
    <S.TextWrapper text={text} textColor={textColor} textSize={textSize}>
      {text}
    </S.TextWrapper>
  </S.Container>
)

export default TextIcon
