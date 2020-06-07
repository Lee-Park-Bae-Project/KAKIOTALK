import React from 'react'
import Logout from 'components/NavigationBar/LogoutTab'

export default {
  title: 'Component/Tab/Logout',
  component: Logout,
}

export const LogoutBasic = () => {
  const onClick = () => alert('로그아웃!')
  return <Logout onClick={onClick} />
}
