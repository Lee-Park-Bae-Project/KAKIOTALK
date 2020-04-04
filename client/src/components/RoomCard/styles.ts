import styled, { css } from 'styled-components';
import Flex from 'commons/Flex';
import { color, weight } from 'styles/global';

export const grayColor = css`
  color: ${(props) => color.GRAY};
`;

export const Container = styled(Flex)`
  height: 5rem;
  margin: 0.5rem 0;
  min-width: 10rem;
  &:hover{
    background: ${color.HOVER_GRAY};
  }
`;

export const RoomInfoWrapper = styled.div`
  display: flex;
  max-width: 80%;

`;

export const ImgWrapper = styled.div`
  margin: 1rem;
  width: auto;
`;

export const InfoWrapper = styled.div`
  flex-direction: column;
  align-items: flex-start;
`;

export const Row = styled.div`
  justify-content: left;
`;

export const NumWrapper = styled.span`
  ${(props) => grayColor};
  /* color: ${color.GRAY}; */
`;
export const UserListWrapper = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
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
  /* width: 10rem; */
  height: 2.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubInfoWrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-end;
  span{
    ${(props) => grayColor};
  }  
`;

export const Time = styled.span`
  font-size: 0.7rem;
`;
