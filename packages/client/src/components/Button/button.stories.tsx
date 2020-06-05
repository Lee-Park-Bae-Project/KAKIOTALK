import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from './index'

export default {
  title: 'Component/Button',
  component: Button,
  decorators: [withKnobs],
  parameters: { componentSubtitle: '기본적인 버튼' },
}

export const BasicButton: React.FC = () => (
  <Button
    text='primary'
    theme='primary'
  />
)

export const SecondaryButton: React.FC = () => (
  <Button
    text='secondary'
    theme='secondary'
  />
)

export const TertiaryButton = () => (
  <Button
    text='tertiary'
    theme='tertiary'
  />
)

export const NotAllowedButton = () => (
  <Button
    text='전송'
    isAllowd={false}
  />
)

export const ButtonWithLongText: React.FC = () => (
  <Button
    text="Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed"
    />
)

export const ButtonWithClickEvent: React.FC = () => (
    <Button
      text='click me'
      onClick={action('onClick')}
    />

)
