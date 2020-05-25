export interface AfterLogin{
  uuid: string;
}

export interface SendMsg {
  roomUuid: string;
  content: string;
  createdAt: string;
  userUuid: string;
}

export interface JoinRooms {
  roomUuids: string[];
}
