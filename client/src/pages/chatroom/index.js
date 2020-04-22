import React from 'react'
import Styled from 'styled-components'
import Profile from 'system/Profile'

class ChatRoom extends React.Component{

    render(){
        return (
            <Room>
                Nothing
            </Room>
        )
    }


}


const Room = Styled.div`
  height:100vh;
  background : #8db4c7;
  display:flex;
  flex-direction:column;
  `

export default ChatRoom