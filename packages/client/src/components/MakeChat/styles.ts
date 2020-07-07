import styled, { css } from 'styled-components'
import Flex from 'atoms/Flex'
import { color } from 'styles/global'

export const Checkmark = styled.span`
  position: relative;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  margin-right: 0;
  background-color: #eee;
  &:after{
  content: "";
  position: absolute;
  display: none;
  }
`
export const Input = styled.input`
position: relative;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
justify-content: flex-end;
&:checked{
  ${Checkmark}:after{
    display:block;
  }
}
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
