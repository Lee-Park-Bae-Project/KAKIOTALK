import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

interface IFriend {
  id: string
  followerId: string
  followeeId: string
}

type FriendStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IFriend
  associate: (models: any) => void
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const Friend = <FriendStatic>sequelize.define('friend', {
    id: {
      primaryKey: true,
      type: dataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    followerId: { type: dataTypes.STRING },
    followeeId: { type: dataTypes.STRING },
  })

  Friend.associate = (models) => {
    Friend.hasOne(models.User, {
      sourceKey: 'followerId',
      foreignKey: 'id',
    })
    Friend.hasOne(models.User, {
      sourceKey: 'followeeId',
      foreignKey: 'id',
    })
  }

  return Friend
}
