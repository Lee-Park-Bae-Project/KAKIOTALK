import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { Models } from '@kakio/common'
import { UserModel } from './user'

export const FRIEND_ASSOCIATION_ALIAS = { User: 'user' as const }
export interface FriendModel extends Model, Models.Friend {
  [FRIEND_ASSOCIATION_ALIAS.User]:UserModel
}

export type FriendStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): FriendModel
  associate: (models: any) => void
}
export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const FriendStaticModel = <FriendStatic>sequelize.define('friends', {
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
  FriendStaticModel.associate = (models:any) => {
    FriendStaticModel.hasOne(models.User, {
      foreignKey: 'id',
      sourceKey: 'friendId',
    })
  }
  return FriendStaticModel
}
