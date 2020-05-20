import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IChat } from '../types'
import { uuid } from '../common/utils'
import { RoomModel } from './room'
import { RoomParticipantsModel } from './roomParticipants'

export const CHAT_ASSOCIATION_ALIAS = { RoomParticipants: 'metaInfo ' as const }

export interface ChatModel extends Model, IChat {
  [CHAT_ASSOCIATION_ALIAS.RoomParticipants]?: RoomParticipantsModel;
}

export type ChatStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ChatModel;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const Chat = <ChatStatic>sequelize.define('chats', {
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
      defaultValue: uuid(),
    },
    roomParticipantsId: {
      allowNull: false,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    content: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })
  Chat.associate = (models: any) => {
    Chat.belongsTo(models.RoomParticipants, {
      foreignKey: 'roomParticipantsId',
      targetKey: 'id',
      as: CHAT_ASSOCIATION_ALIAS.RoomParticipants,
    })
  }

  return Chat
}
