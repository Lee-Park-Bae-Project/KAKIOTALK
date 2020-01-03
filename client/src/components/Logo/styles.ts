import styled from 'styled-components';
import Flex from '../../commons/Flex';
import { device } from '../../styles/global';

export const Container = styled(Flex)``;

export const Img = styled.img`
  border: none;
  @media ${device.mobile} {
    width: 5rem;
    background: black;
  }

  @media ${device.tablet} {
    width: 10rem;
  }

  @media ${device.desktop} {
    width: 15rem;
  }
`;
