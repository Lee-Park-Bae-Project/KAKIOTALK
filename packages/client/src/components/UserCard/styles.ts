import styled from 'styled-components'
import Flex from 'atoms/Flex'
import {
  color, fontSize,
} from 'styles/global'

export const Container = styled(Flex)`
  height: 5rem;
  justify-content: flex-start;
  padding: 0 1rem;
  background-color: ${color.WHITE};
  &:hover {
    background-color: ${color.HOVER_GRAY};
  }
`

export const ProfileWrapper = styled(Flex)`
  justify-content: flex-start;
`

export const StatusMessageWrapper = styled.span`
  font-size: ${fontSize.SMALL};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const Tri = styled.div`
  width: 0px;
  height: 0px;
  border-top: 15px solid transparent;
  border-right: 30px solid gray;
  border-bottom: 15px solid transparent;
`
