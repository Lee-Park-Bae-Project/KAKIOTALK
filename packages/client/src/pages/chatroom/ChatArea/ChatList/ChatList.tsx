import React from 'react'
import {
  ApiChat,
  ReduxChat,
  ReduxChatMap,
  ReduxState,
} from 'types'
import {
  convertDBTimeTohhmmA,
  convertToLL,
} from 'common/utils'
import DateDivider from 'components/DateDivider'
import ChatBox from 'components/ChatBox'
import shortid from 'shortid'

const {
  useState,
  useEffect,
  useRef,
  useCallback,
} = React
interface Props{
  userUuid: string
  roomUuid: string
  chatState: ReduxState<ReduxChatMap>
  chatBottomRef: React.RefObject<HTMLDivElement>
}

export interface ChatStateGroupByTime {
  [key: string]: ApiChat[][]
}

const ChatList: React.FC<Props> = ({
  userUuid,
  roomUuid,
  chatState,
  chatBottomRef,
}) => {
  const [chatStateGroupByTime, SetChatStateGroupByTime] = useState<ChatStateGroupByTime>({})
  const dateToday = useRef<string>('')

  useEffect(() => {
    if (chatBottomRef && chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView()
    }
  }, [chatStateGroupByTime])

  useEffect(() => {
    const chatsInRedux = chatState.data[roomUuid]
    if (chatsInRedux) {
      const init: ChatStateGroupByTime = {}

      const newChatStateGroupByTime = chatsInRedux.chats.reduce((acc, cur, i) => {
        const time = convertDBTimeTohhmmA(cur.updatedAt)
        if (acc[time]) {
          const size = acc[time].length
          const prevGroup = acc[time][size - 1]
          if (prevGroup[0].metaInfo.sender.uuid === cur.metaInfo.sender.uuid) {
            prevGroup.push(cur)
          } else {
            acc[time].push([cur])
          }
          return acc
        }

        acc[time] = [[cur]]
        return acc
      }, init)
      SetChatStateGroupByTime(newChatStateGroupByTime)
    }
  }, [chatState, roomUuid])

  if (!chatStateGroupByTime) {
    return <div>loading...</div>
  }

  return (
    <>
      {
        Object.keys(chatStateGroupByTime).map((time) => {
          const timeGroup = chatStateGroupByTime[time]
          return timeGroup.map((chatGroup) => {
            let isNewDate = false
            const dateLL = convertToLL(chatGroup[0].createdAt)
            if (dateToday.current !== dateLL) {
              isNewDate = true
              dateToday.current = dateLL
            }
            return (
              <div key={shortid.generate()} className="observe">
                {
                  isNewDate && <DateDivider date={dateLL}/>
                }
                <ChatBox
                  createdAt={chatGroup[0].createdAt}
                  chatGroup={chatGroup}
                  isMine={userUuid === chatGroup[0].metaInfo.sender.uuid}
                />
              </div>
            )
          })
        })
      }
    </>
  )
}

export default ChatList
