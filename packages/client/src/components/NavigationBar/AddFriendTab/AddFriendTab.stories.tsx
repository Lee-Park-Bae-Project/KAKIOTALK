import React from 'react'
import AddFriend from 'components/NavigationBar/AddFriendTab'

export default {
  title: 'Component/Tab/AddFriend',
  component: AddFriend,
}

export const AddFriendBasic = () => {
  const onClick = () => console.warn('친구추가창이 뜰거임')
  return (
    <AddFriend onClick={onClick}/>
  )
}
