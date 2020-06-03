import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

// import { IRoomParticipants } from '../types'
import { RoomParticipants } from '@kakio/common'

import { UserModel } from './user'
import { RoomModel } from './room'

export const ROOM_PARTICIPANTS_ASSOCIATION_ALIAS = {
  User: 'sender' as const,
  Room: 'room' as const,
}

export interface RoomParticipantsModel extends Model, RoomParticipants {
  [ROOM_PARTICIPANTS_ASSOCIATION_ALIAS.User]?: UserModel;
  [ROOM_PARTICIPANTS_ASSOCIATION_ALIAS.Room]?: RoomModel;
}

export type RoomParticipantsStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): RoomParticipantsModel;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const RoomParticipantsStaticModel = <RoomParticipantsStatic>sequelize.define('room_participants', {
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
    userId: {
      allowNull: false,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    roomId: {
      allowNull: false,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })

  RoomParticipantsStaticModel.associate = (models: any) => {
    RoomParticipantsStaticModel.belongsTo(
      models.User, {
        as: 'sender',
        foreignKey: 'userId',
        targetKey: 'id',
      }
    )
    RoomParticipantsStaticModel.belongsTo(
      models.Room, {
        as: 'room',
        foreignKey: 'roomId',
        targetKey: 'id',
      }
    )
    // RoomParticipants.hasMany(models.Room)
    // RoomParticipants.hasMany(models.User)
  }
  return RoomParticipantsStaticModel
}
