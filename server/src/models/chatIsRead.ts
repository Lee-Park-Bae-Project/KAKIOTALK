import {
  BuildOptions,
  Model,
  Sequelize,
} from 'sequelize'

interface IChatIsRead extends Model {
  id: string
  userId: string;
  chatId: string;
  isRead: boolean;
}

type ChatIsReadStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IChatIsRead;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, DataTypes) => {
  const ChatIsRead = <ChatIsReadStatic>sequelize.define('ChatIsRead', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    userId: { type: DataTypes.STRING },
    chatId: { type: DataTypes.STRING },
    isRead: { type: DataTypes.BOOLEAN },
  })
  ChatIsRead.associate = (models) => {
    ChatIsRead.belongsTo(models.User)
    ChatIsRead.belongsTo(models.Chat)
  }

  return ChatIsRead
}
