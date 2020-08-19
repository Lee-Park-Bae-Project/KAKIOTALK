import styled from 'styled-components'
import { color } from '../../styles/global'

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;

  background-color: ${color.YELLO};
`

export const H1 = styled.h1`
  padding: 3rem;
  text-align: center;
`
export const H4 = styled.h3`
  text-align: center;
  width: 75%;
  margin: 0 auto;
`

export const LoginWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 22rem;
  background-color: ${color.WHITE};

  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);


  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
