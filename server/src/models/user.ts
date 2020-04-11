import {
  BuildOptions,
  Model,
  Sequelize,
} from 'sequelize'

// TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.
interface IUser extends Model {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

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
    email: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  })
  User.associate = (models) => {
    User.hasMany(models.Chat)
  }

  return User
}

