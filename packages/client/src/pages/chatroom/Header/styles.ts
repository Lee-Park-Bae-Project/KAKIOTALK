import styled from 'styled-components'
import { color } from 'styles/global'

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  background: ${color.LIGHT_GRAY};
  justify-content: space-between;
`

export const Title = styled.div`
    position: absolute;
  line-height: 2rem;
  height: 2rem;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
`

export const Back = styled.div`
  cursor: pointer;
  height: 2rem;
`
