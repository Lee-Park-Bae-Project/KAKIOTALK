import styled from 'styled-components';
import Flex from '../../commons/Flex';
import { device } from '../../styles/global';

export const Container = styled(
  Flex,
)``;

export const Img = styled.img`
  @media ${device.mobile} {
    width: 10rem;
  }

  @media ${device.tablet}{
    width: 12rem;
  }

  @media ${device.desktop} {
    width: 15rem;
  }
`;
