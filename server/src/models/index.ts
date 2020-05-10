import {
  DataTypes, ENUM, Sequelize,
} from 'sequelize'
import { env } from '../configs'
import Chat from './chat'
import User from './user'
import ChatIsRead from './chatIsRead'
import Friend from './friends'
import Room from './room'
import RoomParticipants from './roomParticipants'

export type ModelTypes =
| ReturnType<typeof User>
| ReturnType<typeof Chat>
| ReturnType<typeof ChatIsRead>
| ReturnType<typeof Friend>
| ReturnType<typeof Room>
| ReturnType<typeof RoomParticipants>

const config = require('../configs/sequelize.js')[env || 'development']

export const sequelize = new Sequelize(config.database, config.username, config.password, config)

export const models:{[key: string ]: ModelTypes} = {
  User: User(sequelize, DataTypes),
  Chat: Chat(sequelize, DataTypes),
  ChatIsRead: ChatIsRead(sequelize, DataTypes),
  Friend: Friend(sequelize, DataTypes),
  Room: Room(sequelize, DataTypes),
  RoomParticipants: RoomParticipants(sequelize, DataTypes),
}

// Object.keys(models).forEach((modelName) => {
//   models[modelName].associate(models)
// })
models.User.associate(models)
models.Friend.associate(models)