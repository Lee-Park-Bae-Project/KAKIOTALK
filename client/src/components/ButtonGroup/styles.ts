import styled from 'styled-components';
import Flex from '../../commons/Flex';

interface CotnainerProps {
  direction: 'row' | 'col';
  right?: boolean;
}
const Container = styled(Flex)<CotnainerProps>`
  flex-direction: ${(props) => (props.direction == 'row' ? 'row' : 'column')};
  justify-content: ${(props) => (props.right ? 'flex-end' : 'flex-start')}
`;


export default Container;
