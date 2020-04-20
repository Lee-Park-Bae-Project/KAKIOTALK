import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IUser } from 'types'

type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUser;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const User = <UserStatic>sequelize.define('User', {
    id: {
      primaryKey: true,
      type: dataTypes.STRING,
    },
    name: { type: dataTypes.STRING },
    curState: { type: dataTypes.STRING },
    email: { type: dataTypes.STRING },
    accessToken: { type: dataTypes.STRING },
  })
  User.associate = (models) => {
    User.hasMany(models.Chat)
  }

  return User
}

