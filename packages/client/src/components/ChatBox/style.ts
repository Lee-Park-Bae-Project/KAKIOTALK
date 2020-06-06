import styled from 'styled-components'
import {
  color, weight,
} from 'styles/global'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem;
`

interface ProfileThumbnailWrapperProps {
  isMine: boolean
}
export const ProfileThumbnailWrapper = styled.div<ProfileThumbnailWrapperProps>`
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  border-radius: 20%;
  display: ${({ isMine }) => (isMine ? 'none' : 'flex')};
`
export const ProfileThumbnail = styled.img`
  width: 2rem;
  height: auto;
  display: flex;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

interface ChatTimeProps{
  isMine: boolean
}
export const ChatTime = styled.div<ChatTimeProps>`
  display: flex;
  flex-direction: ${({ isMine }) => (isMine ? 'row-reverse' : 'row')}
`

interface NameProps {
  isMine: boolean
}
export const Name = styled.p<NameProps>`
  padding: 0 .5rem;
  display: ${({ isMine }) => (isMine ? 'none' : 'flex')};
`

export const Content = styled.div`
  width: fit-content;
  background: ${color.WHITE};
  max-width: 70%;
  overflow-wrap: break-word;
  border-radius: 5px;
  margin: 1rem 0.5rem;
  padding: 0.5rem;
`
export const Time = styled.div`
  align-self: flex-end;
  margin: 1rem 0;
  font-size: 0.6rem;
  font-weight: ${weight.WEAK};
`
