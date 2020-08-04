# Redux Saga Channel

카키오톡에서는 채팅을 주고받을때 `socket` 이벤트를 활용하고 있다. 원래는 아래처럼 끔찍한 형태로 `socket` 이벤트를 정의한 파일에서 따로 관리하고 있었다.

```typescript
export const socket = socketOpen(configs.SOCKET_URL, {
  transports: ["webso

export const connect = () => {
  socket.on(Sockets.EventMap.connect, (msg: string) => {});
};

export const disconnect = () => {
  socket.on(Sockets.EventMap.disconnect, (msg: string) => {});
};

export const chatFromServer = (dispatch: Dispatch<any>) => {
  socket.on(Sockets.EventMap.chatFromServer, (newChat: ApiChat) => {});
};
export const afterLogin: AfterLogin = ({ uuid }) => {};

export const chatFromClient: ChatFromClient = ({
  roomUuid,
  content,
  createdAt,
  userUuid,
}) => {};

export const joinRooms: JoinRooms = ({ roomUuids }) => {};
```

시간이 갈수록 소켓관련 로직은 복잡해지고 때로는 `redux` 에 `action` 을 `dispatch` 하거나 `view` 단에서 이벤트 중복등록을 막기 위해 `socket.removeEventListener` 를 활용하기도 했었다.

소켓 이벤트는 서버와 프론트 어디에도 포함되지 않는 외부이벤트이다.

소켓 이벤트로 프론트와 서버사이의 어떤 데이터들을 주고 받는 로직은 `socket/socket.ts` 에 정의되어 있는 함수로 땜빵 중이었는데 갈수록 어디에도 속하지 않고 겉도는 느낌이었다.

이런식으로 `socket` 을 다루다보면 로직의 흐름이 굉장히 복잡해지는데 여기저기 쏘다니면서 어디서 에러를 터트릴지도 모르겠고 코드도 왔다갔다 하면서 유지보수하기 굉장히 힘들었다.

> 1. view 에서 socket event 구독
> 2. socket 이벤트 발생
> 3. view 에서 dispatch
> 4. saga 에서 비동기처리 후 dispatch
> 5. reducer 에서 state 업데이트

다행히 redux-saga 에서 제공하는 channel 이벤트를 이용하면 파입입출력, 소켓 이벤트와 같은 외부 이벤트와 결합할 수 있는 방법을 사용할 수 있게 된다.

그래서 아래와 같은 순서로 socket event 를 핸들링 가능해집니다.

> 1. `channel` 에서 이벤트 수신
> 2. `saga` 에서 비동기 로직 처리
> 3. `action dispatch`

혹은

> 1. `view` 에서 `action dispatch`
> 2. `channel` 을 통해 이벤트 `push`

아직 이해를 제대로 못한 부분이 있어서 코드가 상당히 더럽지만 로직이 단순화 되고 관련있는 `side effect` 끼리 묶여서 `saga` 안에서 처리되니 에러처리나 코드 관리가 쉬워질 것 같다.
