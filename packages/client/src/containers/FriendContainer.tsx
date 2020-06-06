import * as React from 'react'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { getFriends } from 'modules/friends'
import { getProfile } from 'modules/profile'
import { RootState } from 'modules'
import Friend from 'pages/main/Friend'
import { SearchInput } from 'components'
import styled from 'styled-components'
import { color } from 'styles/global'
import * as S from 'system/Room/style'

const FriendContainer: React.FC = () => {
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
          placeholder='이름 검색'
        />

      </S.Header>
      <Friend
        myProfile={myProfile}
        friendList={friendList}
        searchFriendKeyword={searchFriendKeyword}
      />
    </React.Fragment>
  )
}

export default FriendContainer
