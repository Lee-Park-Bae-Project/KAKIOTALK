import styled from 'styled-components';
import Flex from 'atoms/Flex';
import { color, fontSize } from 'styles/global';

export const Container = styled(Flex)`
  height: 5rem;
  justify-content: flex-start;
  padding: 0 1rem;
  background-color: ${color.WHITE};
  &:hover{
    background-color: ${color.HOVER_GRAY};
  }
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
