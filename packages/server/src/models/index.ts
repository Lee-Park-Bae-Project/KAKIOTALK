import {
  DataTypes, Sequelize,
} from 'sequelize'
import { Utils } from '@kakio/common'
import { env } from '../configs'
import Chat, { CHAT_ASSOCIATION_ALIAS } from './chat'
import User, { USER_ASSOCIATION_ALIAS } from './user'
import ChatIsRead from './chatIsRead'
import Friend from './friends'
import Room, { ROOM_ASSOCIATION_ALIAS } from './room'
import RoomParticipants, { ROOM_PARTICIPANTS_ASSOCIATION_ALIAS } from './roomParticipants'

export interface ModelTypes {
  User: ReturnType<typeof User>;
  Chat: ReturnType<typeof Chat>
  ChatIsRead: ReturnType<typeof ChatIsRead>;
  Friend: ReturnType<typeof Friend>;
  Room: ReturnType<typeof Room>;
  RoomParticipants: ReturnType<typeof RoomParticipants>;
}

const config = require('../configs/sequelize.js')[Utils.getNodeEnv()]

export const sequelize = new Sequelize(config.database, config.username, config.password, config)

export const models: ModelTypes = {
  User: User(sequelize, DataTypes),
  Chat: Chat(sequelize, DataTypes),
  ChatIsRead: ChatIsRead(sequelize, DataTypes),
  Friend: Friend(sequelize, DataTypes),
  Room: Room(sequelize, DataTypes),
  RoomParticipants: RoomParticipants(sequelize, DataTypes),
}

Object.keys(models).forEach((modelName) => {
  models[modelName].associate(models)
})

export {
  CHAT_ASSOCIATION_ALIAS,
  USER_ASSOCIATION_ALIAS,
  ROOM_ASSOCIATION_ALIAS,
  ROOM_PARTICIPANTS_ASSOCIATION_ALIAS,
}
