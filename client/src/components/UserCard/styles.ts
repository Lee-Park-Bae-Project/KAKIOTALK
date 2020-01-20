import styled from 'styled-components';
import Flex from 'commons/Flex';
import { color, fontSize } from 'styles/global';

export const Container = styled(Flex)`
  /* width: 15rem; */
  width: 80%;
  justify-content: flex-start;
  padding: 0 1rem;
  background-color: ${color.WHITE};
`;

export const ProfileWrapper = styled(Flex)`
  justify-content: flex-start;

`;

export const StatusMessageWrapper = styled.span`
  font-size: ${fontSize.SMALL};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
