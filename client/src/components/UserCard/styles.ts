import styled from 'styled-components';
import Flex from '../../commons/Flex';
import { color, fontSize } from '../../styles/global';

interface ContainerProp{
  direction?: 'row' | 'col';
}
export const Container = styled(Flex)<ContainerProp>`
  width: 15rem;
  padding: 0 1rem;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
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
