import {
  BuildOptions,
  Model,
  Sequelize,
} from 'sequelize'

// const sequelize = new Sequelize('mysql://root:asd123@localhost:3306/mydb')
interface IChat extends Model {
  id: string;
  roomId: string;
  sender: string;
  context: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Need to declare the static model so `findOne` etc. use correct types.
type ChatStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IChat;
  associate: (models: any) => void;
}

// TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.

export default (sequelize: Sequelize, DataTypes) => {
  const Chat = <ChatStatic>sequelize.define('Chat', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    roomId: { type: DataTypes.STRING },
    sender: { type: DataTypes.STRING },
    context: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  })

  Chat.associate = (models) => {

  }
  return Chat
}
