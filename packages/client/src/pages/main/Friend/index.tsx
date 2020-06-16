import React, { FC } from 'react'
import List from 'system/List'
import Hr from 'atoms/Hr'
import { UserCard } from 'components'
import { SimpleUserType } from 'types'

export interface Props {
  myProfile: SimpleUserType
  friendList: SimpleUserType[];
  searchFriendKeyword: string;
}
const Friend: FC<Props> = ({
  myProfile, friendList, searchFriendKeyword,
}) => (
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

export default Friend
