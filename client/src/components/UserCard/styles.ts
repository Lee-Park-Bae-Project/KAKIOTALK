import styled from 'styled-components';
import Flex from '../../commons/Flex';
import Account from '../../svgs/Account';

interface ContainerProp{
  direction?: 'hor' | 'ver';
}
export const Container = styled(Flex)<ContainerProp>`
  flex-direction: ${(props) => (props.direction === 'hor' ? 'row' : 'column')};
`;

export const UserImg = styled(Flex)`
  width: fit-content;
  height: fit-content;
  margin: 1rem;
`;

export {
  Account,
};
