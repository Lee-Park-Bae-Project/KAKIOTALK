import React, { useState } from 'react'
import FriendTab from 'components/NavigationBar/FriendTab'

export default {
  title: 'Component/Tab/FriendTab',
  component: FriendTab,
}

export const FriendTabBasic = () => {
  const [selected, setSelected] = useState(false)
  const onClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    setSelected(!selected)
  }
  return (
    <FriendTab
      selected={selected}
      onClick={onClick}
    />
  )
}
