import React, {
  FC, useState,
} from 'react'
import { useDispatch } from 'react-redux'
import List from 'system/List'
import Hr from 'atoms/Hr'
import Profile from 'system/Profile'
import {
  MyProfile, PopUp, UserCard,
} from 'components'
import { deleteFriend } from 'modules/friends'
import { User } from '@kakio/common'
import { alert } from 'common/utils'

export interface Props {
  myProfile: User;
  friendList: User[];
  searchFriendKeyword: string;
}
const Friend: FC<Props> = ({
  myProfile, friendList, searchFriendKeyword,
}) => {
  const [friendProfileClick, setFriendProfileClick] = useState(false)
  const [clickedUser, setClickedUser] = useState({
    uuid: '',
    name: '',
    email: '',
    statusMessage: '',
  })

  const onProfileClose = (
    profileRef: React.RefObject<HTMLDivElement>,
    setProfileClick: React.Dispatch<React.SetStateAction<boolean>>,
  ) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const profileNode = profileRef.current
    if (
      profileNode
        && e.target instanceof Node
        && !profileNode.contains(e.target)
    ) {
      setProfileClick(false)
    }
  }
  const friendProfieRef = React.createRef<HTMLDivElement>()
  const userProfileRef = React.createRef<HTMLDivElement>()
  const [userProfileClick, setUserProfileClick] = useState(false)

  const onFriendProfileClose = onProfileClose(
    friendProfieRef,
    setFriendProfileClick,
  )
  const onUserProfileClose = onProfileClose(
    userProfileRef,
    setUserProfileClick,
  )
  const dispatch = useDispatch()
  const onDeleteFriend = () => {
    alert.confirmDelete(clickedUser.name).then((value) => {
      if (value) {
        dispatch(deleteFriend(clickedUser.uuid))
        setFriendProfileClick(false)
      }
    })
  }

  return (
    <List>
      <UserCard
        key={myProfile.uuid}
        name={myProfile.name}
        statusMessage={myProfile.statusMessage}
        onClick={() => {
          setUserProfileClick(true)
        }}
      />
      <Hr />
      친구 {friendList.length}
      {friendList.length > 0 ? (
        friendList
          .filter(
            (friend) => friend.name
              .toLowerCase()
              .indexOf(searchFriendKeyword.toLowerCase()) >= 0,
          )
          .map(({
            uuid, statusMessage, name, email,
          }) => {
            const onUserCardClick = () => {
              setFriendProfileClick(true)
              setClickedUser({
                uuid,
                name,
                email,
                statusMessage,
              })
            }

            return (
              <UserCard
                key={uuid}
                name={name}
                statusMessage={statusMessage}
                onClick={onUserCardClick}
              />
            )
          })
      ) : (
        <h1>친구를 추가해 보세요!</h1>
      )}
      {friendProfileClick ? (
        <PopUp onClose={onFriendProfileClose} refs={friendProfieRef}>
          <Profile
            uuid={clickedUser.uuid}
            name={clickedUser.name}
            statusMessage={clickedUser.statusMessage}
            onDeleteClick={onDeleteFriend}
          />
        </PopUp>
      ) : null}
      {userProfileClick ? (
        <PopUp onClose={onUserProfileClose} refs={userProfileRef}>
          <MyProfile
            uuid={myProfile.uuid}
            name={myProfile.name}
            statusMessage={myProfile.statusMessage}
          />
        </PopUp>
      ) : null}
    </List>
  )
}

export default Friend
