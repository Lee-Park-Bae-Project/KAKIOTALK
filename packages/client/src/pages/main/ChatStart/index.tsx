import React, {
  FC, Fragment,
} from 'react'
import { List } from 'system'
import {
  MakeChat, SearchInput, SelectedList, SelectedName,
} from 'components'
import {
  InviteUser, SimpleUserType,
} from 'types'
import { useInput } from 'hooks'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'

interface Props{
  friendList: SimpleUserType[]
  searchFriendKeyword: string
  size?: string
  handleFriendToAdd?: (uuid: string, name: string) => void
}
interface ChatRoomStartContainerProp{
  selectedUser: InviteUser[]
  setSelectedUser: (selectList: InviteUser[]) => void
}
const ChatStart: FC<ChatRoomStartContainerProp> = ({
  selectedUser, setSelectedUser,
}) => {
  const friendList: SimpleUserType[] = useSelector((state: RootState) => state.friends)

  const friendKeyword = useInput('')

  const handleFriendToAdd = (uuid: string, name: string) => {
    if (selectedUser.some((user) => user.uuid === uuid)) {
      setSelectedUser(selectedUser.filter((item) => item.uuid !== uuid))
    } else {
      setSelectedUser(selectedUser.concat({
        uuid, name,
      }))
    }
  }
  const isCheck = (uuid: string) => selectedUser.filter((user) => user.uuid === uuid).length > 0
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
                  isCheck={isCheck(uuid)}
                />
          ))) : (
        <h5> 친구를 추가해 보세요!</h5>
      )}

    </List>
    </Fragment>
  )
}
export default ChatStart
