import React, { FC } from 'react'
import List from 'system/List'
import {
  MakeChat, UserCard,
} from 'components'
import { SimpleUserType } from 'types'
import styled from 'styled-components'
import Flex from 'atoms/Flex'
import * as S from '../../../components/MakeChat/styles'

const K = { Container: styled(Flex)`
    width: fit-content;
    height: 0.1rem;
  ` }

export interface Props{
  friendList: SimpleUserType[]
  searchFriendKeyword: string
  size?: string
  handleFriendToAdd?: (uuid: string, name: string) => void
}

const ChatStart: FC<Props> = ({
  friendList, searchFriendKeyword, handleFriendToAdd,
}) => (
  <List>
    {friendList.length > 0 ? (
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
