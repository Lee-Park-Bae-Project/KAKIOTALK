import styled from 'styled-components';
import Flex from 'commons/Flex';

export const Container = styled(Flex)`
  height: 5rem;
`;

export const ImgWrapper = styled(Flex)`
  margin: 1rem;
`;

export const InfoWrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;

  span{
    text-overflow: ellipsis;
    overflow: hidden;
    width: 15rem;
    white-space: nowrap;
  };
`;


export const SubInfoWrapper = styled(Flex)`
  flex-direction: column;
`;
