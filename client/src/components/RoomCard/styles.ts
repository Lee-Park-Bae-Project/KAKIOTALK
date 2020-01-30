import styled, { css } from 'styled-components';
import Flex from 'commons/Flex';
import { color, weight } from 'styles/global';

export const grayColor = css`
  color: ${(props) => color.GRAY};
`;

export const Container = styled(Flex)`
  height: 5rem;

  &:hover{
    background: ${color.HOVER_GRAY};
  }
`;

export const ImgWrapper = styled(Flex)`
  margin: 1rem;
  width: auto;
`;

export const InfoWrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;

  
`;

export const Row = styled(Flex)`
`;

export const NumWrapper = styled.span`
  ${(props) => grayColor};
  /* color: ${color.GRAY}; */
`;
export const UserListWrapper = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 10rem;
  white-space: nowrap;
  margin-right: 1rem;

  font-weight: ${weight.STRONG};
`;
export const LastMsgWrapper = styled.div`
  ${(props) => grayColor};
  margin-right: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 10rem;
  height: 2.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubInfoWrapper = styled(Flex)`
  flex-direction: column;
  span{
    ${(props) => grayColor};
  }  
`;
