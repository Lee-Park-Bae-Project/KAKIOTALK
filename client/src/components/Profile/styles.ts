import styled from 'styled-components';
import Flex from 'commons/Flex';
import { color, fontSize } from 'styles/global';

export const Container = styled(Flex)`
  width: 20rem;
  height: 13rem;
  flex-direction: column;
  background-color: ${color.WHITE};
  align-items: center;
`;

export const NameWrapper = styled.span`
  font-size: ${fontSize.MEDIUM};
  line-height: 2.5rem;

`;

export const StatusWrapper = styled.p`
    margin: 0;
`;

export const Footer = styled(Flex)`
  justify-content: space-evenly;
`;
export const MessageWrapper = styled.span`

`;

export const DeleteWrapper = styled.span`

`;
