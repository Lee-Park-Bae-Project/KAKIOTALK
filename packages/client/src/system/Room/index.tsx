import * as React from 'react'
import List from 'system/List'
import RoomCard from 'components/RoomCard'
import { RoomState } from 'modules/room'
import {
  RouteComponentProps, withRouter,
} from 'react-router-dom'
import { url } from 'common/constants'

interface Props {
  roomState: RoomState;
}

const Room: React.FC<Props & RouteComponentProps> = ({
  roomState, history,
}) => (
  roomState.isLoading ? (
    <div>
      loading...
    </div>
  )
    : <List>
    {
      roomState.data.map(({
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
      })
    }
  </List>
)

export default withRouter(Room)
