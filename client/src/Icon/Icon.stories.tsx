import React from 'react';
import styled from 'styled-components';
import Icon, { iconTypes } from './Icon';

export default {
  component: Icon,
  title: 'Component|Icon',
};

export const defaultIcon = () => <Icon icon='Send' size='4rem'/>;
defaultIcon.story = {
  name: 'Default',
};

export const coloredIcon = () => <Icon icon='Send' color='red'/>;

export const customSizeIcon = () => <Icon icon='Send' size='4rem'/>;

const S = {
  Ul: styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`,
};
export const listOfIcons = () => (
    <S.Ul>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </S.Ul>
);

listOfIcons.story = {
  name: '전체 아이콘 목록',
};
