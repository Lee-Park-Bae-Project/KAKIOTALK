# yarn workspace

<p align="center">
  <img src="../docs/assets/yarn.png" width=50%>
</p>

- 한 `repository` 안에 `client`, `server` 가 관리되고 있습니다.
- 폴더를 기준으로 두 프로젝트를 관리하고 있었지만 서로간에 공유해야할 코드가 생기면서 `client`, `server` 폴더안에 같은 코드를 작성하고 똑같이 맞춰주어야 하는 불편함이 발생했습니다.
- `yarn workspace` 를 이용하면 이러한 점을 개선시킬 수 있습니다.

# workspace 구조

```
│
├─ @kakio/client
│   ├─ src
│   │   └─ ...
│   └─ package.json
│
├─ @kakio/common
│   ├─ src
│   │   └─ ...
│   └─ package.json
│
├─ @kakio/server
│   ├─ src
│   │   └─ ...
│   └─ package.json
│
├─ package.json
└─ tsconfig.js
```

- `client` 와 `server` 에서 둘다 사용하는 라이브러리들이 존재합니다. 그런경우 `project root` 에서 패키지를 관리하고 하위프로젝트인 `client`, `server` 에서 참조해서 사용할 수 있습니다. `yarn workspace` 의 장점이라고 하지만 중간에 도입하다보니 이 특징을 살리지는 못했습니다.
- 3개의 패키지가 존재합니다. 각 패키지의 이름은 package.json 에 적혀있는 'name' property 입니다.

  - @kakio/client
  - @kakio/common
  - @kakio/server

패키지정보는 아래 명령어로 알 수 있습니다.

`workspaceDependencies` 에는 해당 `workspace` 에서 의존하고 있는 의존성이 보입니다.

`@kakio/client` 와 `@kakio/server` 는 각각 `@kakio/common` 에 대한 의존성을 가지고 있습니다.

```sh
> yarn workspaces info
yarn workspaces v1.19.1
{
  "@kakio/client": {
    "location": "packages/client",
    "workspaceDependencies": [
      "@kakio/common"
    ],
    "mismatchedWorkspaceDependencies": []
  },
  "@kakio/common": {
    "location": "packages/common",
    "workspaceDependencies": [],
    "mismatchedWorkspaceDependencies": []
  },
  "@kakio/server": {
    "location": "packages/server",
    "workspaceDependencies": [
      "@kakio/common"
    ],
    "mismatchedWorkspaceDependencies": []
  }
}
✨  Done in 0.09s.
```

# 사용법

최상위 `package.json` 에 는 아래와 같은 `scripts` 가 있습니다. 하지만 반드시 최상위에서 해당 `scripts` 를 실행 시킬 필요는 없습니다. 해당 workspace 로 이동 후 `yarn start` 등을 수행할 수 있습니다. 이때에는 `workspace` 를 지정할 필요가 없습니다.

```sh
# package.json
"client": "yarn workspace @kakio/client", # workspace 를 @kakio/client 로 변경
"server": "yarn workspace @kakio/server", # workspace 를 @kakio/common 로 변경
"common": "yarn workspace @kakio/common", # workspace 를 @kakio/server 로 변경
"common:start": "yarn common build:watch", # workspace 를 @kakio/common 로 변경 후 build:watch 수행
"common:build": "yarn common build", # workspace 를 @kakio/common 로 변경 후 build 수행
"client:start": "yarn client start", # workspace 를 @kakio/client 로 변경 후 start 수행
"client:build": "yarn client build", # workspace 를 @kakio/client 로 변경 후 build 수행
"server:start": "yarn server start", # workspace 를 @kakio/server 로 변경 후 start 수행
"server:build": "yarn server build" # workspace 를 @kakio/server 로 변경 후 build 수행
```

`common package` 에서 코드를 불러올 때는 아래처럼 할 수 있습니다.

```typescript
import { add } from "@kakio/common";
```

개발중에는 `common package` 를 `watch` 모드로 `tsc` 실행시켜두시면 됩니다.

배포시에는 `common package` 를 `client` 혹은 `server` 와 함께 빌드하여 결과물을 배포하면 됩니다.

`src` 에 있는 코드들이 실시간으로 js 로 변환되어 `dist` 폴더에 담기게 되고 다른 `package` 에서 `common` `package` 를 참조할 시 이 `dist` 폴더를 바라보게 됩니다. 이는 `common/package.json` 에 설정되어 있습니다.

```sh
# packages/common/package.json
"main": "dist/index.js",
"typings": "dist/index.d.ts",
```
