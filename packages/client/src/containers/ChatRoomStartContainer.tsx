import React, { FC } from 'react'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { getFriends } from 'modules/friends'
import { getProfile } from 'modules/profile'
import { RootState } from 'modules'
import ChatStart from 'pages/main/ChatStart'
import {
  SearchInput, SelectedList, SelectedName,
} from 'components'
import { InviteUser } from 'types'

interface ChatRoomStartContainerProp{

  updateList: (selectList: InviteUser[]) => void;

}
const ChatRoomStartContainer: FC<ChatRoomStartContainerProp> = ({ updateList }) => {
  const {
    useState, useEffect,
  } = React

  const friendList = useSelector((state: RootState) => state.friends)
  const login = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch()

  useEffect(() => {
    if (login && login.isLoggedIn) {
      dispatch(getFriends())
      dispatch(getProfile())
    }
  }, [login])

  interface InviteUser{
    uuid: string
    name: string
  }
  const [searchFriendKeyword, setSearchFriendKeyword] = useState('')
  const [selectedUser, setSelectedUser] = useState<InviteUser[]>([])

  const onFriendKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFriendKeyword(e.target.value)
  }
  const handleFriendToAdd = (uuid: string, name: string) => {
    if (selectedUser.find((user) => user.uuid === uuid)) {
      setSelectedUser(selectedUser.filter((item) => item.uuid !== uuid))
      updateList(selectedUser.filter((item) => item.uuid !== uuid))
      console.log('deleted')
    } else {
      setSelectedUser(selectedUser.concat({
        uuid, name,
      }))
      updateList(selectedUser.concat({
        uuid, name,
      }))
      console.log('added')
    }
  }
  useEffect(() => {
    console.log(selectedUser)
  }, [selectedUser])
  return (
    <React.Fragment>
      <SelectedList>
        {selectedUser.map(({
          name, uuid,
        }) => <SelectedName name={name} key={uuid} uuid={uuid} handleFriendToAdd={handleFriendToAdd}/>)}
      </SelectedList>

      <SearchInput
        value={searchFriendKeyword}
        onChange={onFriendKeywordChange}
        placeholder='초대할 상대를 입력해주세요'
      />

      <ChatStart
        friendList={friendList}
        searchFriendKeyword={searchFriendKeyword}
        handleFriendToAdd={handleFriendToAdd}
      />
    </React.Fragment>
  )
}

export default ChatRoomStartContainer
