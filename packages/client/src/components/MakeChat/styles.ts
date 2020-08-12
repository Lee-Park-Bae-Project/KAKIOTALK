import styled, { css } from 'styled-components'
import Flex from 'atoms/Flex'
import { color } from 'styles/global'

interface IsCheck{
  IsCheck: boolean
}

export const Checkmark = styled.span<IsCheck>`
  position: relative;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  margin-right: 0;
  background-color: #eee;
  ${(props) => props.IsCheck && css`&:after{
  content: "";
  position: absolute;
  display: none;
  }`}
`

export const Input = styled.input<IsCheck>`
position: relative;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
justify-content: flex-end;
${(props) => props.IsCheck && css`&:checked{
  ${Checkmark}:after{
    display:block;
  }
}`}
`

export const UserCardContainer = styled(Flex)<IsCheck>`
height:5rem;
justify-content: space-between;
padding: 0 1rem;
background-color: ${color.WHITE};
${(props) => props.IsCheck && css`&:hover {
  background-color: ${color.HOVER_GRAY};
}`}
`

export const Container = styled.label<IsCheck>`
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
  /** 선택했을 때 배경색 변경 */
  ${(props) => props.IsCheck && css`&:hover ${Input} ~ ${Checkmark}{
    background-color:${color.HOVER_GRAY}    
  }`}
  /** 노란색 체크 */
  ${(props) => props.IsCheck && css`& ${Input}:checked ~ ${Checkmark}{
    background-color: ${color.YELLO}
  }`}
  
  ${(props) => props.IsCheck && css`& ${Input}:checked ~ ${Checkmark}:after{
    display: block;
  }`}
  
  ${(props) => props.IsCheck && css`& ${Checkmark}:after{
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  }`}
`
