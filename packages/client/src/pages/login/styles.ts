import styled from 'styled-components';
import Flex from '../../atoms/Flex';
import Logo from '../../components/Logo';
import Signin from '../../components/GoogleSignin';
import { color } from '../../styles/global';

export const Container = styled(Flex)`
  background: ${color.YELLO};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

export const SigninButton = styled.div`
  cursor: pointer;
  margin-top: 3rem;
  outline: none;
  background: none;
  border: none;

`;
export {
  Logo,
  Signin,
};
