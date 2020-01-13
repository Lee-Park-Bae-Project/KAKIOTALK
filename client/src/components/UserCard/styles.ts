import styled from 'styled-components';
import Flex from '../../commons/Flex';

interface ContainerProp{
  direction?: 'row' | 'col';
}
export const Container = styled(Flex)<ContainerProp>`
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
`;

export const UserImg = styled(Flex)`
  width: fit-content;
  height: fit-content;
  margin: 1rem;
`;
