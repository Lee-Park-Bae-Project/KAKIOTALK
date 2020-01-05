import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './index';
import { color } from '../../styles/global';


export default {
  title: 'Component/Basic/Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '기본적인 버튼',
  },
};

export const BasicButton: React.FC = () => {
  const content = text('name', 'Storybook');
  return (
  <Button
    text={content}
  />
  );
};

export const ButtonGray: React.FC = () => (
  <Button
    text="전송"
    bgColor={color.GRAY}
  />
);

export const ButtonWithLongText: React.FC = () => (
  <Button
    text="Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed"
    />
);

export const ButtonWithClickEvent: React.FC = () => (
    <Button
      text='click me'
      onClick={action('onClick')}
    />

);
