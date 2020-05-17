import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import {
  IRoom, IRoomParticipants,
} from '../types'
import { uuid } from '../common/utils'
import { UserModel } from './user'

export const ROOM_ASSOCIATION_ALIAS = { RoomParticipants: 'participants' as const }

export interface RoomModel extends Model, IRoom {
  [ROOM_ASSOCIATION_ALIAS.RoomParticipants]: UserModel[]
}

export type RoomStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): RoomModel;
  associate: (models: any) => void;
  [ROOM_ASSOCIATION_ALIAS.RoomParticipants]?: IRoomParticipants
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const Room = <RoomStatic>sequelize.define('rooms', {
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
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })

  Room.associate = (models: any) => {
    Room.belongsToMany(
      models.User,
      {
        through: models.RoomParticipants,
        as: ROOM_ASSOCIATION_ALIAS.RoomParticipants,
        foreignKey: 'roomId',
        otherKey: 'userId',
      }
    )
    // Room.hasMany(models.RoomParticipants)
  }

  return Room
}
