import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

interface IRoomParticipants extends Model {
  id: string;
  roomId: string;
  participants: string;
  numOfUnread: number;
}

type RoomParticipants = typeof Model & {
  new (values?: object, options?: BuildOptions): IRoomParticipants;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const RoomParticipants = <RoomParticipants>sequelize.define('RoomParticipants', {
    id: {
      primaryKey: true,
      type: dataTypes.STRING,
    },
    roomId: { type: dataTypes.STRING },
    participants: { type: dataTypes.STRING },
    numOfUnread: { type: dataTypes.NUMBER },
  })

  RoomParticipants.associate = (models) => {
    RoomParticipants.hasOne(models.User)
    RoomParticipants.belongsTo(models.Room)
  }

  return RoomParticipants
}
