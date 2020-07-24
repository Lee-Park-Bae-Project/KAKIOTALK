export interface ChatFromClientArgs {
  roomUuid: string;
  content: string;
  createdAt: string;
  userUuid: string;
}
export interface ChatFromClient {
  (args: ChatFromClientArgs): void;
}

export interface AfterLoginArgs {
  uuid: string;
}

export interface AfterLogin {
  (args: AfterLoginArgs): void;
}
