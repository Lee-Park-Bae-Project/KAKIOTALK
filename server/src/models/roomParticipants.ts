import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IRoomParticipants } from 'types'

type RoomParticipants = typeof Model & {
  new (values?: object, options?: BuildOptions): IRoomParticipants;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const RoomParticipants = <RoomParticipants>sequelize.define('RoomParticipants', {
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
    roomId: { type: dataTypes.STRING },
    participants: { type: dataTypes.STRING },
    numOfUnread: { type: dataTypes.NUMBER },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })

  RoomParticipants.associate = (models) => {
    RoomParticipants.hasOne(models.User)
    RoomParticipants.belongsTo(models.Room)
  }

  return RoomParticipants
}
