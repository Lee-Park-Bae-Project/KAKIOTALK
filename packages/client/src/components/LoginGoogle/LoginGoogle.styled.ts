import styled from 'styled-components'
import btnGoogleSigninDarkDisabled from 'assets/btn_google_signin_dark_disabled.png'
import btnGoogleSigninDarkFocus from 'assets/btn_google_signin_dark_focus.png'
import btnGoogleSigninDarkNormal from 'assets/btn_google_signin_dark_normal.png'
import btnGoogleSigninDarkPressed from 'assets/btn_google_signin_dark_pressed.png'

// eslint-disable-next-line import/prefer-default-export
export const LoginGoogleButton = styled.button`
  width: 10rem;
  height: 2.5rem;

  outline: none;
  border: none;

  background: no-repeat url(${btnGoogleSigninDarkNormal});
  background-size: 10rem;

  cursor: pointer;
  &:focus{
    background: no-repeat url(${btnGoogleSigninDarkFocus});
    background-size: 10rem;
  }

  &:active {
    background: no-repeat url(${btnGoogleSigninDarkPressed});
    background-size: 10rem;
  }
`
