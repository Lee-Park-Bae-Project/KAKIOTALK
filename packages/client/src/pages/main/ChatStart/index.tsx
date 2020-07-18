import React, { FC } from 'react'
import List from 'system/List'
import {
  MakeChat, UserCard,
} from 'components'
import { SimpleUserType } from 'types'
import styled from 'styled-components'
import Flex from 'atoms/Flex'

interface Props{
  friendList: SimpleUserType[]
  searchFriendKeyword: string
  size?: string
  handleFriendToAdd?: (uuid: string, name: string) => void
}

const ChatStart: FC<Props> = ({
  friendList, searchFriendKeyword, handleFriendToAdd,
}) => (
  <List>
    {friendList.length ? (
      friendList
        .filter(
          (friend) => friend.name
            .toLowerCase()
            .indexOf(searchFriendKeyword.toLowerCase()) >= 0,
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
)
export default ChatStart
