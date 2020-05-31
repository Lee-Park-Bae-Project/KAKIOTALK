import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IChatIsRead } from '../types'

export interface ChatIsReadModel extends Model, IChatIsRead {}

export type ChatIsReadStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ChatIsReadModel;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const ChatIsRead = <ChatIsReadStatic>sequelize.define('chat_is_read', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    uuid: {
      allowNull: false,
      unique: true,
      type: dataTypes.UUIDV4,
      defaultValue: dataTypes.UUIDV4,
    },
    unreaderId: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    chatId: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })

  ChatIsRead.associate = (models: any) => {}

  return ChatIsRead
}
