import React, { FC } from 'react'
import UserCard from './index'

export default {
  title: 'Component/UserCard',
  component: UserCard,
}

export const BasicUserCard: FC = () => (
  <UserCard
    name='junow'
    statusMessage='Brand New 2020'
    />
)

export const UserCardWithClickHandler: FC = () => {
  const name = 'junow'
  const onClick = () => console.warn(name)
  return (
    <UserCard
      name={name}
      onClick={onClick}
      statusMessage='Brand New 2020'
    />
  )
}

export const UserCardWithLongText = () => (
  <UserCard
    name='junow'
    statusMessage='was it a cat i saw was it a cat i saw was it a cat i saw'
  />
)

UserCardWithLongText.story = { name: '긴 텍스트가 들어있는 UserCard' }
