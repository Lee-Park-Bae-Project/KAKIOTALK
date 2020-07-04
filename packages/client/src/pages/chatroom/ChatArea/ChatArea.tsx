import React from 'react'
import { ApiChat } from 'types'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { RootState } from 'modules'
import {
  convertDBTimeTohhmmA, convertToLL,
} from 'common/utils'
import shortid from 'shortid'
import DateDivider from 'components/DateDivider'
import ChatBox from 'components/ChatBox'
import { getChatRequest } from 'modules/chat'
import { useIntersectionObserver } from 'hooks'
import * as S from './styles'

export interface ChatStateGroupByTime {
  [key: string]: ApiChat[][]
}

const {
  useRef,
  useState,
  useEffect,
} = React

interface Props{
  userUuid: string
  roomUuid: string
}
const ChatArea: React.FC<Props> = ({
  userUuid,
  roomUuid,
}) => {
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const chatTopRef = useRef<HTMLDivElement>(null)
  const ChatBottomRef = useRef<HTMLDivElement>(null)
  const dateToday = useRef<string>('')
  const chatState = useSelector((state: RootState) => state.chat)
  const [chatStateGroupByTime, SetChatStateGroupByTime] = useState<ChatStateGroupByTime>({})
  const dispatch = useDispatch()

  const onIntersect: IntersectionObserverCallback = ([{
    isIntersecting, time,
  }]) => {
    if (!isIntersecting) return
    // if (time < 10000) return
    if (chatState.isLoading) {
      return
    }
    dispatch(getChatRequest({
      roomUuid,
      offset: chatState.data[roomUuid].offset,
      limit: chatState.data[roomUuid].offset,
    }))
  }

  useEffect(() => {
    if (ChatBottomRef && ChatBottomRef.current) {
      ChatBottomRef.current.scrollIntoView()
    }
  }, [chatStateGroupByTime])

  useIntersectionObserver({
    target: chatTopRef.current,
    onIntersect,
  })

  useEffect(() => {
    if (chatState.data[roomUuid]) {
      const init: ChatStateGroupByTime = {}
      const newChatStateGroupByTime = chatState.data[roomUuid].chats.reduce((acc, cur) => {
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

  return (
    <S.Container ref={chatContainerRef}>
      {
        chatState.isLoading === false && <div ref={chatTopRef} id="observe"/>
      }
      {
        !chatStateGroupByTime
          ? <div>loading</div>
          : (
            (
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
            )
          )
      }
    <S.ChatBottom ref={ChatBottomRef}></S.ChatBottom>
    </S.Container>
  )
}

export default ChatArea
