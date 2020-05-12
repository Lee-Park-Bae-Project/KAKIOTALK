import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IRoomParticipants } from '../types'
import { uuid } from '../common/utils'

type RoomParticipants = typeof Model & {
  new (values?: object, options?: BuildOptions): IRoomParticipants;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const RoomParticipants = <RoomParticipants>sequelize.define('room_participants', {
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
    RoomParticipants.hasMany(
      models.User, {
        sourceKey: 'userId',
        foreignKey: 'id',
        as: 'participants',
      }
    )

    RoomParticipants.hasOne(
      models.Room, {
        sourceKey: 'roomId',
        foreignKey: 'id',
        as: 'roomInfo',
      }
    )
  }
  return RoomParticipants
}
