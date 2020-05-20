import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IRoomParticipants } from '../types'
import { uuid } from '../common/utils'
import { UserModel } from './user'
import { RoomModel } from './room'

export const ROOM_PARTICIPANTS_ASSOCIATION_ALIAS = {
  User: 'sender' as const,
  Room: 'room' as const,
}

export interface RoomParticipantsModel extends Model, IRoomParticipants {
  [ROOM_PARTICIPANTS_ASSOCIATION_ALIAS.User]?: UserModel;
  [ROOM_PARTICIPANTS_ASSOCIATION_ALIAS.Room]?: RoomModel;
}

export type RoomParticipantsStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): RoomParticipantsModel;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const RoomParticipants = <RoomParticipantsStatic>sequelize.define('room_participants', {
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

  RoomParticipants.associate = (models: any) => {
    RoomParticipants.belongsTo(
      models.User, {
        as: 'sender',
        foreignKey: 'userId',
        targetKey: 'id',
      }
    )
    RoomParticipants.belongsTo(
      models.Room, {
        as: 'room',
        foreignKey: 'roomId',
        targetKey: 'id',
      }
    )
    // RoomParticipants.hasMany(models.Room)
    // RoomParticipants.hasMany(models.User)
  }
  return RoomParticipants
}
