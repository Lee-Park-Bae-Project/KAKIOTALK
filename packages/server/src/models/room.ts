import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { Room } from '@kakio/common'
import { UserModel } from './user'

export const ROOM_ASSOCIATION_ALIAS = { RoomParticipants: 'participants' as const }

export interface RoomModel extends Model, Room {
  [ROOM_ASSOCIATION_ALIAS.RoomParticipants]: UserModel[]
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
  }

  return RoomStaticModel
}
