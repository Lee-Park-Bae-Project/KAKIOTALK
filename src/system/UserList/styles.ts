import styled from 'styled-components';
import Flex from 'atoms/Flex';
import { color } from 'styles/global';

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1rem;
  margin-bottom: auto;
  background-color: ${color.WHITE};
  /* height: 100vh; */
  
  width: 100%;
  margin: 0;
  margin-right: auto;
  margin-bottom: auto;
`;

export const Friend = styled(Flex)`
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 1rem;
`;

export const H3 = styled.h3`
  text-indent: 1rem;
`;
export const P = styled.span`
  text-indent: 0.5rem;
`;
