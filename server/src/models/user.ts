import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'
import { uuid } from 'common/utils'
import { IUser } from 'types'

export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUser;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const User = <UserStatic>sequelize.define('User', {
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
    name: { type: dataTypes.STRING },
    curState: { type: dataTypes.STRING },
    email: { type: dataTypes.STRING },
    accessToken: {
      allowNull: true,
      type: dataTypes.STRING,
    },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })

  User.associate = (models) => {
    User.hasMany(models.Chat)
  }

  return User
}

