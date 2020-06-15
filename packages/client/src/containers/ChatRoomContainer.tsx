import React, {
  useEffect, useState,
} from 'react'
import {
  RouteComponentProps, withRouter,
} from 'react-router-dom'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { RootState } from 'modules'
import ChatRoom from 'pages/chatroom'
import withAuth, { WithAuthProps } from 'hocs/withAuth'
import {
  chatFromServer,
  Event,
  joinRooms,
  removeSocketEventListener,
} from 'socket'
import { getChatRequest } from 'modules/chat'
import { convertDBTimeTohhmmA } from 'common/utils'
import { ApiChat } from 'types'

interface MatchParams {
  roomUuid: string;
}
type Props = WithAuthProps & RouteComponentProps<MatchParams>

export interface ChatStateGroupByTime {
  [key: string]: ApiChat[][]
}

const ChatContainer: React.FC<Props> = (props) => {
  const {
    match, history,
  } = props

  const dispatch = useDispatch()
  const chatState = useSelector((state: RootState) => state.chat)
  const roomState = useSelector((state: RootState) => state.room)
  const [roomUuid, setRoomUuid] = useState<string>('')
  const [roomName, setRoomName] = useState<string>('')
  const [chatStateGroupByTime, SetChatStateGroupByTime] = useState<ChatStateGroupByTime>({})

  useEffect(() => {
    if (chatState.data[roomUuid]) {
      interface ChatStateGroupByTime {
        [key: string]: ApiChat[][]
      }
      const init: ChatStateGroupByTime = {}
      const newChatStateGroupByTime = chatState.data[roomUuid].reduce((acc, cur) => {
        const key = convertDBTimeTohhmmA(cur.createdAt)
        if (acc[key]) {
          const len = acc[key].length
          if (acc[key][len - 1][0].metaInfo.sender.uuid === cur.metaInfo.sender.uuid) {
            acc[key][len - 1].push(cur)
          } else {
            acc[key].push([cur])
          }
          return acc
        }

        acc[key] = [[cur]]
        return acc
      }, init)
      SetChatStateGroupByTime(newChatStateGroupByTime)
    }
  }, [chatState, roomUuid])

  const handleBack = () => {
    history.goBack()
  }

  useEffect(() => {
    if (roomUuid.length) {
      joinRooms({ roomUuids: [roomUuid] })
    }
  }, [roomUuid])

  useEffect(() => {
    const rn = roomState.data.find((v) => v.uuid === roomUuid)
    if (!rn) {
      return
    }

    setRoomName(rn.participants.map((v) => v.name).join(', '))
  }, [roomState, roomUuid])

  useEffect(() => {
    setRoomUuid(match.params.roomUuid)
    dispatch(getChatRequest(match.params.roomUuid))
  }, [match.params.roomUuid])

  useEffect(() => {
    chatFromServer(dispatch)

    return (() => {
      removeSocketEventListener(Event.chatFromServer)
    })
  })

  return (
    <ChatRoom
      {...props}
      roomUuid={roomUuid}
      handleBack={handleBack}
      roomName={roomName}
      chatStateGroupByTime={chatStateGroupByTime}
    />
  )
}

export default withAuth(withRouter(ChatContainer))
