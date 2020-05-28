import styled from 'styled-components';
import { color } from 'styles/global';

interface ContainerProps {
  isMine: boolean;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: ${({ isMine }) => (isMine ? 'row-reverse' : 'row')};
`;

export const Wrapper = styled.div`
  width: fit-content;
  background: ${color.WHITE};
  max-width: 70%;
  overflow-wrap: break-word;
  border-radius: 5px;
  margin: 1rem;
  padding: 0.5rem;
`;


export const Time = styled.div`
  align-self: flex-end;
  margin: 1rem 0;
  font-size: 0.8rem;
`;
