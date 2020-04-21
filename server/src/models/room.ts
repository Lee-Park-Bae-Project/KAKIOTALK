import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IRoom } from 'types'

type RoomStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IRoom;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const Room = <RoomStatic>sequelize.define('Room', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    uuid: {
      allowNull: false,
      unique: true,
      type: dataTypes.UUID,
      defaultValue: () => dataTypes.UUIDV4,
    },
    numOfParticipants: {
      type: dataTypes.NUMBER,
      allowNull: false,
    },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })

  Room.associate = (models) => {
    Room.belongsTo(models.Chat)
  }

  return Room
}
