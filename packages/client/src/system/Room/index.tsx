/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react'
import List from 'system/List'
import {
  RouteComponentProps, withRouter,
} from 'react-router-dom'
import { url } from 'common/constants'
import * as S from 'system/Room/style'
import {
  Loader, NoChatRoom, RoomCard, SearchInput,
} from 'components'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { RootState } from 'modules'
import { useInput } from 'hooks'
import { getRoomRequest } from 'modules/room'

const Room: React.FC<RouteComponentProps> = ({ history }) => {
  const roomKeyword = useInput('')
  const roomState = useSelector((state: RootState) => state.room)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRoomRequest())
  }, [])
  return (
      <S.Container>
      <S.Header>
        <SearchInput
          {...roomKeyword}
          placeholder='참여자 검색'
        />
      </S.Header>
      {roomState.isLoading ? (
          <Loader/>
      ) : !roomState.data.length ? (
        <NoChatRoom/>
      ) : (
        <List>
          {roomState.data
            .filter(({ participants }) => participants.some(
              (participant) => participant.name
                .toLowerCase()
                .indexOf(roomKeyword.value.toLowerCase()) >= 0,
            ),)
            .map(({
              uuid, participants, updatedAt, lastMessage,
            }) => {
              const participantsNames = participants.map((v) => v.name).join(', ')
              const onClick = () => {
                history.push(`${url.room}/${uuid}`)
              }
              return (
                <RoomCard
                  key={uuid}
                  participantsName={participantsNames}
                  numOfParticipants={participants.length}
                  onClick={onClick}
                  lastModified={updatedAt}
                  lastMessage={lastMessage}
                />
              )
            })}
        </List>
      )}
    </S.Container>
  )
}

export default withRouter(Room)
