import React, { FC, useState, useEffect } from 'react'
import * as S from './style'


const ChatRoom: FC = (props: any) => {
    const [messages, setMessages] = useState(
        [
            {
                writerId: '',
                writerName: 'beomjoon',
                writerEmail: '',
                writerUuid: '',
                sendTime: new Date(),
                text: 'sample message',
                received: true,
            }
        ])
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = () => {
        const date = new Date()

        setMessages(messages.concat([{
            writerUuid: '',
            writerId: '',
            writerName: '',
            writerEmail: '',
            sendTime: date,
            text: inputValue,
            received: false,
        }]))
        setInputValue('')
    }
    const handleEnterPress = (e: any) => {
        if (e.key === 'Enter') handleSubmit()
    }
    const { id, userName } = props.location.state
    const chatLogs = messages.map(msg => <S.ChatBox
        sendTime={`${msg.sendTime.getHours()}:${msg.sendTime.getMinutes()}`}
        text={msg.text}
        received={msg.received}
        key={msg.sendTime.getTime()
        }
    />)
    return (
        <S.Room>
            <S.UserCard userName={userName} />
            <S.ChatContainer>
                {chatLogs}
            </S.ChatContainer>
            <S.InputContainer>
                <S.InputArea
                    id="input"
                    type='text'
                    value={inputValue}
                    onChange={(handleInputChange)}
                    onKeyPress={handleEnterPress}
                />
                <S.ButtonWrapper>
                    <S.SendBtn onClick={handleSubmit}>전송</S.SendBtn>
                </S.ButtonWrapper>
            </S.InputContainer>

        </S.Room>
    )
}


export default ChatRoom