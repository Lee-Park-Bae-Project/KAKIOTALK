import React, {
  FC, Fragment, useEffect, useState,
} from 'react'
import List from 'system/List'
import Hr from 'atoms/Hr'
import {
  SearchInput, UserCard,
} from 'components'
import { SimpleUserType } from 'types'
import * as S from 'system/Room/style'
import { getFriends } from 'modules/friends'
import { getProfile } from 'modules/profile'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { RootState } from 'modules'

export interface Props {
  myProfile: SimpleUserType
  friendList: SimpleUserType[]
  searchFriendKeyword: string
  size?: string
}
const Friend: FC = () => {
  const myProfile: SimpleUserType = useSelector((state: RootState) => state.profile)
  const friendList: SimpleUserType[] = useSelector((state: RootState) => state.friends)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFriends())
    dispatch(getProfile())
  })

  const [searchFriendKeyword, setSearchFriendKeyword] = useState('')
  const onFriendKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFriendKeyword(e.target.value)
  }

  return (
    <Fragment>
    <S.Header>
    <SearchInput
      value={searchFriendKeyword}
      onChange={onFriendKeywordChange}
      placeholder='이름 검색'
    />
  </S.Header>
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
    </Fragment>

  )
}

export default Friend
