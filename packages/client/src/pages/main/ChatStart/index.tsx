import React, {
  FC, Fragment, useEffect, useState,
} from 'react'
import List from 'system/List'
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

interface Props{
  friendList: SimpleUserType[]
  searchFriendKeyword: string
  size?: string
  handleFriendToAdd?: (uuid: string, name: string) => void
}
interface ChatRoomStartContainerProp{
  updateList: (selectList: InviteUser[]) => void
}
const ChatStart: FC<ChatRoomStartContainerProp> = ({ updateList }) => {
  const friendList: SimpleUserType[] = useSelector((state: RootState) => state.friends)
  const dispatch = useDispatch()
  const [selectedUser, setSelectedUser] = useState<InviteUser[]>([])
  const [isCheck, setIsCheck] = useState<Record<string, boolean|undefined>[]>([])

  const { isLoggedIn } = useAuth()
  const friendKeyword = useInput('')

  const handleFriendToAdd = (uuid: string, name: string) => {
    console.log(isCheck)
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
            uuid, name, imageUrl,
          }) => (
            <MakeChat
                  key={uuid}
                  uuid={uuid}
                  name={name}
                  imageUrl={imageUrl}
                  handleFriendToAdd={handleFriendToAdd}
                  isCheck={selectedUser.filter((user) => user.uuid === uuid).length > 0}

                />
          ))) : (
        <h5> 친구를 추가해 보세요!</h5>
      )}

    </List>
    </Fragment>
  )
}
export default ChatStart
