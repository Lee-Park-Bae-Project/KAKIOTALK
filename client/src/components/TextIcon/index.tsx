import React, { FC } from 'react';
import styled from 'styled-components';
import Icon, { IconType } from '../../Icon/Icon';

type iconPositionType = 'left' | 'right' | 'top' | 'bottom';

interface ContainerProp {
  /** text에 대한 icon의 상대적 위치 */
  iconPosition?: iconPositionType;
}
interface TextProp {
  /** 아이콘과 함께 표시될 텍스트 */
  text: string;
  /** 텍스트 색 지정할 때 이용 */
  textColor?: string;
  /** 텍스트 크기 지정할 떄 이용 */
  textSize?: string;
}

interface Prop extends TextProp, ContainerProp {
  /** icon 이름 */
  icon: IconType;
  /** 색을 지정할 때 이용 */
  color?: string;
  /** 크기 지정할 때 이용 */
  size?: string | number;
}


const directionMap = {
  top: 'column',
  bottom: 'column-reverse',
  left: 'row',
  right: 'row-reverse',
};

const S = {
  Container: styled.div<ContainerProp>`
    display: flex;
    flex-direction: ${(props) => directionMap[props.iconPosition]};
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
  `,
  TextWrapper: styled.span<TextProp>`
    color: ${(props) => props.textColor};
  `,
};

/**
 *
 */
const TextIcon: FC<Prop> = ({
  icon,
  color,
  size,
  iconPosition = 'left',
  text,
  textColor = 'black',
  textSize = '1rem',
}) => (
    <S.Container iconPosition={iconPosition} className='hihi'>
      <Icon icon={icon} color={color} size={size}/>
      <S.TextWrapper
        text={text}
        textColor={textColor}
        textSize={textSize}
      >{text}</S.TextWrapper>
    </S.Container>
);

export default TextIcon;
