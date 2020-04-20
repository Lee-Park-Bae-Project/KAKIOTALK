import {
  DataTypes, Sequelize,
} from 'sequelize'
import { env } from '../configs'
import Chat from './chat'
import User from './user'
import ChatIsRead from './chatIsRead'
import Friend from './friends'
import Room from './room'
import RoomParticipants from './roomParticipants'

const config = require('../configs/sequelize.js')[env || 'development']

const sequelize = new Sequelize(config.database, config.username, config.password, config)

const models = {
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

export default models
