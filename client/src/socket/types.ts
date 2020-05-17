export interface AfterLogin{
  uuid: string;
}

export interface SendMsg {
  sender: string;
  roomId: string;
  content: string;
  createdAt: string;
}
