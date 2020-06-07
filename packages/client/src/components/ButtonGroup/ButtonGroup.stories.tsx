import React from 'react'
import Button from 'components/Button'
import ButtonGroup from './index'

export default {
  title: 'Component/ButtonGroup',
  component: ButtonGroup,
}

export const DefaultButtonGroup = () => (
    <ButtonGroup>
      <Button text='hi1'/>
      <Button text='hi2'/>
    </ButtonGroup>
)

export const RightButtonGroup = () => (
  <ButtonGroup right>
    <Button text='hi1'/>
    <Button text='hi2'/>
  </ButtonGroup>
)

export const ColumnButtonGroup = () => (
  <ButtonGroup direction='col'>
    <Button text='hi1'/>
    <Button text='hi2'/>
  </ButtonGroup>
)
