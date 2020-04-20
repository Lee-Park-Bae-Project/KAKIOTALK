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
      type: dataTypes.STRING,
    },
    userId: { type: dataTypes.STRING },
    chatId: { type: dataTypes.STRING },
    isRead: { type: dataTypes.BOOLEAN },
  })
  ChatIsRead.associate = (models) => {
    ChatIsRead.belongsTo(models.User)
    ChatIsRead.belongsTo(models.Chat)
  }

  return ChatIsRead
}
