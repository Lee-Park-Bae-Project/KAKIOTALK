import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { Models } from '@kakio/common'
import { UserModel } from './user'
import { ChatModel } from './chat'

export const ROOM_ASSOCIATION_ALIAS = {
  RoomParticipants: 'participants' as const,
  Chats: 'chats' as const,
}

export interface RoomModel extends Model, Models.Room {
  [ROOM_ASSOCIATION_ALIAS.RoomParticipants]: UserModel[],
  [ROOM_ASSOCIATION_ALIAS.Chats]: ChatModel[]

}

export type RoomStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): RoomModel;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const RoomStaticModel = <RoomStatic>sequelize.define('rooms', {
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
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })

  RoomStaticModel.associate = (models: any) => {
    RoomStaticModel.belongsToMany(
      models.User,
      {
        through: models.RoomParticipants,
        as: ROOM_ASSOCIATION_ALIAS.RoomParticipants,
        foreignKey: 'roomId',
        otherKey: 'userId',
      }
    )
    RoomStaticModel.hasMany(
      models.Chat,
      {
        foreignKey: 'roomId',
        sourceKey: 'id',
        as: ROOM_ASSOCIATION_ALIAS.Chats,
      }

    )
  }

  return RoomStaticModel
}
