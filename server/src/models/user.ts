import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'
import { IUser } from '../types'
import { uuid } from '../common/utils'

export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUser;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const User = <UserStatic>sequelize.define('users', {
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
      defaultValue: uuid(),
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    status: {
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
  })
  User.associate = (models:any)=>{
    User.hasMany(models.Friend,{
      foreignKey: 'userId',
      sourceKey :'id',
      as:'friend'
    })
  }
  return User
}



