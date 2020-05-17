import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IRoom } from '../types'
import { uuid } from '../common/utils'

type RoomStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IRoom;
  associate: (models: any) => void;
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
        as: 'participants',
        foreignKey: 'roomId',
        otherKey: 'userId',
      }
    )
    // Room.hasMany(models.RoomParticipants)
  }

  return Room
}
