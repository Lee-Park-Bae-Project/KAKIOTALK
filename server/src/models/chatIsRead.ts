import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IChatIsRead } from 'types'

type ChatIsReadStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IChatIsRead;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const ChatIsRead = <ChatIsReadStatic>sequelize.define('ChatIsRead', {
    id: {
      primaryKey: true,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    uuid: {
      allowNull: false,
      unique: true,
      type: dataTypes.UUIDV4,
      defaultValue: () => dataTypes.UUIDV4,
    },
    userId: { type: dataTypes.STRING },
    chatId: { type: dataTypes.STRING },
    isRead: { type: dataTypes.BOOLEAN },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })
  ChatIsRead.associate = (models) => {
    ChatIsRead.belongsTo(models.User)
    ChatIsRead.belongsTo(models.Chat)
  }

  return ChatIsRead
}
