import React, { useState } from 'react'
import Dialog from 'components/Dialog'
import {
  boolean, text, withKnobs,
} from '@storybook/addon-knobs'
import UserCard from 'components/UserCard'
import Button from 'components/Button'
import { color } from 'styles/global'

export default {
  title: 'Component/Dialog',
  component: Dialog,
  parameters: { docs: { inlineStories: false } },
  decorators: [withKnobs],
}

export const DefaultDialog = () => {
  const isVisible = boolean('isVisible', true)
  const title = text('title', '친구추가')
  const description = text('description', 'junow 님을 친구목록에 추가하시겠습니까?')
  const isHideButton = boolean('isHideButton', false)
  const canCancel = boolean('canCancel', true)
  const cancelText = text('cancelText', '취소')
  const confirmText = text('confirmText', '확인')

  return (
    <Dialog
      isVisible={isVisible}
      title={title}
      description={description}
      isHideButton={isHideButton}
      canCancel={canCancel}
      cancelText={cancelText}
      confirmText={confirmText}
    />
  )
}

export const WithChildren = () => {
  const isVisible = boolean('isVisible', true)
  const isHideButton = boolean('isHideButton', true)
  const canCancel = boolean('canCancel', true)
  const cancelText = text('cancelText', '취소')
  const confirmText = text('confirmText', '확인')
  const name1 = text('name1', 'junow')
  const statusMessage1 = text('statusMesage1', 'I Like Juno')
  const name2 = text('name2', 'marshmello3773')
  const statusMessage2 = text('statusMessage2', 'I Like Marshmello')
  const name3 = text('name3', 'Baebaam')
  const statusMessage3 = text('statusMessage3', 'I Like Travel')

  return (
    <Dialog
      isVisible={isVisible}
      isHideButton={isHideButton}
      canCancel={canCancel}
      cancelText={cancelText}
      confirmText={confirmText}
    >
      <UserCard
        name={name1}
        statusMessage={statusMessage1}
      />
      <UserCard
        name={name2}
        statusMessage={statusMessage2}
      />
      <UserCard
        name={name3}
        statusMessage={statusMessage3}
      />
    </Dialog>
  )
}

export const WithClickListener = () => {
  const [visible, setVisible] = useState(false)
  const [result, setResult] = useState('')
  const title = text('title', '버튼 클릭 테스트')
  const description = text('description', '버튼 클릭 테스트')
  const isHideButton = boolean('isHideButton', false)
  const canCancel = boolean('canCancel', true)
  const cancelText = text('cancelText', '취소')
  const confirmText = text('confirmText', '확인')

  const onClick = () => {
    setVisible(true)
  }

  const onCancel = () => {
    setVisible(false)
    setResult('취소함')
  }

  const onConfirm = () => {
    setVisible(false)
    setResult('확인함')
  }
  return (
    <>
      <Button
        text='dialog 열기'
        onClick={onClick}
      />
      <p style={{ color: color.YELLO }}>{result}</p>
      <Dialog
        isVisible={visible}
        title={title}
        description={description}
        isHideButton={isHideButton}
        canCancel={canCancel}
        cancelText={cancelText}
        confirmText={confirmText}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </>
  )
}
