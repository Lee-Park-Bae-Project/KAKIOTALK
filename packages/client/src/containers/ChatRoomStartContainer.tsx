import * as React from 'react'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { getFriends } from 'modules/friends'
import { getProfile } from 'modules/profile'
import { RootState } from 'modules'
import ChatStart from 'pages/main/ChatStart'
import { SearchInput } from 'components'
import * as S from 'system/Room/style'

const ChatRoomStartContainer: React.FC = () => {
  const {
    useState, useEffect,
  } = React
  const myProfile = useSelector((state: RootState) => state.profile)
  const friendList = useSelector((state: RootState) => state.friends)
  const login = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch()

  useEffect(() => {
    if (login && login.isLoggedIn) {
      dispatch(getFriends())
      dispatch(getProfile())
    }
  }, [login])

  const [searchFriendKeyword, setSearchFriendKeyword] = useState('')
  const onFriendKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFriendKeyword(e.target.value)
  }

  return (
    <React.Fragment>
      <S.Header>
        <SearchInput
          value={searchFriendKeyword}
          onChange={onFriendKeywordChange}
          placeholder='ì�´ë¦„ ê²€ìƒ‰'
        />
      </S.Header>
      <ChatStart

        friendList={friendList}
        searchFriendKeyword={searchFriendKeyword}
      />
    </React.Fragment>
  )
}

export default ChatRoomStartContainer
