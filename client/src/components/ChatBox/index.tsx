import React, { FC } from 'react'
import * as S from './style'
const ChatBox = (props: any) => {
    return (
        <div>
            {
                props.received ?
                    <S.LeftBox>
                        <S.Text>{props.text}</S.Text>
                        <S.SendTime>{props.sendTime}</S.SendTime>
                    </S.LeftBox>
                    :
                    <S.RightBox>
                        <S.SendTime>{props.sendTime}</S.SendTime>
                        <S.Text>{props.text}</S.Text>
                    </S.RightBox>

            }

        </div>

    )
}

export default ChatBox