import React, {
  ChangeEvent,
  KeyboardEvent,
  useRef,
  useState,
} from 'react'
import { useDispatch } from 'react-redux'
import { getCurTimeDBFormat } from 'common/utils'
import { chatFromClient } from 'modules/socket'
import * as S from './styles'

interface Props{
  roomUuid: string
  userUuid: string
}
const TextArea: React.FC<Props> = ({
  roomUuid,
  userUuid,
}) => {
  const [hasContent, setHasContent] = useState<boolean>(false)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const dispatch = useDispatch()
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (messageRef.current) {
      if (messageRef.current.value) {
        setHasContent(true)
      } else {
        setHasContent(false)
      }
    }
  }

  const handleSubmit = () => {
    if (!messageRef || !messageRef.current || !messageRef.current.value.trim().length) {
      return
    }

    const msg = messageRef.current.value
    const createdAt = getCurTimeDBFormat()
    dispatch(chatFromClient({
      content: msg,
      roomUuid,
      createdAt,
      userUuid,
    }))

    if (messageRef.current) {
      messageRef.current.focus()
      messageRef.current.value = ''
    }
  }
  const handleEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.target && e.currentTarget.value.trim().length > 0) {
        handleSubmit()
      }
    }
  }
  return (
    <S.Container>
      <S.Input
        ref={messageRef}
        onChange={handleMessageChange}
        onKeyPress={handleEnterPress}
      />
      <S.ButtonWrapper>
        <S.SendBtn
          onClick={handleSubmit}
          hasContent={hasContent}
        >
          전송
        </S.SendBtn>
      </S.ButtonWrapper>
    </S.Container>
  )
}

export default TextArea
