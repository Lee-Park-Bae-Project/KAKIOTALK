import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'
import { User } from '@kakio/common'
import { RoomModel } from './room'
import { FriendModel } from './friends'

export const USER_ASSOCIATION_ALIAS = {
  RoomParticipants: 'rooms' as const,
  Friend: 'friend' as const,
}
export interface UserModel extends Model, User {
  [USER_ASSOCIATION_ALIAS.RoomParticipants]?: RoomModel[];
  [USER_ASSOCIATION_ALIAS.Friend]: FriendModel[];
}

export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const UserStaticModel = <UserStatic>sequelize.define('users', {
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
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    statusMessage: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    googleId: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    googleAccessToken: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    googleRefreshToken: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    accessToken: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  },)

  UserStaticModel.associate = (models: any) => {
    UserStaticModel.belongsToMany(
      models.Room,
      {
        through: models.RoomParticipants,
        as: USER_ASSOCIATION_ALIAS.RoomParticipants,
        foreignKey: 'userId',
        otherKey: 'roomId',
      }
    )

    UserStaticModel.hasMany(models.Friend, {
      foreignKey: 'userId',
      sourceKey: 'id',
      as: USER_ASSOCIATION_ALIAS.Friend,
    })
  }

  return UserStaticModel
}

