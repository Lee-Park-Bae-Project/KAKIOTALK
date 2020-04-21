import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IFriend } from 'types'

type FriendStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IFriend
  associate: (models: any) => void
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const Friend = <FriendStatic>sequelize.define('friend', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    uuid: {
      allowNull: false,
      unique: true,
      type: dataTypes.UUIDV4,
      defaultValue: () => dataTypes.UUIDV4,
    },
    followerId: { type: dataTypes.STRING },
    followeeId: { type: dataTypes.STRING },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
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
