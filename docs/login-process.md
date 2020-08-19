# 로그인 프로세스

> 카키오톡은 현재 구글 로그인 1개만 가능합니다.

## 기존 프로세스

1. `client` 에서 `react-google-login` 라이브러리로 [google OAuth 2.0 protocal](https://developers.google.com/identity/protocols/oauth2) 응 이용해 로그인을 했습니다.
2. `google` 로부터 받아온 `name`, `email`, `access token`, `refresh token` 등을 `http request` 를 이용해 `server` 로 전송.
3. `server` 에서 `googleId` 등을 포함하는 `json web token` 을 만들어서 `cookie` 에 저장.

물론 로그인 기능자체는 수행이 됩니다만, 위와 같은 프로세스에서는 `client` 가 google 로부터 개인정보를 받고 다시 서버에게 `http` 로 보내줘야 하기 때문에 `sniffing/spoofing` 공격등에 당할 수 있습니다. 물론 배포된 페이지는 인증서를 통해 `https` 통신을 하기 때문에 어느정도 안전은 보장되지만 위험한 여지를 아예 두지 않는게 더 좋다고 생각했습니다.

그래서 이번에는 보안적인 측면을 생각하여 `client` 는 `kakiotalk server` 를 통해서만 `login` 을 수행하게 만들려고 합니다. 일단 `react-google-login` 라이브러리를 걷어냈습니다.

## 새로운 프로세스

1. `client` 는 `kakiotalk server` 에게 로그인을 요청합니다.
2. `kakiotalk server` 에서는 구글 로그인 페이지(`redirect` 하고 싶지만 에러 발생..)를 응답합니다.
3. `client` 는 로그인 페이지로 가서 로그인을 완료하면 `google cloud console` 에 등록된 `redirect url` 로 `redirect` 되고 그때 `authorization code` 값을 `query string` 으로 획득합니다.
4. `authorization code` 를 이용해 `https://oauth2.googleapis.com/token` 로 `access token` 을 요청합니다.
5. 이제 `access token` 을 이용해서 `https://www.googleapis.com/oauth2/v2/userinfo` 한테서 유저정보를 요청합니다.
6. `access token`, `refresh token`, `name`, `email` 등 유저정보를 DB에 저장합니다.

## 로그인 검사

기존에 구현이 덜 되어있던 부분입니다. 원래는 `refresh token` 을 이용해서 `access token` 이 만료되었을때

$$
$$
