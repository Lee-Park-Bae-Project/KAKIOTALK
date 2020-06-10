import React, {
  FC, useState,
} from 'react'
import { useDispatch } from 'react-redux'
import List from 'system/List'
import Hr from 'atoms/Hr'
import { UserCard } from 'components'
import { deleteFriend } from 'modules/friends'
import { User } from '@kakio/common'
import { alert } from 'common/utils'
import { SimpleUserType } from 'types'

export interface Props {
  myProfile: SimpleUserType
  friendList: SimpleUserType[];
  searchFriendKeyword: string;
}
const Friend: FC<Props> = ({
  myProfile, friendList, searchFriendKeyword,
}) => {
  const [clickedUser, setClickedUser] = useState({
    uuid: '',
    name: '',
    email: '',
    statusMessage: '',
    imageUrl: '',
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

  const dispatch = useDispatch()
  const onDeleteFriend = () => {
    alert.confirmDelete(clickedUser.name).then((value) => {
      if (value) {
        dispatch(deleteFriend(clickedUser.uuid))
      }
    })
  }

  return (
    <List>
      <UserCard
        key={myProfile.uuid}
        uuid={myProfile.uuid}
        name={myProfile.name}
        statusMessage={myProfile.statusMessage}
        imageUrl={myProfile.imageUrl}
        isMyProfile={true}
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
            uuid, statusMessage, name, email, imageUrl,
          }) => (
              <UserCard
                key={uuid}
                uuid={uuid}
                name={name}
                statusMessage={statusMessage}
                imageUrl={imageUrl}
                isMyProfile={false}
              />
          ))
      ) : (
        <h1>친구를 추가해 보세요!</h1>
      )}

    </List>
  )
}

export default Friend
