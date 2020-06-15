
const moment = require('moment')

const tableName = 'chats'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    tableName,
    [
      {
        id: 1,
        uuid: '487d5371680091bfbef4549652151b6d',
        roomParticipantsId: 1,
        content: 'hihi',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 2,
        uuid: '4e879584c8fd9c67a9aac350bd1f3e1f',
        roomParticipantsId: 2,
        content: 'hihihi',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 3,
        uuid: '40c468a8b9ea5aff8f10c76a681f9173',
        roomParticipantsId: 4,
        content: 'im ghost',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 4,
        uuid: '4bc89a80458137398886378ae7e3b105',
        roomParticipantsId: 3,
        content: 'im not ghost',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
    ]
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
