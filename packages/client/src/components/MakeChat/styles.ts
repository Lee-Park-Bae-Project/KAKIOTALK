import styled, { css } from 'styled-components'
import Flex from 'atoms/Flex'
import { color } from 'styles/global'

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  &:after{
  content: "";
  position: absolute;
  display: none;
  }
`
export const Input = styled.input`
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
&:checked{
  ${Checkmark}:after{
    display:block;
  }
}
`
export const UserCardContainer = styled(Flex)`
height:5rem;
justify-content: flex-start;
padding: 0 1rem;
background-color: ${color.WHITE};
&:hover {
  background-color: ${color.HOVER_GRAY};
}
`
export const ProfileWrapper = styled(Flex)`
height:5rem;
justify-content: flex-start;
padding: 0 1rem;
justify-content: flex-start;
`

export const Container = styled.label`
  display: flex;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; 
  /** 선택했을 때 배경색 변경 */
  &:hover ${Input} ~ ${Checkmark}{
    background-color:${color.HOVER_GRAY}    
  }
  /** 노란색 체크 */
  & ${Input}:checked ~ ${Checkmark}{
    background-color: ${color.YELLO}
  }
  
  & ${Input}:checked ~ ${Checkmark}:after{
    display: block;
  }
  
  & ${Checkmark}:after{
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  }
`
