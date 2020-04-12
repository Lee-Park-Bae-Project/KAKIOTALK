import {
  DataTypes, Sequelize,
} from 'sequelize'
import { env } from '../configs'
import Chat from './chat'
import User from './user'

const config = require('../configs/sequelize.js')[env || 'development']

const sequelize = new Sequelize(config.database, config.username, config.password, config)

const models = {
  User: User(sequelize, DataTypes),
  Chat: Chat(sequelize, DataTypes),
}

export default models

