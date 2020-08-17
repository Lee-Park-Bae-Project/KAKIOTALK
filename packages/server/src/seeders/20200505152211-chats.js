
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
        roomId: 1,
        content: 'hihi',
        createdAt: moment('2020-07-09 10:11:12').format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment('2020-07-09 10:11:12').format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 2,
        uuid: '4e879584c8fd9c67a9aac350bd1f3e1f',
        roomParticipantsId: 2,
        roomId: 1,
        content: 'hihihi',
        createdAt: moment('2020-07-09 10:12:12').format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment('2020-07-09 10:12:12').format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 3,
        uuid: '40c468a8b9ea5aff8f10c76a681f9173',
        roomParticipantsId: 4,
        roomId: 2,
        content: 'im ghost',
        createdAt: moment('2020-07-09 10:13:12').format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment('2020-07-09 10:13:12').format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 4,
        uuid: '4bc89a80458137398886378ae7e3b105',
        roomParticipantsId: 3,
        roomId: 2,
        content: 'im not ghost',
        createdAt: moment('2020-07-09 10:14:12').format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment('2020-07-09 10:14:12').format('YYYY-MM-DD HH:mm:ss'),
      },
    ]
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
