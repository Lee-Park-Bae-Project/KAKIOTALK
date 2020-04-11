import {
  DataTypes, Sequelize,
} from 'sequelize'
import Chat from './chat'
import User from './user'

const sequelize = new Sequelize('mysql://root:1234@localhost:3306/mydb')

const models = {
  User: User(sequelize, DataTypes),
  Chat: Chat(sequelize, DataTypes),
}

export default models
