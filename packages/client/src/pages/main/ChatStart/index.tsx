import React, {
  FC, Fragment, useEffect, useState,
} from 'react'
import { List } from 'system'
import {
  MakeChat, SearchInput, SelectedList, SelectedName,
} from 'components'
import {
  InviteUser, SimpleUserType,
} from 'types'
import {
  useAuth, useInput,
} from 'hooks'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { RootState } from 'modules'
import { getFriends } from 'modules/friends'
import { getProfile } from 'modules/profile'

interface Props{
  friendList: SimpleUserType[]
  searchFriendKeyword: string
  size?: string
  handleFriendToAdd?: (uuid: string, name: string) => void
}
interface ChatRoomStartContainerProp{
  updateList: (selectList: InviteUser[]) => void;
}
const ChatStart: FC<ChatRoomStartContainerProp> = ({ updateList }) => {
  const friendList: SimpleUserType[] = useSelector((state: RootState) => state.friends)
  const login = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch()
  const [selectedUser, setSelectedUser] = useState<InviteUser[]>([])
  const { isLoggedIn } = useAuth()
  const friendKeyword = useInput('')

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getFriends())
      dispatch(getProfile())
    }
  }, [isLoggedIn])

  const handleFriendToAdd = (uuid: string, name: string) => {
    if (selectedUser.some((user) => user.uuid === uuid)) {
      setSelectedUser(selectedUser.filter((item) => item.uuid !== uuid))
      updateList(selectedUser.filter((item) => item.uuid !== uuid))
    } else {
      setSelectedUser(selectedUser.concat({
        uuid, name,
      }))
      updateList(selectedUser.concat({
        uuid, name,
      }))
    }
  }
  return (
  <Fragment>
      <SelectedList>
          {selectedUser.map(({
            name, uuid,
          }) => <SelectedName name={name} key={uuid} uuid={uuid} handleFriendToAdd={handleFriendToAdd}/>)}
        </SelectedList>

    <SearchInput
          {...friendKeyword}
          placeholder='초대할 상대를 입력해주세요'
        />

    <List>
      {friendList.length ? (
        friendList
          .filter(
            (friend) => friend.name
              .toLowerCase()
              .indexOf(friendKeyword.value.toLowerCase()) >= 0,
          )
          .map(({
            uuid, name, email, imageUrl,
          }) => (
            <MakeChat
                  key={uuid}
                  uuid={uuid}
                  name={name}
                  imageUrl={imageUrl}
                  handleFriendToAdd={handleFriendToAdd}
                />
          ))) : (
        <h1> 친구를 추가해 보세요!</h1>
      )}

    </List>
    </Fragment>
  )
}
export default ChatStart
