import * as React from 'react'
import List from 'system/List'
import RoomCard from 'components/RoomCard'
import { RoomState } from 'modules/room'
import {
  RouteComponentProps, withRouter,
} from 'react-router-dom'
import { url } from 'common/constants'
import * as S from 'system/Room/style'
import { SearchInput } from 'components'

interface Props {
  roomState: RoomState
}
const {
  useState, Fragment,
} = React

const Room: React.FC<Props & RouteComponentProps> = ({
  roomState,
  history,
}) => {
  const [searchRoomKeyword, setSearchRoomKeyword] = useState('')
  const onRoomKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRoomKeyword(e.target.value)
  }

  return (
    <Fragment>
      <S.Header>
        <SearchInput
          value={searchRoomKeyword}
          onChange={onRoomKeywordChange}
          placeholder='참여자 검색'
        />
      </S.Header>
      {roomState.isLoading ? (
        <div>loading...</div>
      ) : (
        <List>
          {roomState.data
            .filter(({ participants }) => participants.some(
              (participant) => participant.name
                .toLowerCase()
                .indexOf(searchRoomKeyword.toLowerCase()) >= 0,
            ),)
            .map(({
              uuid, participants,
            }) => {
              const participantsNames = participants.map((v) => v.name).join(', ')
              const onClick = () => {
                history.push(`${url.room}/${uuid}`)
              }
              return (
                <RoomCard
                  key={uuid}
                  participantsName={participantsNames}
                  onClick={onClick}
                />
              )
            })}
        </List>
      )}
    </Fragment>
  )
}

export default withRouter(Room)
