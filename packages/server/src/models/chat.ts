import {
  BuildOptions, DataTypes, Model, Sequelize,
} from 'sequelize'

import { Models } from '@kakio/common'
import { RoomParticipantsModel } from './roomParticipants'
import { RoomModel } from './room'

export const CHAT_ASSOCIATION_ALIAS = {
  RoomParticipants: 'metaInfo' as const,
  Room: 'room' as const,
}

export interface ChatModel extends Model, Models.Chat {
  [CHAT_ASSOCIATION_ALIAS.RoomParticipants]?: RoomParticipantsModel
  [CHAT_ASSOCIATION_ALIAS.Room]: RoomModel
}

export type ChatStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ChatModel
  associate: (models: any) => void
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const ChatStaticModel = <ChatStatic>sequelize.define('chats', {
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
    roomParticipantsId: {
      allowNull: false, type: dataTypes.INTEGER.UNSIGNED,
    },
    content: {
      type: dataTypes.TEXT, allowNull: false,
    },
    roomId: {
      allowNull: false,
      unique: true,
      type: dataTypes.INTEGER.UNSIGNED,

    },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })
  ChatStaticModel.associate = (models: any) => {
    ChatStaticModel.belongsTo(models.RoomParticipants, {
      foreignKey: 'roomParticipantsId',
      targetKey: 'id',
      as: CHAT_ASSOCIATION_ALIAS.RoomParticipants,
    })
    ChatStaticModel.belongsTo(models.Room, {
      foreignKey: 'roomId',
      targetKey: 'id',
      as: CHAT_ASSOCIATION_ALIAS.Room,
    })
  }

  return ChatStaticModel
}
