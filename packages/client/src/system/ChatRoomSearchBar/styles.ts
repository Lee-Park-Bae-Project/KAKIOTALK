import styled from 'styled-components'
import { color } from 'styles/global'
import search from 'assets/baseline_search_black_18dp.png'

interface ActicleProps{
  open: boolean,
}

export const Container = styled.div<ActicleProps>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: 100%;
  background: ${color.LIGHT_GRAY};
  transition: all 0.s ease-in;
`

export const Wrapper = styled.div`
  display: flex;
  height: 1.5rem;
  margin: 0.5rem;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  padding: 4px 1.5rem 4px 1rem;
  background: url(${search}) no-repeat -1px;
  border: solid #E6E6E6 1px;
`

interface SearchClearWrapperProps{
  hasContent: boolean;
}
export const SearchClearWrapper = styled.span<SearchClearWrapperProps>`
  position: relative;
  left: -1.5rem;
  border-radius: 100%;
  background: #8A8A8A;
  opacity: ${({ hasContent }) => (hasContent ? '1' : '0')};
  transition: all 0.1s ease-in-out;
`
