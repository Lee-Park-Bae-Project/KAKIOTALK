import styled from 'styled-components';
import Flex from 'atoms/Flex';

export const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  /* max-height: 100vh; */
`;

export const Left = styled(Flex)`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Wrapper = styled(Flex)`
  /* overflow-y: scroll; */
  /* height: 50rem; */
  /* max-height: 100vh; */
  height: 100%;
  float:left;
  overflow-y: auto;
`;

export const NavigationBarWrapper = styled(Flex)`
  height: 100vh;
  width: auto;
`;

export const Column = styled(Flex)`
  flex-direction: column;
`;