import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IChat } from 'types'

// Need to declare the static model so `findOne` etc. use correct types.
type ChatStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IChat;
  associate: (models: any) => void;
}

// TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const Chat = <ChatStatic>sequelize.define('Chat', {
    id: {
      primaryKey: true,
      type: dataTypes.STRING,
    },
    roomId: { type: dataTypes.STRING },
    sender: { type: dataTypes.STRING },
    context: { type: dataTypes.STRING },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })

  Chat.associate = (models) => {
    Chat.belongsTo(models.User)
    Chat.belongsTo(models.Room)
  }
  return Chat
}
