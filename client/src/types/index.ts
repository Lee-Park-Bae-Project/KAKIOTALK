export interface User {
  uuid: string;
  email:string;
  name: string;
  statusMessage: string;
}
export interface loginInfo {
  loginToken: string;
  isLoggedIn: boolean;
}
export interface Chat {
  uuid:string;
  content:string;
  sender:string;
  roomId:string;
  createdAt:number;
}
export interface Room {
  uuid: string;
  participants: string[];
  lastMessage?: string;
  updatedAt?: number;
  numOfNewMessages?: number;
}

// export interface IRoom {
//   uuid: string;
//   participants: User[];
// }

// export interface User2 {
//   user: {
//     name: string;
//     email: string;
//     uuid: string;
//   };

// }
