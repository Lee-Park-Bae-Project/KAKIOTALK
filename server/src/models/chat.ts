import {
  BuildOptions,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize'

import { IChat } from '../types'
import { uuid } from '../common/utils'

// Need to declare the static model so `findOne` etc. use correct types.
type ChatStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IChat;
  associate: (models: any) => void;
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const Chat = <ChatStatic>sequelize.define('Chat', {
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
    roomId: {
      allowNull: false,
      type: dataTypes.STRING,
    },
    content: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
    senderId: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  })

  return Chat
}
