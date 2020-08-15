import React, {
  FC, Fragment, useEffect,
} from 'react'
import { List } from 'system'
import Hr from 'atoms/Hr'
import {
  SearchInput, UserCard,
} from 'components'
import { SimpleUserType } from 'types'
import * as S from 'system/Room/style'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'
import { useInput } from 'hooks'

const Friend: FC = () => {
  const myProfile: SimpleUserType = useSelector((state: RootState) => state.profile)
  const friendList: SimpleUserType[] = useSelector((state: RootState) => state.friends)
  const friendKeyword = useInput('')
  return (
    <Fragment>
    <S.Header>
    <SearchInput
      {...friendKeyword}
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
              .indexOf(friendKeyword.value.toLowerCase()) >= 0,
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
