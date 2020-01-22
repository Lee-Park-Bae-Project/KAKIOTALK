import styled from 'styled-components';
import Flex from 'commons/Flex';
import { color } from 'styles/global';

export const Container = styled(Flex)`
  background-color: ${color.BROWN};
  height: 3rem;
  justify-content: space-evenly;
  width: 100%;
`;
