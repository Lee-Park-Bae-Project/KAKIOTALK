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
      type: dataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    numOfParticipants: {
      type: dataTypes.NUMBER,
      allowNull: false,
    },
  })

  Room.associate = (models) => {
    Room.belongsTo(models.Chat)
  }

  return Room
}
