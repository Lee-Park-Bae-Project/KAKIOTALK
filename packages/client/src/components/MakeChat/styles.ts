import styled from 'styled-components'
import Flex from 'atoms/Flex'
import { color } from 'styles/global'

interface IsCheck{
  IsCheck: boolean
}

export const Input = styled.input`
position: relative;
opacity: 1;
cursor: pointer;
justify-content: flex-end;
`

export const UserCardContainer = styled(Flex)`
height:5rem;
justify-content: space-between;
padding: 0 1rem;
background-color: ${color.WHITE};
&:hover {
  background-color: ${color.HOVER_GRAY};
}
`

export const Container = styled.label`
  display: flex;
  margin-top: 6px;
  margin-bottom: 3px;
  width:100%;
  cursor: pointer;
  font-size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; 
  align-items: center;
  justify-content: space-between;
  padding-right: 0.8rem;
`
