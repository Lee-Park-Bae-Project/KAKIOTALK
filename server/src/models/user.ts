import {
  BuildOptions,
  Model,
  Sequelize,
} from 'sequelize'

import { IUser } from 'types'

type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUser;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, DataTypes) => {
  const User = <UserStatic>sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: { type: DataTypes.STRING },
    curState: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    accessToken: { type: DataTypes.STRING },
  })
  User.associate = (models) => {
    User.hasMany(models.Chat)
  }

  return User
}

