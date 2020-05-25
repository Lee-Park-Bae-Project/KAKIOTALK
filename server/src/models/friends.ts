import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IFriend } from '../types'

export interface FriendModel extends Model, IFriend {}

export type FriendStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): FriendModel
  associate: (models: any) => void
}
export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const Friend = <FriendStatic>sequelize.define('friends', {
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
    userId: {
      allowNull: false,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    friendId: {
      allowNull: true,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })
  Friend.associate = (models:any) => {
    Friend.hasOne(models.User, {
      foreignKey: 'id',
      sourceKey: 'friendId',
    })
  }
  return Friend
}
