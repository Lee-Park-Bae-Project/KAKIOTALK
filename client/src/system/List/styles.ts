import styled from 'styled-components';
import Flex from 'atoms/Flex';

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  width: auto;
  height: 100vh;
  float:left;
  justify-content: flex-start;
  margin-right: auto;
  width: 100%;
  /* min-width: 20rem; */
`;

export const ItemWrapper = styled(Flex)`
  width: 100%;
`;
