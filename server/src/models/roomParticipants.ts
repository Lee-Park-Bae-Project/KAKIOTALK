import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IRoomParticipants } from '../types'
import { uuid } from '../common/utils'

export interface RoomParticipantsModel extends Model, IRoomParticipants {}

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
    RoomParticipants.belongsTo(models.User)
    RoomParticipants.belongsTo(models.Room)
  }
  return RoomParticipants
}
