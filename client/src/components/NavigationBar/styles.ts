import styled from 'styled-components';
import Flex from 'atoms/Flex';
import { color } from 'styles/global';

export const Container = styled(Flex)`
  background-color: ${color.BROWN};
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  width: 3rem;
`;

export const ItemWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-evenly;
  height: 10rem;
  width: 100%;
`;
