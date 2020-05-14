import * as React from 'react';
import List from 'system/List';
import RoomCard from 'components/RoomCard';
import { RoomState } from 'modules/room';

interface Props {
  searchKeyword: string;
  roomState: RoomState;
}

const Room: React.FC<Props> = ({ searchKeyword, roomState }) => (
  roomState.isLoading ? (
    <div>
      loading...
    </div>
  )
    : <List>
    {
      roomState.data.map(({ uuid, participants }) => {
        const participantsNames = participants.map((v) => v.name).join(', ');
        const onClick = () => {
          console.log(uuid);
        };
        return (
          <RoomCard
            key={uuid}
            participantsName={participantsNames}
            onClick={onClick}
          />
        );
      })
    }
  </List>
);


export default Room;
