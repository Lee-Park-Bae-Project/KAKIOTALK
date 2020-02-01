import React, { FC } from 'react';
import styled from 'styled-components';
import { color, weight, fontSize } from 'styles/global';

interface Props{
  num: number;
}

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 1rem;
    margin: 1rem;
    padding: 0.1rem 0.5rem;
    border-radius: 2rem;
    text-align: center;
    font-size: ${fontSize.SMALL};
    background-color: ${color.RED};
    color: ${color.WHITE};
    font-weight: ${weight.NORMAL};
  `,
};
const Circle: FC<Props> = ({
  num,
}) => {
  const newNum = Math.log10(num) > 2
    ? '999+'
    : num.toString();
  return (
    <S.Container>
      {newNum}
    </S.Container>
  );
};

export default Circle;
