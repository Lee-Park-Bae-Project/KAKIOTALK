import {
  BuildOptions,
  Model,
  Sequelize,
} from 'sequelize'

interface IRoom extends Model {
  id: string
  numOfParticipants: number
}

type RoomStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IRoom;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, DataTypes) => {
  const Room = <RoomStatic>sequelize.define('Room', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    numOfParticipants: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  })

  Room.associate = (models) => {
    Room.belongsTo(models.Chat)
  }

  return Room
}
