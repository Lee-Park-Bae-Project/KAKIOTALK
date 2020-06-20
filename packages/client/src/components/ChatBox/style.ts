import styled from 'styled-components'
import {
  color, weight,
} from 'styles/global'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 1rem;
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
  flex-direction: ${({ isMine }) => (isMine ? 'row-reverse' : 'row')};
`

interface ChatGroupProps {
  isMine: boolean
}
export const ChatGroup = styled.div<ChatGroupProps>`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${(props) => (props.isMine ? 'flex-end' : 'flex-start')};
`

interface NameProps {
  isMine: boolean
}
export const Name = styled.p<NameProps>`
  padding: 0 .5rem;
  display: ${({ isMine }) => (isMine ? 'none' : 'flex')};
`

export const ContentWrapper = styled.div`
  width: 100%;
  &:last-child{
    margin-bottom: 0.5rem;
  }
`

interface ContentProps{
  isMine: boolean
}
export const Content = styled.div<ContentProps>`
  width: fit-content;
  background: ${(props) => (props.isMine ? '#FFE400' : color.WHITE)};
  max-width: 70%;
  overflow-wrap: break-word;
  border-radius: 5px;
  margin: 0.25rem 0.5rem;
  padding: 0.5rem;
`
export const Time = styled.div`
  font-size: 0.6rem;
  font-weight: ${weight.WEAK};
  display: flex;
  margin-top: auto;
  margin-bottom: 0.2rem;
`

interface ContentBorderProp{
  isMine: boolean
}
export const ContentBorder = styled.div<ContentBorderProp>`
  display: flex;
  flex-direction: ${(props) => (props.isMine ? 'row-reverse' : 'row')}
  
`
